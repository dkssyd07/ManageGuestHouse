// src/components/AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* 텍스트 설명 */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            편안하고 특별한 공간
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            저희 게스트하우스는 자연과 도심의 경계에 위치해 있으며,  
            방문객들에게 아늑하고 고요한 휴식 공간을 제공합니다.
          </p>
          <p className="text-gray-600 leading-relaxed">
            모든 객실은 세련된 디자인과 함께 개인의 프라이버시를 존중하며,  
            당신의 여행을 더욱 특별하게 만들어 줄 준비가 되어 있습니다.
          </p>
        </div>
        {/* 이미지 */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
            alt="게스트하우스 내부"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
