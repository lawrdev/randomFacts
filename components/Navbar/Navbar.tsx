import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { Divider } from "@mui/material";
import Menu from "./hamburger/Menu";

const navs = [
  { option: "Home", route: "/" },
  { option: "About", route: "/about" },
  // { option: "Contact Me", route: "/" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <nav className={styles.nav}>
          <div className={styles.logowrapper} onClick={() => router.push("/")}>
            <Image
              src="/owl_pink.svg"
              alt="logo"
              width={38}
              height={42}
              style={{
                objectFit: "contain",
                objectPosition: "left center",
                height: "auto",
              }}
            />

            <h1>
              RANDOM<span className={styles.logopaint}>FACTS</span>
            </h1>
          </div>

          <div className="hidden sm:flex sm:gap-1">
            {navs.map((nav, i: number) => (
              <Link href={nav.route} className={styles.navbtn} key={i}>
                {nav.option}
              </Link>
            ))}
          </div>

          <div className="block sm:hidden">
            <Menu />
          </div>
        </nav>
      </div>

      <Divider />
    </div>
  );
};

export default Navbar;
