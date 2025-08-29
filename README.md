০১.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

উত্তর :
(01.) getElementById(id) নির্দিষ্ট id এর element খুঁজে আনা যায় ।
(02.) getElementsByClassName(className) নির্দিষ্ট class নাম দিয়ে একাধিক element খুঁজে আনা যায় ।

(03.) querySelector(cssSelector) শুধু প্রথম element return করে।
(04.) querySelectorAll(cssSelector) CSS Selector ব্যবহার করে সব element খুঁজে আনা যায় ।

০২.How do you create and insert a new element into the DOM?
উত্তর : একটি নতুন HTML উপাদান তৈরি করে document.createElement() পদ্ধতি ব্যবহার করে । এই পদ্ধতিটি এলিমেন্টের ট্যাগ নামকে string আর্গুমেন্ট হিসেবে গ্রহণ করে। এটি তৈরির পরে,  id , className , textContent , innerHTML , অথবা setAttribute() এর মতো বৈশিষ্ট্য ব্যবহার করে এর বৈশিষ্ট্য, class, ID সেট করা যায় ।

০৩. What is Event Bubbling and how does it work?

উত্তর : যখন কোনো child element এ event ঘটে, তখন event প্রথমে ওই child → তারপর তার parent → তারপর grandparent → document পর্যন্ত যায়। এটিই bubbling।

০৪. What is Event Delegation in JavaScript? Why is it useful?

উত্তর : Parent element এ একটাই event listener বসিয়ে সব child element এর event handleকরা যায়।

Why is it useful?
উত্তর : অনেক child element থাকলেও একটাই listener ব্যবহার করা যায়।

০৫.What is the difference between preventDefault() and stopPropagation() methods?

উত্তর : preventDefault() → Element এর default behavior বন্ধ করে।
উত্তর : stopPropagation() → Event bubbling বা capturing বন্ধ করে।
