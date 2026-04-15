import { useEffect, useRef, useState } from 'react';
import styles from './EventsGrid.module.css';
import { events } from '@/data/events';

export default function EventsGrid() {
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
    <section id="events" className="section-padding">
      <div className={`container ${inView ? 'reveal active' : 'reveal'}`} ref={ref}>
        <div className={styles.header}>
          <h2 className="gradient-text">Event Highlights</h2>
          <p>Explore the diverse tracks mapping the future.</p>
        </div>
        <div className={styles.uniformGrid}>
          {events.map((event) => (
            <div key={event.id} className={`${styles.card} ${styles.uniformCard}`}>
              <div className={styles.icon}>{event.icon}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
