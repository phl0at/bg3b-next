import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-screen h-12 flex justify-between">
      <div className="fixed flex flex-row justify-center items-center">
        <Link href="https://github.com/phl0at/next-bg3b">
          <DiGithubBadge
            className="text-blue-300 hover:text-blue-500 hover:-translate-y-1 transition ease-in-out delay-250 duration-300"
            size="55"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/phl0at">
          <FaLinkedin
            className="text-blue-300 hover:text-blue-500 hover:-translate-y-1 transition ease-in-out delay-250 duration-300"
            size="42"
          />
        </Link>
      </div>
    </div>
  );
}
