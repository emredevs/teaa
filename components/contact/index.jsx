import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
export default function ContactComponent() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <div>
          <h2>CONTACT US</h2>
          <p>
            If you have any questions or concerns you’d like to share with us,
            please fill out the form
          </p>
        </div>
        <div>
          <p>TEAA CAFE</p> <p>1019 S. Glendora Ave</p>
          <p>West Covina, CA 91790</p>
          <p>(626)653-9212 | contact@teaacafe.com</p>
          <div className={styles.socialIcon}>
            <Image src="/instagram.png" alt="" width={37} height={37} />
            <Image src="/yelp.png" alt="" width={37} height={37} />
            <Image src="/face.png" alt="" width={37} height={37} />
          </div>
        </div>
      </div>
      <form className={styles.contactInput}>
        <input type="text" placeholder="Name * |" />
        <input type="email" placeholder="Email * |" />
        <input type="text" placeholder="Subject * |" />
        <textarea
          name="message"
          id=""
          cols="52"
          rows="10"
          placeholder="Message * |"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
