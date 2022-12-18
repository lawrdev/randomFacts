import { ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Layout.module.css";
interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className="content min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
