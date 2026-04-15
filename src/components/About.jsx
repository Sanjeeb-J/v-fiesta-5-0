import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

export default function About() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`section-padding ${styles.about}`} ref={sectionRef}>
      <div className={`container ${styles.grid} ${inView ? 'reveal active' : 'reveal'}`}>
        <div className={styles.stats}>
          <StatBox target={5} label="Edition" suffix="th" inView={inView} />
          <StatBox target={500} label="Participants" suffix="+" inView={inView} />
          <StatBox target={20} label="Events" suffix="+" inView={inView} />
        </div>
        <div className={styles.content}>
          <h2 className="gradient-text">About V-Fiesta</h2>
          <p>
            V-Fiesta 5.0 is the flagship annual tech phenomenon brought to you by the IEEE PIE Kerala Section. 
            We bring together visionaries, innovators, and creators under one roof.
          </p>
          <p>
            Designed to foster collaboration and student excellence, this festival offers a diverse array 
            of technical workshops, high-stakes hackathons, engaging cultural events, and deep-dive 
            paper presentations.
          </p>
        </div>
      </div>
    </section>
  );
}

function StatBox({ target, label, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    
    const update = () => {
      current += step;
      if (current < target) {
        setCount(Math.ceil(current));
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };
    update();
  }, [inView, target]);

  return (
    <div className={styles.statItem}>
      <div className={styles.statNumber}>
        {count}<span className={styles.accent}>{suffix}</span>
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}
