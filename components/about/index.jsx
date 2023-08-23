import React from "react";
import styles from "./styles.module.css";
export default function AboutComponent() {
  return (
    <div className={styles.aboutContainer}>
      <h1>Our Story & Mission</h1>
      <div>
        <p>
          Teaa Cafe is a bubble tea establishment that was founded in 2020 with
          the goal of producing refreshing, handcrafted drinks that quench your
          thirst.
        </p>
        <p>
          From the very start, we’ve only wanted to serve the best and freshest
          products to our customers. With handcrafted boba, premium Taiwanese
          teas, authentic fruit, and house-brewed coffee, we’re doing exactly
          that. Teaa is proudly the first bubble tea establishment to produce
          and serve all our goods on-site.
        </p>
        <p>
          Our staff at Teaa strives to provide customers with the perfect
          balance of flavor and authenticity. With our core concept of serving
          authentic, handcrafted drinks, we will leave you wanting more.
        </p>
      </div>
    </div>
  );
}
