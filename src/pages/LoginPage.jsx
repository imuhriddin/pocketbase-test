import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../features/auth/authSlice";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://back.buyur.yurtal.tech");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const authData = await pb.admins.authWithPassword(email, password);

      console.log("✅ Admin login bo‘ldi:", authData);
      console.log("Token:", pb.authStore.token);

    //   alert("Admin sifatida kirdingiz!");

      // 🔹 redux’ga yozamiz
      dispatch(
        setCredentials({
          user: authData.admin, // ✅ admin obyekti
          token: authData.token, // ✅ token
        })
      );

       localStorage.setItem("token", authData.token);

      // 🔹 login bo‘lgandan keyin '/' ga o‘tadi
      navigate("/");
    } catch (error) {
      console.error("❌ Login xatosi:", error);
      alert("Login xato: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-xl font-bold mb-5">Login Page</h2>
      <form
        className="flex flex-col items-center gap-5"
        onSubmit={handleLogin}
      >
        <input
          className="border-2 border-amber-400 p-2"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-2 border-amber-400 p-2"
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="border-2 border-amber-400 px-4 py-2 cursor-pointer hover:bg-amber-400 hover:text-white"
          type="submit"
        >
          Kirish
        </button>
      </form>
    </div>
  );
}

export default Login;
