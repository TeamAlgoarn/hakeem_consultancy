import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServerClient";

/**
 * GET  /api/news   -> list all news
 * POST /api/news   -> add or update news
 * DELETE /api/news?id=UUID -> delete news
 */

export async function GET() {
  const { data, error } = await supabaseServer
    .from("news")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { id, title, body: content } = body;

  if (!title || !title.trim()) {
    return NextResponse.json(
      { error: "Title is required" },
      { status: 400 }
    );
  }

  // UPDATE
  if (id) {
    const { data, error } = await supabaseServer
      .from("news")
      .update({
        title: title.trim(),
        body: (content || "").trim(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  }

  // INSERT
  const { data, error } = await supabaseServer
    .from("news")
    .insert([
      {
        title: title.trim(),
        body: (content || "").trim(),
      },
    ])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "id is required" },
      { status: 400 }
    );
  }

  const { error } = await supabaseServer
    .from("news")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
