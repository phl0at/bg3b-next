import MenuButton from "@/components/menuButton";
import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="absolute w-screen h-12">
      <MenuButton />
      <div className="absolute right-2 top-2 w-fit flex flex-row justify-center items-center">
        <Link href="https://github.com/phl0at/bg3b-next">
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
};

export default Header;
