"use client";

import { signIn, signOut } from "next-auth/react";
import useClientSession from "@/hooks/useClient";

export default function SessionButton() {
  const { getUserSession } = useClientSession();
  const user = getUserSession();

  return (
    <>
      {user ? (
        <button onClick={() => signOut()}>로그아웃</button>
      ) : (
        <button onClick={() => signIn()}>로그인</button>
      )}
    </>
  );
}
