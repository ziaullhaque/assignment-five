০১.getElementById, getElementsByClassName, এবং querySelector , querySelectorAll এর মধ্যে পার্থক্য কী?

উত্তর : 
(01.) getElementById(id) নির্দিষ্ট id এর element খুঁজে আনা যায় । 
(02.) getElementsByClassName(className) নির্দিষ্ট class নাম দিয়ে একাধিক element খুঁজে আনা যায় ।

(03.)  querySelector(cssSelector) শুধু প্রথম element return করে।
(04.)  querySelectorAll(cssSelector) CSS Selector ব্যবহার করে সব element খুঁজে আনা যায় ।

০২.জাভাস্ক্রিপ্টে ডকুমেন্ট অবজেক্ট মডেল (DOM) এ একটি নতুন উপাদান তৈরি করা?

উত্তর : একটি নতুন HTML উপাদান তৈরি করে document.createElement() পদ্ধতি ব্যবহার করে । এই পদ্ধতিটি এলিমেন্টের ট্যাগ নামকে string আর্গুমেন্ট হিসেবে গ্রহণ করে। এটি তৈরির পরে,  id , className , textContent , innerHTML , অথবা setAttribute() এর মতো বৈশিষ্ট্য ব্যবহার করে এর বৈশিষ্ট্য, class, ID সেট করা যায় ।

০৩. Event Bubbling কী? কীভাবে কাজ করে?

উত্তর : যখন কোনো child element এ event ঘটে, তখন event প্রথমে ওই child → তারপর তার parent → তারপর grandparent → document পর্যন্ত যায়। এটিই bubbling।

০৪. Event Delegation কী? কেন

উত্তর : Parent element এ একটাই event listener বসিয়ে সব child element এর event handleকরা যায়।

কেন দরকার ?
উত্তর : অনেক child element থাকলেও একটাই listener ব্যবহার করা যায়।

০৫. preventDefault() এবং stopPropagation() পদ্ধতির মধ্যে পার্থক্য কী?

উত্তর :  preventDefault() → Element এর default behavior বন্ধ করে।
উত্তর :  stopPropagation() → Event bubbling বা capturing বন্ধ করে।


