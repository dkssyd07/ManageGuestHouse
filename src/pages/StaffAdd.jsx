// src/pages/StaffAdd.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StaffAdd() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim() || !role.trim()) {
      alert('이름과 역할을 모두 입력해주세요.');
      return;
    }

    // TODO: 서버로 POST 요청 보내기
    console.log('추가된 스태프:', { name, role });

    alert(`${name} 스태프가 추가되었습니다!`);
    navigate('/'); // 대시보드로 이동
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">👤 스태프 추가</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">이름</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="예: 김영희"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">역할</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="예: 체크인 담당"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition"
          >
            추가하기
          </button>
        </form>
      </div>
    </div>
  );
}
