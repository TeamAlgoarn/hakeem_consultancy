
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';



const reviews = [
  {
    name: 'Varshitha Reddy',
    image: '/reviews/varshitha reddy.jpeg',
    review: 'My experience with this consultancy was amazing!They provided me with step-by-step guidance and made the entire procedure really easy and stress-free.I genuinely appreciate their efforts',
    rating: 5,
  },
   {
    name: 'Md Azhar Khan',
    image: '/reviews/md azhar khan.jpeg',
    review: 'Exceptional guidance for my Germany study process.Everything was well-organised and on time.I’m truly grateful for their support and highly recommend their services .',
    rating: 5,
  },
  {
    name: 'Haseeb Sohail',
    image: '/reviews/Haseeb Sohail.jpeg',
    review: 'I had a very good experience with Hakeem Consultancy.Even though I had some problems getting admission,Hakeem guided me very well and helped me at every step,thank you .',
    rating: 5,
  },
   {
    name: 'rishitha devathoty',
    image: '/reviews/Rishitha Devathoty.jpeg',
    review: 'Hakeem Consultancy Services has been a great support throughout my German visa process.Hakeem is well-versed with the updated procedures and ensured everything was done accurately on time.',
    rating: 5,
  },
  {
    name: 'Arun Kumar',
    image: '/reviews/arun.jpeg',
    review: 'Outstanding support by Hakeem Consultancy!Their personalised approach made my journey smooth and stress-free.thanks Hakeem sir for guiding,highly recommend Hakeem Consultancy',
    rating: 5,
  },
 
   {
    name: 'Nithish Mithra J',
    image: '/reviews/Nithish Mithra J.jpeg',
    review: 'Its a very good consultancy.I am going to germany and he has made the process easy and efficient.this consultancy can be recommended for everyone,thank you for your service',
    rating: 5,
  },
   {
    name: 'Anand Yellanki',
    image: '/reviews/Anand Yellanki.jpeg',
    review: 'Hakeem Sir addresses all queries with clarity and patience,ensuring no question goes unanswered.His professional and supportive approach creates a smooth and reassuring experience in the process.',
    rating: 5,
  },
   {
    name: 'Mohammed Parvez Khan',
    image: '/reviews/Mohammed Parvez Khan.jpeg',
    review: 'I had a fantastic experience with Hakeem Consultancy for my admission process to public universities in Germany.They were knowledgeable,supportive, and attentive to every detail. .',
    rating: 5,
  },
   {
    name: 'Tharun Kankanala',
    image: '/reviews/Tharun Kankanala.jpeg',
    review: 'Hakeem Consultancy was a huge help in getting me into a German public university. They guided me through the whole process, from choosing the right university to applying .',
    rating: 5,
  },
  {
    name:'Chandana Basuthkar',
    image: 'reviews/Chandana Basuthkar.jpeg',
    review: 'This consultancy was a best choice for me to choose as its provides very good services on time,They guided me through the whole process, from choosing the right university to applying .',
    rating: 5,
  },
  {
    name:'Shashikanth Revelly',
    image: '/reviews/Shashikanth Revelly.jpeg',
    review: 'Hakeem Sir is the best for German public university admissions. With 15+ years of experience and a near 100% success rate,he handles everything professionally.I would genuinely recommend you to go.',
    rating: 5,
  },
  {
    name: 'Narendra Pampana',
    image: '/reviews/Narendra Pampana.jpeg',
    review: 'One year back I have met a Hakeem consultancy service in Hyderabad along with my brother with suggestion of his friend.They provide lot of information about our how our process will done..',
    rating: 5,
  },
  {
    name: 'Sainithin Abburi',
    image: '/reviews/Sainithin Abburi.jpeg',
    review: 'Hakeem Consultancy stands out as one of the most reliable and professional services for German university admissions,expert guidance,personalized support ensure a successful journey.',
    rating: 5,
  },
  {
    name: 'Vaibhav M',
    image: '/reviews/Vaibhav M.jpeg',
    review: 'Hakeem Consultancy got me into a great German university and handled the process smoothly, including the visa.Communication could’ve been better,.overall,the service delivered',
    rating: 5,
  },
  {
    name: 'Gopala Krishna Atmakuri',
    image: '/reviews/Gopala Krishna Atmakuri.jpeg',
    review: 'Best consultancy in Hyderabad and highly recommend their services, definitely reccommended to students who are planning for aboard.Thank you so much for service',
    rating: 5,
  },
   {
    name: 'Aruna vadlamudi',
    image: '/reviews/aruna vadlamudi.jpeg',
    review: 'Very good services, thankyou so much,worth money ,very very trusted person, thankyou so much hakeem gaaru.thanks Hakeem sir for guiding,highly recommended',
    rating: 5,
  },
   {
    name: 'Chetan Tandle',
    image: '/reviews/Chetan tandle.jpeg',
    review: 'He helps you with every possible service u ask.. One of the best Consultancy for German process,highly recommend Hakeem Consultancy,thank ypu for best service',
    rating: 5,
  },
   {
    name: 'Yaseen Noorbasha',
    image: '/reviews/Yaseen Noorbasha.jpeg',
    review: 'Amazing experience with Hakeem Consultancy! Their expert guidance made my visa process easy and stress-free. Big thanks to Hakeem Sir—highly recommend! best service',
    rating: 5,
  },
   {
    name: 'Vinit Kumar Chalak',
    image: '/reviews/Vinit Kumar Chalak.jpeg',
    review: 'Hakeem Sir offered excellent support, handling the process smoothly and stress-free. Highly professional and truly reliable—Hakeem Sir—highly recommend! best service!',
    rating: 5,
  },
   {
    name: 'nisarga db',
    image: '/reviews/nisarga db.jpeg',
    review: 'Im truly grateful to Hakeem Consultant for guiding me from scratch in my study abroad journey. With no prior knowledge,they helped me with everything.Highly recommended!',
    rating: 5,
  },
   {
    name: 'sai kumar Reddy',
    image: '/reviews/sai kumar Reddy.jpeg',
    review: 'Thank you, Hakeem Sir, for your expert guidance and unwavering support throughout the process. I highly recommend Hakeem Consultancy to anyone pursuing studies in Germany.',
    rating: 5,
  },
   {
    name: 'Harika Rayalacheruvu',
    image: '/reviews/Harika Rayalacheruvu.jpeg',
    review: 'I had a great assistance from hakkeem sir for my study abroad process. The team is updated on time with all the new protocols from german embassy,best guidance to visa &accommodation.',
    rating: 5,
    
  }, 
  {
    name: 'Sai Mohit ',
    image: '/reviews/Sai Mohit.jpeg',
    review: 'I found him through Google reviews for Germany education and began my process six months early.His knowledge and experience with the procedure are excellent.The price is worth it. ',
    rating: 5,
    
  },
     {
    name: 'Shovin Kakaraddi',
    image: '/reviews/Shovin Kakaraddi.jpeg',
    review: 'Got great help without needing to ask much—everything was handled smoothly in the background.Perfect for someone busy like me, I’d definitely recommend their service!',
    rating: 5,
    
  },
     {
    name: 'Sai Rohit Gupta',
    image: '/reviews/Sai Rohit Gupta.jpeg',
    review: 'My experience with Hakeem sir was great. From aps application to college shortlist and visa application assistance I found great help throughout the process.Thank you',
    rating: 5,
    
  },
     {
    name: 'Amaan Mohammed',
    image: '/reviews/Amaan Mohammed.jpeg',
    review: 'Mr. Hakeem’s expert guidance and deep knowledge of German universities made my visa process smooth and affordable.Highly recommend his support for journey to study in Germany!',
    rating: 5,
    
  },
     {
    name: 'kiran Munireddy',
    image: '/reviews/kiran Munireddy.jpeg',
    review: 'Highly recommend Hakeem Consultancy for anyone planning to study in Germany. Their expert guidance and professional support make the entire process smooth and stress-free..',
    rating: 5,
    
  },
     {
    name: 'Sneha Maddela',
    image: '/reviews/Sneha Maddela.jpeg',
    review: 'Outstanding support by Hakeem Consultancy!Their personalised approach made my journey smooth and stress-free.thanks Hakeem sir for guiding,highly recommend Hakeem Consultancy',
    rating: 5,
    
  },
     {
    name: 'Azmath Khan',
    image: '/reviews/Azmath Khan.jpeg',
    review: 'I had an amazing experience with Mr. Hakeem. With his extensive knowledge and experience he secured multiple German public universities for me, just as he promised,I highly recommend him',
    rating: 5,
    
  },
     {
    name: 'Cage Company',
    image: '/reviews/Cage Company.jpeg',
    review:'Mr. Hakeem’s expert help made our German visa process smooth and affordable, with great guidance on public universities.Thanks to Mr. Hakeem, our journey to study in Germany.',
    rating: 5,
    
  },
     {
    name: 'Mohd Salman',
    image: '/reviews/Mohd Salman.jpeg',
    review: 'Hakeem Sir’s expert guidance helped me get into an English-taught German public university with just a 3-year bachelors.Highly recommend his support for  admission process!',
    rating: 5,
    
  },
     {
    name: 'Vineeth Naidu',
    image: '/reviews/Vineeth Naidu.jpeg',
    review: 'One of the best consultants I have ever seen. Hakeem sir is very straight forward and honest person . I am satisfied with the process. Thank you higly recommended.Best service',
    rating: 5,
    
  },
  {
    name: 'k Reddy',
    image: '/reviews/k Reddy.jpeg',
    review: 'Hakeem Sir guided me through every step of my study abroad journey—from university selection to visa approval—with constant support and expert advice. Thanks to his dedication and help,',
    rating: 5,
    
  },
{
    name: 'Varun Bhandekar',
    image: '/reviews/Varun Bhandekar.jpeg',
    review: 'Great experience with Hakeem Sir. He provided excellent guidance and support throughout the entire process.Highly recommend for anyone seeking assistance with studying abroad.',
    rating: 5,
  },
  {
    name: 'Bhanu tej mutta',
    image: '/reviews/Bhanu tej mutta.jpeg',
    review: 'I recently had my summer intake 2024 application process done with Mr. Hakeems consultancy services,and I must say,his excellent at his work.I highly recommend for Germany applications',
    rating: 5,
  },
    {
    name: 'Kaushik Raj',
    image: '/reviews/Kaushik Raj.jpeg',
    review: 'Hi peeps,I got my free seat at a public university in germany and Hakeem is the person who’s 90% responsible for it! 10% being my efforts. He helped me with each and every step of process.',
    rating: 5,
  },
    {
    name: 'Ajay Varma',
    image: '/reviews/Ajay Varma.jpeg',
    review: 'Hakeem Sir’s guidance made my journey to a German public university smooth and successful. His expert advice and support throughout the process were truly invaluable — thank you, Sir!',
    rating: 5,
  },
    {
    name: 'Mohith Devana',
    image: '/reviews/Mohith Devana.jpeg',
    review: 'My overall experience with Hakeem Consultancy was great.He has done a good job and supported me throughout my US journey.He has a good clarity about every step of the process.Thankyou',
    rating: 5,
  },
    {
    name: 'Shourya Thapliyal',
    image: '/reviews/Shourya Thapliyal.jpeg',
    review: 'This is one of the best consultancy services for Germany. I thank Hakeem consultancy for the help they provided me to get into the public university. Really recommend👍🏻',
    rating: 5,
  },
    {
    name: 'ravi teja',
    image: '/reviews/ravi teja.jpeg',
    review: 'I can confidently say that Best German consultancy in Hyderabad is Hakeem consultancy Services. He made my German process very smooth. Studying in Germany is my ambition',
    rating: 5,
  },
    {
    name: 'Ashirwad Selam',
    image: '/reviews/Ashirwad Selam.jpeg',
    review: 'Hakeem Consultancy made my dream of studying in Germany come true with their expert support in both admission and visa processes.Their step-by-step guidance made everything smooth & stress-free',
    rating: 5,
  },
    {
    name: 'Alphy Jose',
    image: '/reviews/Alphy Jose.jpeg',
    review: 'Studying in germany was one of my biggest dream in life because of Hakeem sir I got my offer letter from germany,Thank you so much from the bottom of my heart for the happiness..',
    rating: 5,
  },  {
    name: 'Pavan Kalyan',
    image: '/reviews/Pavan Kalyan.jpeg',
    review: 'My experience with this consultancy was amazing!They provided me with step-by-step guidance and made the entire procedure really easy and stress-free.I genuinely appreciate their efforts',
    rating: 5,
  },  
    {
    name: 'Poojitha Narem',
    image: '/reviews/Poojitha Narem.jpeg',
    review: 'Hakeem Sir supported me at every step of the admission and visa process with expert guidance and care. His help made the entire journey smooth, stress-free, and successful!',
    rating: 5,
  },
    {
    name: 'sai sandaluri',
    image: '/reviews/sai sandaluri.jpeg',
    review: 'Yes, he is the man we trust him blindly without any hesitation. He has know how to tackle the things and how to provide excellent service to the customer.Thank you  ',
    rating: 5,
  },
  
      {
    name: 'Shams025',
    image: '/reviews/Shams025.jpeg',
    review: 'As far as my experience is considered, service provided by Hakeem sb is amazing, supportive and encouraging.Definitely Recommended.Thank you  ',
    rating: 5,
  },
  {
    name: 'T Kalyani',
    image: '/reviews/T Kalyani.jpeg',
    review: 'I have 3 year degree. I was said that pg diploma is necessary to get admit in the university. But through Hakeem sir I received an admit in german public university.  ',
    rating: 5,
  },  
  {
    name: 'Raja Shekar',
    image: '/reviews/Raja Shekar.jpeg',
    review: 'Hakeem sir is a man of planning and organizing, who has complete knowledge on all the german Universities and courses.They provide the best service for Germany and also supports a lot.',
    rating: 5,
  }, 
  {
    name: 'Saisakesh Dekonda',
    image: '/reviews/Saisakesh Dekonda.jpeg',
    review: 'Blindly trust Mr.Hakeem.All My work done by him.He gives 100% an admission and gives Guidance for VISA process.100% worth joining in his Consultancy.I Truly Recommend him👍👍.',
    rating: 5,
  }, 
   {
    name: 'Ismail haq',
    image: '/reviews/Ismail haq.jpeg',
    review: 'Hakeem sahab has been an excellent guide throughout the journey, a geniune man with sincere concern for you, helped me with my application for germany.thank you',
    rating: 5,
  }, 

  {
    name: 'Rajarshi Chatterjee',
    image: '/reviews/Rajarshi Chatterjee.jpeg',
    review: 'Mr. Hakeem’s expert, transparent, and highly professional support got me 17 German public university admits and a visa in just 5 days. Truly the best for anyone aiming to study in Germany',
    rating: 5,
  }, 
   {
    name: 'Rishitha Reddy',
    image: '/reviews/Rishitha Reddy.jpeg',
    review: 'It was a good experience with this consultancy. Sir has taken care of almost everything right from applying to Universities to getting visa approval and for applying accommodation.',
    rating: 5,
  }, 
   {
    name: 'Arthi Shanigarapu',
    image: '/reviews/Arthi Shanigarapu.jpeg',
    review: 'Complete one man show!! You dont need to worry about anything.sir takes care of everything..you just stay connected with him..Finally  One of the best consultancies.Thank you ',
    rating: 5,
  }, 
  {
    name: 'Prajwal Gaddigoudar',
    image: '/reviews/Prajwal Gaddigoudar.jpeg',
    review: 'One of the best service i have experienced.All the work will be done within time and with perfection.No need to remember or follow up him for the work.Totally Im happy with the service.' ,
    rating: 5,
  }, 
   
   {
    name: 'Prerana K.S.',
    image: '/reviews/Prerana K S.jpeg',
    review: 'I would definitely recommend this Consultancy. Based on my experience ,our point of contact is directly Hakeem .He takes care of everything from application to offer to visa process.',
    rating: 5,
  }, 
   {
    name: 'someshwar reddy ammana.',
    image: '/reviews/someshwar reddy ammana.jpeg',
    review: 'Very professional and helps you to get into your dream university. No fake certificates are encouraged and everything is straightforward with absolute values.PositiveCommunication, Quality',

    rating: 5,
  }, 
    {
    name: 'Vineetha Rallabandi.',
    image: '/reviews/Vineetha Rallabandi.jpeg',
    review: 'Exceptional communication, top-notch quality, and true professionalism define Hakeem Sir’s services. Highly reliable for anyone planning to study in Germany! thank yosu for service',
    rating: 5,
  }, 
   {
    name: 'Abhishek Vishwanath Y T.',
    image: '/reviews/Abhishek Vishwanath Y T.jpeg',
    review: 'Hakeem Sir offers outstanding quality and great value through his expert guidance and reliable support. A perfect choice for anyone pursuing education in Germany!.Good choice',
    rating: 5,
   },
   
  {
    name: 'Venkata Satya Akhilesh Reddipalli.',
    image: '/reviews/Venkata Satya Akhilesh Reddipalli.jpeg',
    review: 'The man with the complete knowledge of German education system. I can say he is the only person among all the consultancies who can get us an admission.He helps you with all the works ',
    rating: 5,
   },


 {
    name: 'Mohammed Sufiyan.',
    image: '/reviews/Mohammed Sufiyan.jpeg',
    review: 'I have been through a lot of consultancies before finding him. In a few words I will say, he will get the job done nevertheless. I got 5 admits out of 7 applied in my first time',
    rating: 5,
   },
   {
    name: 'Amogh Yadav.',
    image: '/reviews/Amogh Yadav.jpeg',
    review: 'The man with humongous knowledge. Take my words, I can say he is the only person among all the consultancies who does work professionally and sincerely.He has the track record of giving 100% .',
    rating: 5,
   },

{
    name: 'Saibaba Tandle.',
    image: '/reviews/Saibaba Tandle.jpeg',
    review: 'To be honest, he doesnt proceed the applications unless you pay him and also he has his own regulations. In a nutshell Straight forward person!!Certainly we get a admission letter but as per his will..',
    rating: 5,
   },
  

 {
    name: ' Praveen Gitta.',
    image: '/reviews/pg.jpeg',
    review: 'Hakeem Sir is a man of deep and complete knowledge when it comes to German universities and their admission process. His expert guidance ensures a smooth and successful journey .',
    rating: 5,
   },  

{
    name: 'Nikhitha Rallabandi ',
    image: '/reviews/Nikhitha Rallabandi.jpeg',
    review: 'Hakeem Sir stands out for his excellent communication and utmost professionalism throughout the entire process.His clear guidance&dedicated support make the journey stress-free.',
    rating: 5,
   },
 
{
    name: ' Hima Teja Lade ',
    image: '/reviews/Hima Teja Lade.jpeg',
    review: 'Had a great experience with Hakeem Sir,he guided me through every step of the admission process with care and clarity.Best consultancy and best service.',
    rating: 5,
},

 {
    name: ' saketh ramana ',
    image: '/reviews/saketh ramana.jpeg',
    review: 'Hakeem Sir demonstrates excellent communication and true professionalism at every stage of the process. His clear guidance and dedicated approach make the experience smooth and trustworthy.',
    rating: 5,
   },
   

{
    name: ' MANOHAR ADAPA ',
    image: '/reviews/MANOHAR ADAPA.jpeg',
    review: 'Hakeem Sir maintains clear and consistent communication throughout the entire process, ensuring youre always informed and confident.His approachable nature makes every step easy to follow .',
    rating: 5,
   },

{
    name: 'Janardhan Sai ',
    image: '/reviews/Janardhan Sai.jpeg',
    review: 'Hakeem Sir’s communication is clear, timely, and reassuring, making every step of the journey smooth and worry-free. His ability to keep you informed builds trust and confidence from start to finish.',
    rating: 5,
   },

{
    name: 'Satya Rahul ',
    image: '/reviews/Satya Rahul.jpeg',
    review: 'Hakeem Sir exhibits exceptional communication skills, providing timely updates and clear guidance at every stage of the process.His professional approach ensures a confident experience',
    rating: 5,
   },
{
    name: 'Mr Shahul',
    image: '/reviews/Mr Shahul.jpeg',
    review: 'Sincere service. Not like all the consultancy who use sugar coated words to attract students and steal their money. Very strict about money.thank you,higly recommended for sucessful journey',
    rating: 5,
   },

{
    name: 'sai viswanath kommeneni',
    image: '/reviews/sai viswanath kommeneni.jpeg',
    review: 'Im Viswanath from kadapa,I had great experience with him. He is very strict in money and certificates,If you provide required documents then definitely you will get admission guys. ',
    rating: 5,
   },

{
    name: 'shyam Samuel',
    image: '/reviews/shyam Samuel.jpeg',
    review: 'Excellent and friendly service ,he discussses with students while applying for universities and gives importance to their opinions,recently,I would any student to consult him ... ',
    rating: 5,
   },
];

import 'swiper/css';
import 'swiper/css/navigation';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center space-x-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <span 
          key={i} 
          className={`transition-all duration-300 ${i < rating ? 
            'text-yellow-400 scale-110' : 
            'text-gray-300 hover:text-yellow-300'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function ReviewSlider() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">
          What Our Students Say
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="relative group">
        <Swiper
          loop={true}
          autoplay={{ 
            delay: 5000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 28 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="px-2"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100 hover:border-blue-100 transform hover:-translate-y-2">
                <div className="relative mb-6 flex-grow">
                  <svg 
                    className="absolute top-0 left-0 w-10 h-10 text-blue-100 opacity-70 -mt-1" 
                    fill="currentColor" 
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 text-base pl-8 leading-relaxed">"{r.review}"</p>
                </div>
                <div className="flex flex-col items-center mt-auto pt-6 border-t border-gray-50">
                  <div className="relative group">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-16 h-16 rounded-full mb-4 object-cover border-4 border-white shadow-lg group-hover:border-blue-200 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">{r.name}</h3>
                  
                  <StarRating rating={r.rating} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="review-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors duration-300 hover:scale-110">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="review-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors duration-300 hover:scale-110">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-10 space-x-2">
        {reviews.slice(0, 5).map((_, i) => (
          <div 
            key={i} 
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 transition-all duration-300 cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
}
