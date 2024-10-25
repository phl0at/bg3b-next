import Link from "next/link";
import { FaCirclePlus, FaTableList } from "react-icons/fa6";

const Home = () => {
  const className =
    "font-sans text-4xl text-blue-300 hover:text-blue-500 hover:shadow-sm hover:-translate-y-1 transition ease-in-out delay-250 duration-300";

  // const url = process.env.API_URL;
  // const key = process.env.API_KEY;

  // const data = await fetch(`${url}/rest/backgrounds`, {
  //   headers: { "X-API-KEY": `${key}` },
  // });
  // const bg = await data.json()
  // console.log(bg.data)
  return (
    <main className="w-full h-screen absolute top-0 py-3 flex justify-center items-center">
      <ul className="flex flex-row gap-20">
        <li className={className}>
          <Link href="/build" className="flex flex-col items-center gap-2 ">
            <FaCirclePlus />
            New
          </Link>
        </li>
        <li className={className}>
          <Link href="/browse" className="flex flex-col items-center gap-2 ">
            <FaTableList />
            Browse
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
