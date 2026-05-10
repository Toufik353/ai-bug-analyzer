"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const res = await fetch(
      "/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();

    if (res.ok) {
      toast.success("Login successful");

      router.push("/dashboard");
    } else {
      toast.error(
        data.message || "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-8">
          Login
        </h1>

        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value,
              })
            }
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all rounded-xl py-4 text-white font-semibold"
          >
            Login
          </button>

          <p className="text-zinc-400 text-center">
            Don’t have an account?{" "}
            <span
              onClick={() =>
                router.push("/register")
              }
              className="text-blue-500 cursor-pointer"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}