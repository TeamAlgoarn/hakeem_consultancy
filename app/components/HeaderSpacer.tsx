// A safe offset so content starts below the fixed header.
// ~40px (top bar) + ~56px (nav) = ~96px. We give a tiny buffer.
export default function HeaderSpacer() {
  return <div className="h-[104px]" />;
}
