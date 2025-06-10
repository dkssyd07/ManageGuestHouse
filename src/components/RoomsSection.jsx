// src/components/RoomsSection.jsx
import React from "react";

const rooms = [
  {
    id: 1,
    name: "스탠다드 룸",
    price: "₩80,000 / 박",
    img: "https://source.unsplash.com/400x300/?bedroom",
  },
  {
    id: 2,
    name: "디럭스 룸",
    price: "₩120,000 / 박",
    img: "https://source.unsplash.com/400x300/?hotel-room",
  },
  {
    id: 3,
    name: "패밀리 룸",
    price: "₩150,000 / 박",
    img: "https://source.unsplash.com/400x300/?guest-room",
  },
];

export default function RoomsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          객실 안내
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img src={room.img} alt={room.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-primary font-medium mb-4">{room.price}</p>
                <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded transition">
                  예약하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
