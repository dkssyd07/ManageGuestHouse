import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("로그인 실패: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">로그인</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
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
          <div>
            <label className="block text-sm font-medium">비밀번호</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            로그인
          </button>
        </form>

        <div className="text-sm mt-4 flex justify-between">
          <Link to="/signup" className="text-blue-600 hover:underline">
            회원가입
          </Link>
          <Link to="/reset-password" className="text-blue-600 hover:underline">
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </div>
  );
}
