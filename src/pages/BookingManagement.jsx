// src/pages/BookingManagement.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookingManagement() {
  const navigate = useNavigate();

  // 예시 예약 데이터
  const [bookings, setBookings] = useState([
    { id: 1, name: '홍길동', date: '2025-06-08', room: '101호', status: '체크인 예정' },
    { id: 2, name: '김민수', date: '2025-06-09', room: '102호', status: '체크인 완료' },
    { id: 3, name: '이영희', date: '2025-06-10', room: '103호', status: '체크아웃 완료' },
  ]);

  const handleDelete = (id) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-8 font-sans text-gray-800">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">📖 예약 관리</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
          >
            대시보드로 돌아가기
          </button>
        </div>

        <table className="w-full table-auto border border-gray-200 rounded-md overflow-hidden">
          <thead className="bg-gray-100 text-left text-sm text-gray-600">
            <tr>
              <th className="p-4">이름</th>
              <th className="p-4">날짜</th>
              <th className="p-4">방 번호</th>
              <th className="p-4">상태</th>
              <th className="p-4 text-center">관리</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{b.name}</td>
                <td className="p-4">{b.date}</td>
                <td className="p-4">{b.room}</td>
                <td className="p-4">{b.status}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDelete(b.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
            {bookings.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-500">예약 내역이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
