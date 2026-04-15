import { useState, useEffect, useRef } from 'react';
import styles from './Speakers.module.css';
import { speakers } from '@/data/speakers';

export default function Speakers() {
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
    <section className="section-padding">
      <div className={`container ${inView ? 'reveal active' : 'reveal'}`} ref={ref}>
        <div className={styles.header}>
          <h2 className="gradient-text">Featured Speakers</h2>
          <p>Learn from the brightest minds in the industry.</p>
        </div>
        <div className={styles.grid}>
          {speakers.map(s => (
            <div key={s.id} className={styles.card}>
              <img src={s.image} alt={s.name} className={styles.img} />
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.role}>{s.role}</p>
              <p className={styles.org}>{s.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
