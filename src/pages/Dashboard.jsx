// src/pages/Dashboard.jsx
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* 네비게이션 */}
      <header className="bg-white border-b shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-4">
          {[
            { to: '/', label: '대시보드' },
            { to: '/staff', label: '스태프' },
            { to: '/cleaning', label: '청소일정' },
            { to: '/checkin', label: '체크인' },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="text-gray-700 hover:text-white bg-primary hover:bg-primary-dark px-5 py-2 rounded-full font-medium shadow transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* 헤더 */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          🏡 게스트하우스 대시보드
        </h1>

        {/* 카드 통계 */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { label: '오늘 체크인', value: '5명' },
            { label: '청소 예정', value: '3건' },
            { label: '스태프 출근', value: '2명' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl shadow p-6 text-center hover:shadow-md transition"
            >
              <h2 className="text-lg text-gray-600 mb-1">{item.label}</h2>
              <p className="text-3xl font-bold text-primary">{item.value}</p>
            </div>
          ))}
        </section>

        {/* 캘린더 */}
        <section className="bg-white border rounded-xl shadow-md p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            📅 예약 일정 캘린더
          </h2>
          <div className="flex justify-center">
            <Calendar
              onChange={setDate}
              value={date}
              className="rounded-md border shadow"
            />
          </div>
        </section>

        {/* 스태프 프로필 카드 */}
        <section>
          <h2 className="text-2xl font-semibold mb-10 text-center text-gray-800">👥 스태프 소개</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: '김지수', role: '청소 담당', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { name: '이철수', role: '체크인 담당', photo: 'https://randomuser.me/api/portraits/men/33.jpg' },
            ].map((staff, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
              >
                <img
                  src={staff.photo}
                  alt={staff.name}
                  className="w-24 h-24 rounded-full mb-4 shadow"
                />
                <h3 className="text-lg font-semibold text-gray-800">{staff.name}</h3>
                <p className="text-sm text-gray-500">{staff.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 지도 */}
        <section className="bg-white border rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">📍 위치</h2>
          <iframe
            title="map"
            className="w-full h-96 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9334060564133!2d126.9784144763819!3d37.56653557205915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2e3c8f41f75%3A0xe1fa233ec3d5f6a5!2z7ISc7Jq47Yq567OE7IucIOuPmeq1rCDtlZzqs6Hqs7XtlaAg7ZWY7JuQ!5e0!3m2!1sko!2sca!4v1717691197397!5m2!1sko!2sca"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t mt-16">
        © 2025 GuestHouse Inc. | contact@guesthouse.com
      </footer>
    </div>
  );
}