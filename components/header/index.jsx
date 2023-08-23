import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <ul className={styles.headerContainer}>
      <li>
        <Link href={"/"}>HOME</Link>
      </li>
      <li>
        <Link href={"/about"}>ABOUT</Link>
      </li>
      <li>
        <Link href={"/contact"}>CONTACT</Link>
      </li>
      <Link href={"/"}>
        <Image src="/logo.png" alt="logo" width={375} height={151} />
      </Link>

      <li>
        <Link href={"#"}>ORDER</Link>
      </li>
      <li>
        <Link href={"/menu"}>MENU</Link>
      </li>
    </ul>
  );
}
