import React from "react";
import styles from "./Number.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Number() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  // เช็กว่า CountUp ถูกดึงมาสมบูรณ์หรือไม่ ถ้าไม่ใช่ ให้ใช้ Component หรือฟังฟ์ชันหลัก
  const CountUpComponent = CountUp.default || CountUp;

  return (
    <div className={styles.number_wrapper}>
      <div ref={ref} className={styles.number_con}>
        
        <div className={styles.number_items}>
          <h3>
            {inView ? <CountUpComponent start={0} end={100} duration={3} /> : "0"}+
          </h3>
          <p>Project Delivered</p>
        </div>

        <div className={styles.number_items}>
          <h3>
            {inView ? <CountUpComponent start={0} end={50} duration={3} /> : "0"}+
          </h3>
          <p>Companies Helped</p>
        </div>

        <div className={styles.number_items}>
          <h3>
            {inView ? <CountUpComponent start={0} end={10} duration={3} /> : "0"}+
          </h3>
          <p>Years of Experience</p>
        </div>

        <div className={styles.number_items}>
          <h3>
            {inView ? <CountUpComponent start={0} end={200} duration={3} /> : "0"}+
          </h3>
          <p>Happy Clients</p>
        </div>

      </div>
    </div>
  );
}

export default Number;