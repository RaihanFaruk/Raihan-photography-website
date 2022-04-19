import React from 'react';

const Blog = () => {
    return (
        <div className='container m-5'>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      01. Difference between authorization and authentication.
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        উত্তর: সহজভাবে বলতে গেলে, authentication হল কেউ কে তা যাচাই করার প্রক্রিয়া, যেখানে authorization হল ব্যবহারকারীর কোন নির্দিষ্ট অ্যাপ্লিকেশন, ফাইল এবং ডেটাতে অ্যাক্সেস রয়েছে তা যাচাই করার প্রক্রিয়া। authentication প্রক্রিয়ায়, সিস্টেমে অ্যাক্সেস প্রদানের জন্য ব্যবহারকারীদের পরিচয় পরীক্ষা করা হয়। যখন authorization হল তাদের কী অ্যাক্সেস আছে তা যাচাই করার প্রক্রিয়া।
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      02. Why are you using firebase? What other options do you have to implement authentication?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      উত্তর: Google Firebase ব্যবহার করার কারণ হল একটি অ্যাপ্লিকেশন ডেভেলপমেন্ট প্ল্যাটফর্ম যা ডেভেলপারদের iOS, Android এবং ওয়েব অ্যাপ তৈরি করতে দেয়।
সাধারণত, একটি সার্ভার দ্বারা authentication একটি ব্যবহারকারীর নাম এবং পাসওয়ার্ড ব্যবহার entails । Authentication অন্যান্য উপায়গুলি কার্ড, রেটিনা স্ক্যান, ভয়েস রিকগনিশন এবং আঙ্গুলের ছাপের মাধ্যমে হতে পারে।
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      03. What other services does firebase provide other than authentication?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Firebase বিকল্প - শীর্ষ ১০+ প্রতিযোগী
1. Parse – Open Source Backend Platform; 2. Back4app – Parse Hosting Platform; 3. Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise; 4. Backendless – Mobile Backend and API Services Platform; 5. Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects; 6. Pubnub – Real-time APIs and Global Messaging; 7. Kumulos – App Performance Management; 8. Game Sparks – Game Backend Platform; 9. Hoodie – Generic backend with a client API for Offline First applications; 10. Appwrite – Open-Source backend for Flutter developers
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;