import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const loginClick = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <div className="flex justify-center">
      <a
        href="/login"
        onClick={loginClick}
        className="ml-4 inline-flex text-gray-700 font-medium bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 cursor-pointer rounded text-lg"
      >
        Sign In
      </a>
    </div>
  );
}
