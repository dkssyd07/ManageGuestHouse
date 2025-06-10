// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-5xl font-bold mb-4">당신의 아늑한 휴식처</h1>
        <p className="mb-6 text-lg">지금 바로 예약하고 편안한 시간을 보내세요</p>
        <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition">
          예약하기
        </button>
      </div>
    </div>
  );
}
