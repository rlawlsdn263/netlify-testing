"use client";
import { useRef, FormEvent } from "react";
import { signIn } from "next-auth/react";

export default function Signin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await signIn("credentials", {
      username: emailRef.current?.value,
      password: passwordRef.current?.value,
      redirect: true,
      callbackUrl: "http://localhost:3000",
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" ref={emailRef} />
      <input type="password" ref={passwordRef} />
      <button>로그인</button>
    </form>
  );
}
