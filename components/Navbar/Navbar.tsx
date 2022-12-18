import Link from "next/link";

import Image from "next/image";
import styles from "./Navbar.module.css";
import { Divider } from "@mui/material";

const navs = [
  { option: "Home", route: "/" },
  { option: "About", route: "/about" },
  // { option: "Contact Me", route: "/" },
];

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <nav className={styles.nav}>
          <div className={styles.logowrapper}>
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

          {navs.map((nav, i: number) => (
            <Link href={nav.route} className={styles.navbtn} key={i}>
              {nav.option}
            </Link>
          ))}
        </nav>
      </div>

      <Divider />
    </div>
  );
};

export default Navbar;
