// src/pages/ResetPassword.jsx
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("비밀번호 재설정 이메일을 전송했습니다.");
      setError("");
    } catch (err) {
      setError("이메일 전송 실패: " + err.message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">비밀번호 재설정</h2>
        {message && <p className="text-green-600 text-sm mb-4">{message}</p>}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">이메일</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            이메일 보내기
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          로그인 화면으로 돌아가기{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}
