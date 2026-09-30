/* =====================================================
   HABIB SISO Portfolio - EDITABLE CONTENT
   1) PROFILE_IMG : your photo path
   2) CV_FILE     : your CV file path (e.g. 'cv.pdf'), empty = print page
   3) DES         : your works. cat:'posters' (posters & designs) or cat:'videos' (videos & edits); type:'image' or type:'video'
      - image: img:'xxx.jpg'
      - video: src:'xxx.mp4' + img:(cover image, optional)
      - t = titles [Kurdish, English, Arabic], d = descriptions [Kurdish, English, Arabic]
   ===================================================== */
const PROFILE_IMG='me1.JPG';
const CV_FILE='';

const DES=[
  {cat:'posters', type:'image', img:'24.jpg',
   t:[' میر ئیدریس نێچیرڤان بارزانی', ' Meer idris nechirvan barzani', 'میر ادریس نچیرڤان بارزانی '],
   d:[' میر ئیدریس نێچیرڤان بارزانی', ' Meer idris nechirvan barzani', 'میر ادریس نچیرڤان بارزانی ']},
  {cat:'posters', type:'image', img:'23.jpg',
   t:[' سەرۆک نێچیرڤان بارزانی', 'president nechirvan barzani', 'رئیس نجیرڤان بارزانی '],
   d:[' سەرۆک نێچیرڤان بارزانی', 'president nechirvan barzani', 'رئیس نجیرڤان بارزانی ']},
 
   {cat:'posters', type:'image', img:'4.jpg',
   t:['پۆستەری ریفراندۆم', 'Referendum Poster', 'بوستر استفتاء'],
   d:['پۆستەری سالیادی ریفراندۆم بە وێنەی سەرۆک بارزانی.', 'Anniversary referendum poster with a picture of President Barzani.', 'ملصق ذكرى الاستفتاء بصورة الرئيس بارزاني.']},
  {cat:'posters', type:'image', img:'21.jpg',
   t:[' پۆستەری راگەیاندن', 'Announcement poster', 'ملصق إعلان '],
   d:['دیزاینی پۆستەری راگەیاندن بۆ سەرۆکایەتی هەرێم.', 'A design of a promotional poster for the regional presidency.', 'تصميم ملصق إعلاني لرئاسة الإقليم']},
  {cat:'posters', type:'image', img:'11.jpg',
   t:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  '],
   d:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  ']},
  {cat:'posters', type:'image', img:'20.jpg',
   t:['پۆستەری کۆمپانیای دادبین ', 'dadbin company poster', 'ملصق شركة دادبين '],
   d:['پۆستەری کۆمپانیای دادبین ', 'dadbin company poster', 'ملصق شركة دادبين ']},
  {cat:'posters', type:'image', img:'22.png',
   t:[' پۆستەری ئیدریس بارزانی ', 'idris barzanu poster', 'ملصق ادریس بارزانی  '],
   d:[' پۆستەری ئیدریس بارزانی ', 'idris barzanu poster', 'ملصق ادریس بارزانی  ']},
  {cat:'posters', type:'image', img:'5.jpg',
   t:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  '],
   d:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  ']},
  {cat:'posters', type:'image', img:'10.jpg',
   t:[' ستاندی بازان', ' bazan banner', 'بازان بانر '],
   d:[' ستاندی بازان', ' bazan banner', 'بازان بانر ']},
   {cat:'posters', type:'image', img:'7.jpg',
  t:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  '],
   d:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  ']},
  {cat:'posters', type:'image', img:'19.jpg',
  t:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  '],
   d:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  ']},
 {cat:'posters', type:'image', img:'17.jpg',
   t:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  '],
   d:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  ']},
   {cat:'posters', type:'image', img:'16.jpg',
  t:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  '],
   d:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  ']},
    {cat:'posters', type:'image', img:'55.jpg',
   t:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  '],
   d:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  ']},
 {cat:'posters', type:'image', img:'9.jpg',
 t:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  '],
   d:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  ']},
    {cat:'posters', type:'image', img:'8.jpg',
  t:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  '],
   d:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  ']},
    {cat:'posters', type:'image', img:'3.jpg',
   t:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  '],
   d:['پۆستەر بۆ رێکخراوی بازان  ', 'Poster for a bazan organization', 'ملصق للمنظمة البازان  ']},
    {cat:'posters', type:'image', img:'1.png',
   t:[' لۆگۆ بۆ رێکخراوی بازان', ' bazan organization logo', 'شعار منظمة بازان  '],
   d:[' لۆگۆ بۆ رێکخراوی بازان', ' bazan organization logo', 'شعار منظمة بازان  ']},
   
   {cat:'videos', type:'video', src:'1.mp4', img:'23.jpg',
   t:[' سەرۆک نێچیرڤان بارزانی', 'president nechirvan barzani ', 'رئیس نێچیرڤان بارزانی '],
   d:['نموونەی ڤیدیۆ:  بۆ سەرۆک نێچیرڤان بارزانی    .', 'Sample video: for president neChirvan barzani', 'فيديو تجريبي: رئیس نچیرڤان بارزانی.']},
  {cat:'videos', type:'video', src:'2.mp4', img:'23.jpg',
    t:[' سەرۆک نێچیرڤان بارزانی', 'president nechirvan barzani ', 'رئیس نێچیرڤان بارزانی '],
   d:['نموونەی ڤیدیۆ:  بۆ سەرۆک نێچیرڤان بارزانی    .', 'Sample video: for president neChirvan barzani', 'فيديو تجريبي: رئیس نچیرڤان بارزانی.']},
  {cat:'videos', type:'video', src:'3.mp4', img:'23.jpg',
   t:[' سەرۆک نێچیرڤان بارزانی', 'president nechirvan barzani ', 'رئیس نێچیرڤان بارزانی '],
   d:['نموونەی ڤیدیۆ:  بۆ سەرۆک نێچیرڤان بارزانی    .', 'Sample video: for president neChirvan barzani', 'فيديو تجريبي: رئیس نچیرڤان بارزانی.']},
  {cat:'videos', type:'video', src:'4.mp4', img:'23.jpg',
   t:[' سەرۆک نێچیرڤان بارزانی', 'president nechirvan barzani ', 'رئیس نێچیرڤان بارزانی '],
   d:['نموونەی ڤیدیۆ:  بۆ سەرۆک نێچیرڤان بارزانی    .', 'Sample video: for president neChirvan barzani', 'فيديو تجريبي: رئیس نچیرڤان بارزانی.']}
  ];

/* CATEGORIES (cards in the Designs section). id must match the 'cat' of each item in DES */
const CATS=[
 {id:'posters', t:['پۆستەر و دیزاینەکانم','Posters & My Designs','بوسترات وتصاميمي'], d:['کۆمەڵێک پۆستەر، لۆگۆ و دیزاینی گرافیکی','A collection of posters, logos and graphic designs','مجموعة من البوسترات والشعارات والتصاميم الجرافيكية']},
 {id:'videos', t:['ڤیدیۆ و ئێدیتەکانم','Videos & My Edits','فيديوهاتي ومونتاجاتي'], d:['ڤیدیۆ، مۆنتاژ و ئێدیتی پرۆفیشناڵ','Videos, montages and professional edits','فيديوهات ومونتاجات وتعديلات احترافية']}
];

/* ---------- Translations (texts, skills, languages) ---------- */
const D={
ku:{hi:'سڵاو، من',name:'حبیب سیسۆ',roles:['گرافیک دیزاینەر','مۆنتاژکار','فۆتۆگرافەر'],about:'دیزاینی جوان و مۆنتاژی پرۆفیشناڵ دروست دەکەم بە بەکارهێنانی ئامرازە مۆدێرنەکان. هەمیشە بەدوای داهێنان و کوالیتی بەرزدام.',view:'بینینی کارەکان',cv:'داگرتنی سی ڤی',
back:'گەڕانەوە',cnt:'کار',n1:'دیزاینەکانم',d1:'جۆری کارەکان هەڵبژێرە',add:'زیادکردنی وێنە',
n2:'بروانامەکان',d2:'ڕێچکەی خوێندن و بروانامەکانم',c1:'بروانامەی پەیمانگای داتای ناحکومی',c1d:'پەیمانگای داتای ناحکومی',c2:'کۆمپیوتەر و ئای تی',c2d:'تەواوکراوە',c3:'پرۆگرامینگ',c3d:'تەواوکراوە',c4:'هەمیشە فێربوون و پەرەسەندن',c4d:'',
n3:'کارامییەکانم',d3:'ئەو ئامراز و شارەزاییانەی هەمە',n4:'زمانەکان',d4:'ئەو زمانانەی قسەیان پێدەکەم',n5:'پەیوەندی',d5:'بۆ هەر پرسیار یان کارێک پەیوەندیم پێوە بکە',wa:'واتساپ',foot:'ژمارەی مۆبایل: 07501932907',
nav:['سەرەکی','دیزاینەکانم','بروانامە','کارامییەکان','زمانەکان','پەیوەندی'],
sk:[['ئەدۆبی فۆتۆشۆپ',90],['ئەدۆبی ئیلستریتەر',85],['ئەدۆبی پریمیێر',85],['ئێم ئێس ئۆفیس (Word, Excel, Access)',85],['گرافیک دیزاین',95],['مۆنتاژ',90],['فۆتۆگرافی و ڤیدیۆگرافی',80],['بەکارهێنانی AI',85],['پرۆگرامینگ (HTML, CSS, PHP, MySQL)',45]],
lg:[['کوردی','زۆر باش',95],['تورکی','زۆر باش',90],['فارسی','باش',75],['ئینگلیزی','باش',75]]},
en:{hi:"Hi, I'm",name:'HABIB SISO',roles:['Graphic Designer','Video Editor','Photographer'],about:'I create beautiful designs and professional edits using modern tools. Passionate about creativity and high-quality work.',view:'View My Work',cv:'Download CV',
back:'Back',cnt:'items',n1:'My Designs',d1:'Choose a category',add:'Add image',
n2:'Certificates',d2:'My learning journey and certifications',c1:'Non-Governmental Data Institute Diploma',c1d:'Non-Governmental Data Institute',c2:'Computer & IT',c2d:'Completed',c3:'Programming',c3d:'Completed',c4:'Always learning and growing',c4d:'',
n3:'My Skills',d3:'The tools and expertise I work with',n4:'Languages',d4:'The languages I speak',n5:'Contact',d5:'Reach out for any question or project',wa:'WhatsApp',foot:'Mobile: 07501932907',
nav:['Home','Designs','Certificates','Skills','Languages','Contact'],
sk:[['Adobe Photoshop',90],['Adobe Illustrator',85],['Adobe Premiere',85],['MS Office (Word, Excel, Access)',85],['Graphic Design',95],['Video Montage',90],['Photography & Videography',80],['Using AI',85],['Programming (HTML, CSS, PHP, MySQL)',45]],
lg:[['Kurdish','Excellent',95],['Turkish','Excellent',90],['Persian','Good',75],['English','Good',75]]},
ar:{hi:'مرحباً، أنا',name:'حبيب سيسو',roles:['مصمم جرافيك','مونتير فيديو','مصور'],about:'أصمم تصاميم جميلة وأقوم بمونتاج احترافي باستخدام أحدث الأدوات. شغوف بالإبداع والجودة العالية.',view:'عرض أعمالي',cv:'تحميل السيرة الذاتية',
back:'رجوع',cnt:'عمل',n1:'تصاميمي',d1:'اختر القسم',add:'إضافة صورة',
n2:'الشهادات',d2:'مسيرتي التعليمية وشهاداتي',c1:'دبلوم معهد البيانات الأهلي',c1d:'معهد البيانات الأهلي',c2:'الحاسوب وتقنية المعلومات',c2d:'مكتمل',c3:'البرمجة',c3d:'مكتمل',c4:'التعلم والتطور دائماً',c4d:'',
n3:'مهاراتي',d3:'الأدوات والخبرات التي أتقنها',n4:'اللغات',d4:'اللغات التي أتحدثها',n5:'تواصل معي',d5:'تواصل معي لأي استفسار أو مشروع',wa:'واتساب',foot:'الموبايل: 07501932907',
nav:['الرئيسية','تصاميمي','الشهادات','المهارات','اللغات','تواصل'],
sk:[['أدوبي فوتوشوب',90],['أدوبي إليستريتور',85],['أدوبي بريمير',85],['مايكروسوفت أوفيس (Word, Excel, Access)',85],['التصميم الجرافيكي',95],['المونتاج',90],['التصوير الفوتوغرافي والفيديو',80],['استخدام الذكاء الاصطناعي',85],['البرمجة (HTML, CSS, PHP, MySQL)',45]],
lg:[['الكردية','ممتاز',95],['التركية','ممتاز',90],['الفارسية','جيد',75],['الإنجليزية','جيد',75]]}};
