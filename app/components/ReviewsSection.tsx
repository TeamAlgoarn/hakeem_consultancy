'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';


interface Review {
  name: string;
  image: string;
  review: string;
  rating: number;
}


const reviews = [
  {
    name: 'Varshitha Reddy',
    image: '/reviews/varshitha reddy.jpeg',
    review: 'My experience with this consultancy was absolutely amazing! They provided comprehensive step-by-step guidance throughout the entire process and made everything remarkably easy and completely stress-free. I genuinely appreciate all their dedicated efforts and professional support.',
    rating: 5,
  },
   {
    name: 'Md Azhar Khan',
    image: '/reviews/md azhar khan.jpeg',
    review: 'Exceptional guidance throughout my Germany study process with outstanding attention to detail. Everything was perfectly well-organised and completed on time with professional efficiency. I am truly grateful for their comprehensive support and highly recommend their excellent services.',
    rating: 5,
  },
  {
    name: 'Haseeb Sohail',
    image: '/reviews/Haseeb Sohail.jpeg',
    review: 'I had a very positive experience with Hakeem Consultancy throughout my admission journey. Even though I encountered some challenges during the admission process, Hakeem guided me exceptionally well and provided valuable assistance at every step. Thank you for the excellent support.',
    rating: 5,
  },
   {
    name: 'Rishitha Devathoty',
    image: '/reviews/Rishitha Devathoty.jpeg',
    review: 'Hakeem Consultancy Services has been tremendous support throughout my German visa process with exceptional professionalism. Hakeem is remarkably well-versed with all the updated procedures and protocols, ensuring everything was completed accurately and delivered on time.',
    rating: 5,
  },
  {
    name: 'Arun Kumar',
    image: '/reviews/arun.jpeg',
    review: 'Outstanding professional support provided by Hakeem Consultancy throughout my entire journey! Their highly personalised approach made my experience smooth, efficient and completely stress-free. Thanks to Hakeem sir for the excellent guidance, I highly recommend Hakeem Consultancy to everyone.',
    rating: 5,
  },
 
   {
    name: 'Nithish Mithra J',
    image: '/reviews/Nithish Mithra J.jpeg',
    review: 'This is truly a very good consultancy with exceptional service quality. I am going to Germany and Hakeem has made the entire process remarkably easy and highly efficient. This consultancy can be confidently recommended to everyone seeking quality service. Thank you for outstanding support.',
    rating: 5,
  },
   {
    name: 'Anand Yellanki',
    image: '/reviews/Anand Yellanki.jpeg',
    review: 'Hakeem Sir addresses all queries with remarkable clarity and exceptional patience, ensuring that absolutely no question goes unanswered during the process. His professional and supportive approach consistently creates a smooth and reassuring experience throughout the entire journey.',
    rating: 5,
  },
   {
    name: 'Mohammed Parvez Khan',
    image: '/reviews/Mohammed Parvez Khan.jpeg',
    review: 'I had a fantastic experience with Hakeem Consultancy for my admission process to public universities in Germany with excellent results. They were remarkably knowledgeable, supportive, and attentive to every important detail throughout the process.',
    rating: 5,
  },
   {
    name: 'Tharun Kankanala',
    image: '/reviews/Tharun Kankanala.jpeg',
    review: 'Hakeem Consultancy was tremendously helpful in getting me into a prestigious German public university with exceptional guidance. They expertly guided me through the comprehensive process, from choosing the right university to successfully completing applications.',
    rating: 5,
  },
  {
    name:'Chandana Basuthkar',
    image: 'reviews/Chandana Basuthkar.jpeg',
    review: 'This consultancy was the best choice for me as it provides excellent services delivered on time with professional efficiency. They guided me through the comprehensive process, from choosing the right university to successfully completing applications with outstanding support.',
    rating: 5,
  },
  {
    name:'Shashikanth Revelly',
    image: '/reviews/Shashikanth Revelly.jpeg',
    review: 'Hakeem Sir is absolutely the best for German public university admissions with exceptional expertise. With over fifteen years of experience and a near perfect success rate, he handles everything with complete professionalism. I would genuinely recommend everyone to choose his services.',
    rating: 5,
  },
  {
    name: 'Narendra Pampana',
    image: '/reviews/Narendra Pampana.jpeg',
    review: 'One year ago I met Hakeem consultancy service in Hyderabad along with my brother based on his friend suggestion. They provided extensive information about how our entire process would be completed with detailed explanations and professional guidance throughout.',
    rating: 5,
  },
  {
    name: 'Sainithin Abburi',
    image: '/reviews/Sainithin Abburi.jpeg',
    review: 'Hakeem Consultancy stands out as one of the most reliable and professional services for German university admissions with exceptional quality. Their expert guidance and personalized support consistently ensure a successful journey for every student.',
    rating: 5,
  },
  {
    name: 'Vaibhav M',
    image: '/reviews/Vaibhav M.jpeg',
    review: 'Hakeem Consultancy successfully got me into an excellent German university and handled the entire process smoothly, including efficient visa processing. While communication could have been better, overall the service delivered exceptional results with professional efficiency.',
    rating: 5,
  },
  {
    name: 'Gopala Krishna Atmakuri',
    image: '/reviews/Gopala Krishna Atmakuri.jpeg',
    review: 'Best consultancy in Hyderabad with exceptional service quality and I highly recommend their professional services to everyone. Definitely recommended to students who are planning to study abroad with reliable guidance. Thank you so much for outstanding service.',
    rating: 5,
  },
   {
    name: 'Aruna vadlamudi',
    image: '/reviews/aruna vadlamudi.jpeg',
    review: 'Very good services with exceptional quality, thank you so much for the excellent support. Worth every penny invested and very trusted professional person with reliable guidance. Thanks Hakeem sir for expert guidance, highly recommended to everyone.',
    rating: 5,
  },
   {
    name: 'Chetan Tandle',
    image: '/reviews/Chetan tandle.jpeg',
    review: 'He helps you with every possible service you ask for with exceptional professional support. One of the best consultancy services for German process with outstanding results. Highly recommend Hakeem Consultancy, thank you for the best service provided.',
    rating: 5,
  },
   {
    name: 'Yaseen Noorbasha',
    image: '/reviews/Yaseen Noorbasha.jpeg',
    review: 'Amazing experience with Hakeem Consultancy throughout my entire journey! Their expert guidance made my visa process remarkably easy and completely stress-free with professional efficiency. Big thanks to Hakeem Sir for outstanding support, highly recommend their excellent services.',
    rating: 5,
  },
   {
    name: 'Vinit Kumar Chalak',
    image: '/reviews/Vinit Kumar Chalak.jpeg',
    review: 'Hakeem Sir offered excellent support throughout the process, handling everything smoothly and making it completely stress-free with professional guidance. Highly professional and truly reliable consultant with exceptional service quality. Hakeem Sir is highly recommended for best service experience.',
    rating: 5,
  },
   {
    name: 'Nisarga DB',
    image: '/reviews/nisarga db.jpeg',
    review: 'I am truly grateful to Hakeem Consultant for guiding me from the very beginning in my study abroad journey with exceptional support. With absolutely no prior knowledge, they helped me with everything comprehensively. Highly recommended for outstanding professional service.',
    rating: 5,
  },
   {
    name: 'Saikumar Reddy',
    image: '/reviews/sai kumar Reddy.jpeg',
    review: 'Thank you, Hakeem Sir, for your expert guidance and unwavering support throughout the entire process with exceptional professionalism. I highly recommend Hakeem Consultancy to anyone pursuing studies in Germany with confidence and reliability.',
    rating: 5,
  },
   {
    name: 'Harika Rayalacheruvu',
    image: '/reviews/Harika Rayalacheruvu.jpeg',
    review: 'I had great assistance from Hakeem sir for my study abroad process with exceptional professional support. The team stays updated on time with all the new protocols from German embassy, providing best guidance for visa and accommodation arrangements.',
    rating: 5,
    
  }, 
  {
    name: 'Sai Mohit ',
    image: '/reviews/Sai Mohit.jpeg',
    review: 'I found him through Google reviews for Germany education and began my process six months early with excellent planning. His knowledge and experience with the entire procedure are absolutely excellent and comprehensive. The investment is definitely worth the exceptional results.',
    rating: 5,
    
  },
     {
    name: 'Shovin Kakaraddi',
    image: '/reviews/Shovin Kakaraddi.jpeg',
    review: 'Got great help without needing to ask much as everything was handled smoothly in the background with professional efficiency. Perfect solution for someone busy like me with demanding schedule, I would definitely recommend their excellent service to everyone.',
    rating: 5,
    
  },
     {
    name: 'Sai Rohit Gupta',
    image: '/reviews/Sai Rohit Gupta.jpeg',
    review: 'My experience with Hakeem sir was truly great throughout the entire journey. From APS application to college shortlist and visa application assistance, I found exceptional help throughout the comprehensive process. Thank you for outstanding support.',
    rating: 5,
    
  },
     {
    name: 'Amaan Mohammed',
    image: '/reviews/Amaan Mohammed.jpeg',
    review: 'Mr. Hakeem expert guidance and deep knowledge of German universities made my visa process remarkably smooth and highly affordable with excellent results. Highly recommend his professional support for your successful journey to study in Germany.',
    rating: 5,
    
  },
     {
    name: 'Kiran Munireddy',
    image: '/reviews/kiran Munireddy.jpeg',
    review: 'Highly recommend Hakeem Consultancy for anyone planning to study in Germany with confidence and reliability. Their expert guidance and professional support make the entire process smooth, efficient and completely stress-free for students.',
    rating: 5,
    
  },
     {
    name: 'Sneha Maddela',
    image: '/reviews/Sneha Maddela.jpeg',
    review: 'Outstanding support provided by Hakeem Consultancy throughout my entire journey with exceptional professional service! Their personalised approach made my experience smooth, efficient and completely stress-free. Thanks Hakeem sir for expert guidance, highly recommend Hakeem Consultancy to everyone.',
    rating: 5,
    
  },
     {
    name: 'Azmath Khan',
    image: '/reviews/Azmath Khan.jpeg',
    review: 'I had an amazing experience with Mr. Hakeem throughout my entire journey with exceptional results. With his extensive knowledge and professional experience, he secured multiple German public universities for me, exactly as he promised. I highly recommend him.',
    rating: 5,
    
  },
     {
    name: 'Cage Company',
    image: '/reviews/Cage Company.jpeg',
    review:'Mr. Hakeem expert help made our German visa process remarkably smooth and highly affordable with exceptional results, providing great guidance on public universities. Thanks to Mr. Hakeem professional support, our journey to study in Germany became successful.',
    rating: 5,
    
  },
     {
    name: 'Mohd Salman',
    image: '/reviews/Mohd Salman.jpeg',
    review: 'Hakeem Sir expert guidance helped me successfully get into an English-taught German public university with just a three-year bachelor degree. Highly recommend his professional support for comprehensive admission process with exceptional results.',
    rating: 5,
    
  },
     {
    name: 'Vineeth Naidu',
    image: '/reviews/Vineeth Naidu.jpeg',
    review: 'One of the best consultants I have ever encountered in my academic journey. Hakeem sir is very straightforward and honest person with exceptional integrity. I am completely satisfied with the entire process. Thank you, highly recommended for best service.',
    rating: 5,
    
  },
  {
    name: 'K Reddy',
    image: '/reviews/k Reddy.jpeg',
    review: 'Hakeem Sir guided me through every step of my study abroad journey with exceptional support, from university selection to visa approval, providing constant support and expert advice. Thanks to his dedication and professional help throughout the process.',
    rating: 5,
    
  },
{
    name: 'Varun Bhandekar',
    image: '/reviews/Varun Bhandekar.jpeg',
    review: 'Great experience with Hakeem Sir throughout my entire journey with outstanding results. He provided excellent guidance and comprehensive support throughout the entire process with professional efficiency. Highly recommend for anyone seeking quality assistance with studying abroad.',
    rating: 5,
  },
  {
    name: 'Bhanu tej mutta',
    image: '/reviews/Bhanu tej mutta.jpeg',
    review: 'I recently had my summer intake application process completed with Mr. Hakeem consultancy services with exceptional results, and I must say he is absolutely excellent at his professional work. I highly recommend his services for Germany applications.',
    rating: 5,
  },
    {
    name: 'Kaushik Raj',
    image: '/reviews/Kaushik Raj.jpeg',
    review: 'Hi everyone, I got my free seat at a public university in Germany and Hakeem is the person who is ninety percent responsible for this success! Ten percent being my efforts. He helped me with each and every step of the comprehensive process.',
    rating: 5,
  },
    {
    name: 'Ajay Varma',
    image: '/reviews/Ajay Varma.jpeg',
    review: 'Hakeem Sir guidance made my journey to a German public university remarkably smooth and highly successful with outstanding results. His expert advice and comprehensive support throughout the entire process were truly invaluable for my success. Thank you, Sir!',
    rating: 5,
  },
    {
    name: 'Mohith Devana',
    image: '/reviews/Mohith Devana.jpeg',
    review: 'My overall experience with Hakeem Consultancy was truly great with exceptional professional service. He has done excellent work and supported me throughout my comprehensive journey. He has remarkable clarity about every step of the process. Thank you.',
    rating: 5,
  },
    {
    name: 'Shourya Thapliyal',
    image: '/reviews/Shourya Thapliyal.jpeg',
    review: 'This is one of the best consultancy services for Germany with exceptional quality and professional expertise. I thank Hakeem consultancy for the tremendous help they provided me to get into the public university. Really recommend their excellent services.',
    rating: 5,
  },
    {
    name: 'Ravi Teja',
    image: '/reviews/ravi teja.jpeg',
    review: 'I can confidently say that the best German consultancy in Hyderabad is Hakeem consultancy Services with exceptional expertise. He made my German process very smooth and efficient. Studying in Germany was my biggest ambition and he made it possible.',
    rating: 5,
  },
    {
    name: 'Ashirwad Selam',
    image: '/reviews/Ashirwad Selam.jpeg',
    review: 'Hakeem Consultancy made my dream of studying in Germany come true with their expert support in both admission and visa processes. Their comprehensive step-by-step guidance made everything smooth, efficient and completely stress-free throughout the journey.',
    rating: 5,
  },
    {
    name: 'Alphy Jose',
    image: '/reviews/Alphy Jose.jpeg',
    review: 'Studying in Germany was one of my biggest dreams in life and because of Hakeem sir I successfully got my offer letter from Germany. Thank you so much from the bottom of my heart for bringing this happiness into my life.',
    rating: 5,
  },  {
    name: 'Pavan Kalyan',
    image: '/reviews/Pavan Kalyan.jpeg',
    review: 'My experience with this consultancy was absolutely amazing with outstanding professional service! They provided comprehensive step-by-step guidance and made the entire procedure remarkably easy and completely stress-free. I genuinely appreciate all their dedicated efforts and support.',
    rating: 5,
  },  
    {
    name: 'Poojitha Narem',
    image: '/reviews/Poojitha Narem.jpeg',
    review: 'Hakeem Sir supported me at every step of the admission and visa process with expert guidance and exceptional care throughout. His professional help made the entire journey smooth, stress-free, and highly successful with outstanding results.',
    rating: 5,
  },
    {
    name: 'Sai Sandaluri',
    image: '/reviews/sai sandaluri.jpeg',
    review: 'Yes, he is the professional we trust completely without any hesitation or doubt about his expertise. He knows exactly how to tackle challenging situations and how to provide excellent service to every customer. Thank you for outstanding support.',
    rating: 5,
  },
  
      {
    name: 'Shams025',
    image: '/reviews/Shams025.jpeg',
    review: 'As far as my experience is considered, the service provided by Hakeem sir is absolutely amazing, supportive and encouraging throughout the process. Definitely recommended for excellent professional guidance and outstanding results. Thank you for exceptional service.',
    rating: 5,
  },
  {
    name: 'T Kalyani',
    image: '/reviews/T Kalyani.jpeg',
    review: 'I have a three-year degree and was told that a postgraduate diploma is necessary to get admitted to the university. But through Hakeem sir exceptional guidance, I received an admission to a German public university successfully.',
    rating: 5,
  },  
  {
    name: 'Raja Shekar',
    image: '/reviews/Raja Shekar.jpeg',
    review: 'Hakeem sir is a professional of planning and organizing with exceptional skills, who has complete knowledge about all the German Universities and available courses. They provide the best service for Germany and also supports students tremendously.',
    rating: 5,
  }, 
  {
    name: 'Saisakesh Dekonda',
    image: '/reviews/Saisakesh Dekonda.jpeg',
    review: 'Blindly trust Mr. Hakeem for exceptional professional service and outstanding results. All my work was completed by him efficiently. He guarantees admission and provides excellent guidance for the comprehensive process. Absolutely worth joining his consultancy. I truly recommend him.',
    rating: 5,
  }, 
   {
    name: 'Ismail haq',
    image: '/reviews/Ismail haq.jpeg',
    review: 'Hakeem sahab has been an excellent guide throughout the entire journey with exceptional professional support, a genuine person with sincere concern for students. He helped me tremendously with my application for Germany. Thank you for outstanding guidance.',
    rating: 5,
  }, 

  {
    name: 'Rajarshi Chatterjee',
    image: '/reviews/Rajarshi Chatterjee.jpeg',
    review: 'Mr. Hakeem expert, transparent, and highly professional support got me seventeen German public university admits and visa approval in just five days. Truly the best consultant for anyone aiming to study in Germany with exceptional results.',
    rating: 5,
  }, 
   {
    name: 'Rishitha Reddy',
    image: '/reviews/Rishitha Reddy.jpeg',
    review: 'It was an excellent experience with this consultancy throughout my journey. Sir has taken comprehensive care of almost everything right from applying to universities to getting visa approval and for applying accommodation with professional efficiency.',
    rating: 5,
  }, 
   {
    name: 'Arthi Shanigarapu',
    image: '/reviews/Arthi Shanigarapu.jpeg',
    review: 'Complete one professional show with exceptional service quality! You dont need to worry about anything during the process. Sir takes comprehensive care of everything professionally, you just stay connected with him. Finally, one of the best consultancies. Thank you.',
    rating: 5,
  }, 
  {
    name: 'Prajwal Gaddigoudar',
    image: '/reviews/Prajwal Gaddigoudar.jpeg',
    review: 'One of the best services I have experienced with exceptional quality and professional efficiency. All the work will be completed within time and with absolute perfection. No need to remember or follow up with him for work completion. Totally happy with the service.' ,
    rating: 5,
  }, 
   
   {
    name: 'Prerana K.S.',
    image: '/reviews/Prerana K S.jpeg',
    review: 'I would definitely recommend this consultancy based on exceptional service quality. Based on my experience, our point of contact is directly Hakeem with professional communication. He takes comprehensive care of everything from application to offer to visa process.',
    rating: 5,
  }, 
   {
    name: 'Someshwar Reddy Ammana.',
    image: '/reviews/someshwar reddy ammana.jpeg',
    review: 'Very professional service that helps you get into your dream university with exceptional results. No fake certificates are encouraged and everything is straightforward with absolute values and integrity. Positive communication, outstanding quality and professional excellence.',
    rating: 5,
  }, 
    {
    name: 'Vineetha Rallabandi.',
    image: '/reviews/Vineetha Rallabandi.jpeg',
    review: 'Exceptional communication, top-notch quality, and true professionalism define Hakeem Sir services with outstanding results. Highly reliable for anyone planning to study in Germany with confidence! Thank you for exceptional service and professional support.',
    rating: 5,
  }, 
   {
    name: 'Abhishek Vishwanath Y T.',
    image: '/reviews/Abhishek Vishwanath Y T.jpeg',
    review: 'Hakeem Sir offers outstanding quality and great value through his expert guidance and reliable support with exceptional results. A perfect choice for anyone pursuing education in Germany with professional excellence and comprehensive assistance.',
    rating: 5,
   },
   
  {
    name: 'Venkata Satya Akhilesh Reddipalli.',
    image: '/reviews/Venkata Satya Akhilesh Reddipalli.jpeg',
    review: 'The professional with complete knowledge of German education system and exceptional expertise. I can say he is the only person among all consultancies who can guarantee admission successfully. He helps you with all the comprehensive work efficiently.',
    rating: 5,
   },


 {
    name: 'Mohammed Sufiyan.',
    image: '/reviews/Mohammed Sufiyan.jpeg',
    review: 'I have been through many consultancies before finding him with disappointing results. In a few words I will say, he will get the job done nevertheless with exceptional efficiency. I got five admits out of seven applied in my first attempt.',
    rating: 5,
   },
   {
    name: 'Amogh Yadav.',
    image: '/reviews/Amogh Yadav.jpeg',
    review: 'The professional with tremendous knowledge and exceptional expertise in German education. Take my words, I can say he is the only person among all consultancies who works professionally and sincerely. He has an outstanding track record of giving perfect results.',
    rating: 5,
   },

{
    name: 'Saibaba Tandle.',
    image: '/reviews/Saibaba Tandle.jpeg',
    review: 'To be honest, he does not proceed with applications unless you pay him and he has his own professional regulations. In a nutshell, straightforward person with clear policies! Certainly we get admission letter but according to his professional will and expertise.',
    rating: 5,
   },
  

 {
    name: ' Praveen Gitta.',
    image: '/reviews/pg.jpeg',
    review: 'Hakeem Sir is a professional with deep and complete knowledge when it comes to German universities and their comprehensive admission process. His expert guidance ensures a smooth and successful journey with outstanding results for students.',
    rating: 5,
   },  

{
    name: 'Nikhitha Rallabandi ',
    image: '/reviews/Nikhitha Rallabandi.jpeg',
    review: 'Hakeem Sir stands out for his excellent communication and utmost professionalism throughout the entire process with exceptional service quality. His clear guidance and dedicated support make the journey stress-free and highly successful.',
    rating: 5,
   },
 
{
    name: ' Hima Teja Lade ',
    image: '/reviews/Hima Teja Lade.jpeg',
    review: 'Had a great experience with Hakeem Sir throughout my journey, he guided me through every step of the admission process with exceptional care and clarity. Best consultancy with outstanding service quality and professional excellence.',
    rating: 5,
},

 {
    name: ' Saketh Ramana ',
    image: '/reviews/saketh ramana.jpeg',
    review: 'Hakeem Sir demonstrates excellent communication and true professionalism at every stage of the comprehensive process. His clear guidance and dedicated approach make the experience smooth, trustworthy and highly successful with outstanding results.',
    rating: 5,
   },
   

{
    name: ' MANOHAR ADAPA ',
    image: '/reviews/MANOHAR ADAPA.jpeg',
    review: 'Hakeem Sir maintains clear and consistent communication throughout the entire process with exceptional professionalism, ensuring you are always informed and confident about progress. His approachable nature makes every step easy to follow and understand.',
    rating: 5,
   },

{
    name: 'Janardhan Sai ',
    image: '/reviews/Janardhan Sai.jpeg',
    review: 'Hakeem Sir communication is clear, timely, and reassuring with exceptional professionalism, making every step of the journey smooth and worry-free. His ability to keep you informed builds trust and confidence from start to finish.',
    rating: 5,
   },

{
    name: 'Satya Rahul ',
    image: '/reviews/Satya Rahul.jpeg',
    review: 'Hakeem Sir exhibits exceptional communication skills with outstanding professionalism, providing timely updates and clear guidance at every stage of the comprehensive process. His professional approach ensures a confident experience throughout the journey.',
    rating: 5,
   },
{
    name: 'Mr Shahul',
    image: '/reviews/Mr Shahul.jpeg',
    review: 'Sincere service with exceptional quality and professional integrity. Not like all the consultancies who use sugar-coated words to attract students and steal their money. Very strict about financial matters. Thank you, highly recommended for successful journey.',
    rating: 5,
   },

{
    name: 'Sai Viswanath Kommeneni',
    image: '/reviews/sai viswanath kommeneni.jpeg',
    review: 'I am Viswanath from Kadapa, I had great experience with him throughout my journey. He is very strict about money and certificates with professional standards. If you provide required documents then definitely you will get admission successfully.',
    rating: 5,
   },

{
    name: 'Shyam Samuel',
    image: '/reviews/shyam Samuel.jpeg',
    review: 'Excellent and friendly service with outstanding professional quality. He discusses with students while applying for universities and gives importance to their opinions and preferences. Recently, I would recommend any student to consult him for guidance.',
    rating: 5,
   },


  //  new additions
   {
    name: 'Veda Gowri Chepuri',
    image: '/reviews/Veda Gowri.jpg',
    review: 'Had a very nice experience with the consultancy throughout my journey, they are really dedicated towards student welfare and success. We will definitely get an admission from a university if we follow their guidance properly. Coming to my experience, I initially got no admission from public university, but later as they appealed again with persistence, I got an admission in public university in Germany. I am very thankful to this exceptional consultancy services.',
    rating: 5,
   },

   {
    name: 'Mohammed Akhtar',
    image: '/reviews/MA.jpg',
    review: 'From the day I started searching for universities in Germany until the moment I got my visa, Hakeem consultant was by my side with exceptional support. They did not just give me guidance, they supported me through every single step comprehensively. They helped me choose the right university, prepare my applications, and ensure all my documents were in perfect order. They also made the entire visa process so smooth that I never felt lost or confused. Whenever I was stressed or unsure, they patiently explained everything and gave me the confidence to keep going. I am truly grateful for their help, encouragement, and for making this dream of mine come true.',
    rating: 5,
   },

   {
    name: 'Abhiram Karri',
    image: '/reviews/AK.jpg',
    review: 'The team was extremely professional and supportive throughout the entire process with exceptional dedication. They provided clear guidance at every step, answered all my questions patiently, and made the entire experience smooth and completely stress-free. I truly appreciate their dedication and professional expertise.',
    rating: 5,
   },
];

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

function ReviewCard({ name, image, review, rating }: Review) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-2 min-h-[400px] flex flex-col">
      <div className="relative mb-6 flex-grow">
        <svg 
          className="absolute top-0 left-0 w-10 h-10 text-blue-100 opacity-70 -mt-1" 
          fill="currentColor" 
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className={`text-gray-600 text-base pl-8 leading-relaxed text-justify ${expanded ? 'line-clamp-none' : 'line-clamp-4'}`}>"{review}"</p>
        <button 
          onClick={toggleExpanded} 
          className="text-blue-600 hover:underline pl-8 text-sm focus:outline-none"
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      </div>
      <div className="flex flex-col items-center mt-auto pt-6 border-t border-gray-50 flex-shrink-0">
        <div className="relative group">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full mb-4 object-cover border-4 border-white shadow-lg group-hover:border-blue-200 transition-all duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <h3 className="font-bold text-lg text-gray-800 text-center">{name}</h3>
        <StarRating rating={rating} />
      </div>
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
              <ReviewCard 
                name={r.name}
                image={r.image}
                review={r.review}
                rating={r.rating}
              />
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