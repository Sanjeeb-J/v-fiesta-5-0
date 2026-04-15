import { Link } from 'react-router-dom';
import styles from './Register.module.css';

export default function Register() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.panel}>
          <div className={styles.eyebrow}>
            <span className={styles.statusDot} />
            Registration Gateway
          </div>
          <h1 className={`${styles.title} gradient-text`}>Registration Window Closed</h1>
          <p className={styles.lead}>
            The live registration pipeline for V-Fiesta 5.0 has now been locked. Our crew is finalizing
            attendee confirmations, workshop seat allocations, and the final event access list.
          </p>
          <div className={styles.highlight}>
            Status: waitlist mode active. Direct entries are no longer being accepted.
          </div>
          <div className={styles.actions}>
            <Link to="/events" className={styles.primaryBtn}>Explore Events</Link>
            <Link to="/schedule" className={styles.secondaryBtn}>View Schedule</Link>
          </div>
          <p className={styles.tiny}>
            Think you reached this page by mistake? Stay tuned to the official IEEE PIE Kerala Section
            announcements for any reopened slots or late-entry instructions.
          </p>
        </div>

        <div className={styles.sidePanel}>
          <div className={styles.card}>
            <div className={styles.cardLabel}>Current Mode</div>
            <div className={styles.cardValue}>Application intake paused while team verification is in progress.</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardLabel}>Recommended Next Step</div>
            <div className={styles.cardValue}>Review the event lineup and schedule so you are ready if new slots open.</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardLabel}>Festival Note</div>
            <div className={styles.cardValue}>Selected participants will be notified using the contact details submitted during the active window.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
