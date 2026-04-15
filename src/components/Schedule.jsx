import { useState, useEffect, useRef } from 'react';
import styles from './Schedule.module.css';
import { schedule } from '@/data/schedule';

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('day1');
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
    <section id="schedule" className="section-padding">
      <div className={`container ${inView ? 'reveal active' : 'reveal'}`} ref={ref}>
        <div className={styles.header}>
          <h2 className="gradient-text">Schedule</h2>
          <p>Three days of pure innovation.</p>
        </div>
        
        <div className={styles.tabs}>
          <button className={`${styles.tabBtn} ${activeTab === 'day1' ? styles.active : ''}`} onClick={() => setActiveTab('day1')}>Day 1</button>
          <button className={`${styles.tabBtn} ${activeTab === 'day2' ? styles.active : ''}`} onClick={() => setActiveTab('day2')}>Day 2</button>
          <button className={`${styles.tabBtn} ${activeTab === 'day3' ? styles.active : ''}`} onClick={() => setActiveTab('day3')}>Day 3</button>
        </div>

        <div className={styles.content}>
          <div className={styles.timeline}>
            {schedule[activeTab].map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineTime}>{item.time}</div>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <div className={styles.timelineVenue}>{item.venue}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
