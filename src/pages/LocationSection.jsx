// src/components/LocationSection.jsx
import React from "react";

export default function LocationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-8 text-center text-text-heading">
          찾아오시는 길
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 주소 및 연락처 */}
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="text-text-body leading-relaxed">
              📍 주소: 서울특별시 강남구 역삼동 123-45  
            </p>
            <p className="text-text-body leading-relaxed">
              📞 전화: 010-1234-5678  
            </p>
            <p className="text-text-body leading-relaxed">
              ✉️ 이메일: info@guesthouse.com  
            </p>
            <p className="text-text-body leading-relaxed">
              운영시간: 매일 오전 9시 – 오후 9시  
            </p>
          </div>
          {/* 구글 맵 (iframe) */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!2m3!1s0x0:0x0!2zMzTCsDQ2JzAzLjAiTiA3MMKwMTUnNDEuMyJF!5e0!3m2!1sko!2skr!4v0000000000000"
                width="100%"
                height="100%"
                className="rounded-xl"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
