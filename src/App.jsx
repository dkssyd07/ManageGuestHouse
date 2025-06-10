// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/firebase";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Staff from "./pages/Staff";
import Cleaning from "./pages/Cleaning";
import Checkin from "./pages/Checkin";
import BookingManagement from "./pages/BookingManagement";

export default function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/");
  };

  const isAuthPage = ["/", "/signup", "/reset-password"].includes(location.pathname);

  return (
    <>
      {/* 로그인된 경우만 네비게이션 바 표시 */}
      {user && !isAuthPage && (
        <nav className="bg-white shadow-md px-8 py-4 flex gap-6 justify-between items-center font-sans text-sm">
          <div className="flex gap-6">
            <Link to="/dashboard" className="text-gray-800 hover:text-blue-500">대시보드</Link>
            <Link to="/staff" className="text-gray-800 hover:text-blue-500">스태프</Link>
            <Link to="/cleaning" className="text-gray-800 hover:text-blue-500">청소일정</Link>
            <Link to="/checkin" className="text-gray-800 hover:text-blue-500">체크인</Link>
            <Link to="/booking-management" className="text-gray-800 hover:text-blue-500">예약 관리</Link>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            로그아웃
          </button>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/cleaning" element={<Cleaning />} />
        <Route path="/checkin" element={<Checkin />} />
        <Route path="/booking-management" element={<BookingManagement />} />
      </Routes>
    </>
  );
}
