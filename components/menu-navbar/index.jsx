import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function MenuNavbar() {
  return (
    <div className={styles.navbarContainer}>
      <ul>
        <li>
          <Link href={"#Classics"}>Classics</Link>
        </li>
        <li>
          <Link href={"#DarkBrownSugar"}>DarkBrownSugar</Link>
        </li>
        <li>
          <Link href={"#FruitTeas"}>FruitTeas</Link>
        </li>
        <li>
          <Link href={"#Smoothies"}>Smoothies</Link>
        </li>
        <li>
          <Link href={"#Special Drinks"}>SpecialDrinks</Link>
        </li>
        <li>
          <Link href={"#Lattes"}>Lattes</Link>
        </li>
        <li>
          <Link href={"#Coffee"}>Coffee</Link>
        </li>
        <li>
          <Link href={"#Snacks"}>Snacks</Link>
        </li>
      </ul>
      <Link href={""} id="Classics"></Link>
      <div style={{ width: "80%", margin: "20px 15%" }}>
        <h1>Classics</h1>
        <div className={styles.coffeeBox}>
          <div className={styles.coffeeCard}>
            <div>
              <h3>House Milk Tea</h3>
              <p>
                Teaa’s take on the classic Hong Kong milk tea that everybody
                loves. A staple at any boba shop.
              </p>
              <p>$3.50</p>
            </div>
            <Image src="/coffee.png" alt="" width={128} height={127} />
          </div>
          <div className={styles.coffeeCard}>
            <div>
              <h3>House Milk Tea</h3>
              <p>
                Teaa’s take on the classic Hong Kong milk tea that everybody
                loves. A staple at any boba shop.
              </p>
              <p>$3.50</p>
            </div>
            <Image src="/coffee.png" alt="" width={128} height={127} />
          </div>
        </div>
      </div>

      <Link href={""} id="DarkBrownSuga"></Link>
      <div style={{ width: "80%", margin: "20px 15%" }}>
        <h1>Dark Brown Sugar</h1>
        <div className={styles.coffeeBox}>
          <div className={styles.coffeeCard}>
            <div>
              <h3>House Milk Tea</h3>
              <p>
                Teaa’s take on the classic Hong Kong milk tea that everybody
                loves. A staple at any boba shop.
              </p>
              <p>$3.50</p>
            </div>
            <Image src="/coffee.png" alt="" width={128} height={127} />
          </div>
          <div className={styles.coffeeCard}>
            <div>
              <h3>House Milk Tea</h3>
              <p>
                Teaa’s take on the classic Hong Kong milk tea that everybody
                loves. A staple at any boba shop.
              </p>
              <p>$3.50</p>
            </div>
            <Image src="/coffee.png" alt="" width={128} height={127} />
          </div>
        </div>
      </div>

      <Link href={""} id="FruitTeas"></Link>
      <div style={{ width: "80%", margin: "20px 15%" }}>
        <h1>Fruit Teas</h1>
        <div className={styles.coffeeBox}>
          <div className={styles.coffeeCard}>
            <div>
              <h3>House Milk Tea</h3>
              <p>
                Teaa’s take on the classic Hong Kong milk tea that everybody
                loves. A staple at any boba shop.
              </p>
              <p>$3.50</p>
            </div>
            <Image src="/coffee.png" alt="" width={128} height={127} />
          </div>
          <div className={styles.coffeeCard}>
            <div>
              <h3>House Milk Tea</h3>
              <p>
                Teaa’s take on the classic Hong Kong milk tea that everybody
                loves. A staple at any boba shop.
              </p>
              <p>$3.50</p>
            </div>
            <Image src="/coffee.png" alt="" width={128} height={127} />
          </div>
        </div>
      </div>

      <Link href={""} id="Smoothies"></Link>
      <div style={{ width: "80%", margin: "20px 15%" }}>
        <h1>Smoothies</h1>
        <div className={styles.coffeeBox}>
          <div className={styles.coffeeCard}>
            <div>
              <h3>House Milk Tea</h3>
              <p>
                Teaa’s take on the classic Hong Kong milk tea that everybody
                loves. A staple at any boba shop.
              </p>
              <p>$3.50</p>
            </div>
            <Image src="/coffee.png" alt="" width={128} height={127} />
          </div>
          <div className={styles.coffeeCard}>
            <div>
              <h3>House Milk Tea</h3>
              <p>
                Teaa’s take on the classic Hong Kong milk tea that everybody
                loves. A staple at any boba shop.
              </p>
              <p>$3.50</p>
            </div>
            <Image src="/coffee.png" alt="" width={128} height={127} />
          </div>
        </div>
      </div>
    </div>
  );
}
