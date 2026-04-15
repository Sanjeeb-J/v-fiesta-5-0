import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import styles from './RegisterCTA.module.css';

export default function RegisterCTA() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section className={styles.cta} ref={ref}>
      <div className={`container ${inView ? 'reveal active' : 'reveal'}`}>
        <h2 className={`${styles.title} gradient-text`}>Ready to Join the Revolution?</h2>
        <p className={styles.text}>
          Don't miss out on the biggest tech festival of the year. Limited seats available for workshops and hackathon. Secure your spot now!
        </p>
        <Link to="/register" className={styles.btn}>
          Register Now
        </Link>
      </div>
    </section>
  );
}
