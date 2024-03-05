import Link from "next/link";
import SessionButton from "@/components/SessionButton";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href={"/"}>홈</Link>
      </li>
      <li>
        <SessionButton />
      </li>
      <li>
        <Link href={"/products"}>상점</Link>
      </li>
      <li>
        <Link href={"/profile"}>프로필</Link>
      </li>
    </ul>
  );
}
