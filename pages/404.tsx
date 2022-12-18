import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NotFound.module.css";
import HeadLayout from "../components/Head/HeadLayout";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <HeadLayout page="404" />
      <div className="min-h-screen mt-20">
        <h1 className="font-bold text-6xl mb-5">Ooops...</h1>
        <h2 className="font-semibold text-lg mb-2">
          This page cannot be found 😞
        </h2>
        <p className="text-gray-500">
          Returning to{" "}
          <Link className="hover:underline text-primary" href="/">
            homepage
          </Link>{" "}
          in 3 seconds...
        </p>
      </div>
    </>
  );
};

export default NotFound;
