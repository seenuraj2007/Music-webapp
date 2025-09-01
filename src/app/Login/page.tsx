"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import loginUser from "../../../lib/auth/loginUser";
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlelogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setMessage("All Field Are Requierd");
      return;
    }


    const result = await loginUser(email, password);
    if (result?.error) {
      setMessage(result.error)
    } else {
      setMessage("Login Successful");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }

  }
  return (
    <div className="flex h-screen justify-center items-center w-full bg-hover">
      <div className="bg-background flex flex-col items-center px-6 lg:px-12 py-6 rounded-md max-w-[400px] w-[90%]">
        <Image src="/logo.png" alt="logo" width={500} height={500} className="w-11 h-11" />
        <h2 className="text-2xl font-bold text-white my-2 mb-8 text-center ">Log in to spotify</h2>
        <form onSubmit={handlelogin}>
        {message && <p className="bg-primary font-semibold text-center mb-4 py-1">{message}</p>}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text" placeholder="Your Email" className="outline-none border-1 border-neutral-600 p-2  w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text" placeholder="Your Password" className="outline-none border-1 border-neutral-600 p-2  w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <button className="bg-green-400 py-3 rounded-lg w-full font-bold cursor-pointer hover:bg-green-300">
            Continue
          </button>
          <div className="text-secondary-text text-center my-6">
            <span>
              Don&apos;t have  an account?
            </span>
            <Link href="signup" className="ml-2 underline text-white hover:text-green-600 ">sign up now</Link>
          </div>
        </form>
      </div>

    </div>
  )
}
