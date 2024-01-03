import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header>
        <Link href="/" className={classes.logo}>
          <Image
            className={classes.logo}
            src={logoImg}
            alt="A plate with food on it"
            priority
          />
          Some Good Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodie Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
