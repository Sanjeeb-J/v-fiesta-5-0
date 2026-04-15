import { useState, useEffect, useRef } from 'react';
import styles from './FAQ.module.css';
import { faq } from '@/data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  const toggle = (id) => {
    if (openId === id) setOpenId(null);
    else setOpenId(id);
  };

  return (
    <section className="section-padding">
      <div className={`container ${inView ? 'reveal active' : 'reveal'}`} ref={ref}>
        <div className={styles.header}>
          <h2 className="gradient-text">F.A.Q</h2>
          <p>Answers to your burning questions.</p>
        </div>
        <div className={styles.container}>
          {faq.map((item) => (
            <div key={item.id} className={`${styles.item} ${openId === item.id ? styles.active : ''}`}>
              <button className={styles.question} onClick={() => toggle(item.id)}>
                {item.question}
                <span className={styles.icon}>+</span>
              </button>
              <div className={styles.answer}>
                <div className={styles.content}>{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
