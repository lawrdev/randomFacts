import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { Divider } from "@mui/material";

const navs = [
  { option: "Home", route: "/" },
  { option: "Fact list", route: "/fact/2" },
  { option: "About", route: "/about" },
];

const Navbar = () => {
  return (
    <>
      <Head>
        <title>RandomFacts</title>
        <meta name="description" content="View and share random facts" />
        <link rel="icon" href="/owl.webp" />
      </Head>

      <div className={styles.navbar}>
        <div className="content">
          <nav className={styles.nav}>
            <div className={styles.logowrapper}>
              <Image src="/owl_pink.svg" alt="logo" width={32} height={56} />
              <h1>
                RANDOM<span className={styles.logopaint}>FACTS</span>
              </h1>
            </div>

            {navs.map((nav, i: number) => (
              <Link href={nav.route} className={styles.navbtn} key={i}>
                {nav.option}
              </Link>
            ))}
          </nav>
        </div>

        <Divider />
      </div>
    </>
  );
};

export default Navbar;
