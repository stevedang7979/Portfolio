import React from "react";
import styles from "../../styles/Home.module.css";
import Img from "./Img";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className={`${styles.home} fadeBottom`}>
        <div className={styles.intro}>
          <h2>Hi! I'm An.</h2>
          <h3>I'm currently an undergraduate student at UMass Amherst majoring in Computer Science and Mathematics.
            I'm interested in web application development and video production.</h3>
          <div className="relative w-full mt-2">
            <Link href="https://drive.google.com/file/d/1lTBmpHT5NzahoTDapjK1tIKEpcAs3pH2/view?usp=sharing">
              <div className="mt-2 mx-auto text-center px-8 py-3 rounded-xl text-fun-white bg-fun-pink hover:opacity-75 hover:text-white transition-colors cursor-pointer">
                Resume
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Img img={'../../public/static/projects/profile.jpg'} imgAlt={''} layout objectFit="cover" />
        </div>

      </div>
    </>
  );
}

export default Hero;
