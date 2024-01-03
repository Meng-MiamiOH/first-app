import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
            <NavLink href="/community">Foodie Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
