import { useState } from 'react';
import { events } from '@/data/events';
import styles from '@/components/EventsGrid.module.css';

export default function Events() {
  const [filter, setFilter] = useState('All');

  const filteredEvents = filter === 'All' ? events : events.filter(e => e.category === filter);

  return (
    <div className="section-padding" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="gradient-text">All Events</h1>
          <p>Discover our comprehensive lineup.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {['All', 'Technical', 'Workshop', 'Cultural'].map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? 'rgba(0, 87, 255, 0.2)' : 'transparent',
                border: `1px solid ${filter === cat ? 'var(--color-accent-blue)' : 'var(--color-border)'}`,
                color: filter === cat ? 'var(--color-accent-cyan)' : 'var(--color-text)',
                padding: '0.5rem 1.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.uniformGrid}>
          {filteredEvents.map((event) => (
            <div key={event.id} className={`${styles.card} ${styles.uniformCard}`}>
              <div className={styles.icon}>{event.icon}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
          {filteredEvents.length === 0 && <p style={{textAlign: 'center', gridColumn: '1/-1'}}>No events found.</p>}
        </div>
      </div>
    </div>
  );
}
