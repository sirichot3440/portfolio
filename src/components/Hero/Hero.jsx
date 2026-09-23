import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaGraduationCap } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, it's me</p>
            <h1 className={styles.text_2}>Sirichot Butwichian</h1>
            
            <div className={styles.text_3}>
              <span style={{ marginRight: "10px" }}>I'm a</span>
              <TypeAnimation
                sequence={[
                  "Front-end Developer",
                  1500,
                  "Computer Engineering Student",
                  1500,
                  "Web Developer",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
                className={styles.type_text}
              />
            </div>

            <p className={styles.text_4}>
              รหัสนิสิต 6740203440 ชั้นปีที่ 3
            </p>

            {/* ส่วนข้อมูลการศึกษา */}
            <div className={styles.education_box}>
              <FaGraduationCap className={styles.edu_icon} />
              <div className={styles.edu_details}>
                <h4>Education</h4>
                <p className={styles.edu_major}>
                  สาขาวิชาวิศวกรรมคอมพิวเตอร์
                </p>
                <p className={styles.edu_dept}>
                  ภาควิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์ <br />
                  คณะวิทยาศาสตร์และวิศวกรรมศาสตร์
                </p>
                <p className={styles.edu_univ}>
                  มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร
                </p>
              </div>
            </div>

            {/* ปุ่ม Social icons */}
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>

          {/* รูปภาพโปรไฟล์ พร้อมลูกเล่น Tilt */}
          <Tilt scale={1.05} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_img_container}>
              <div className={styles.hero_img}></div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;