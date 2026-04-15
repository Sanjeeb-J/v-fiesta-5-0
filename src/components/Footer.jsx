import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h4 className="gradient-text">IEEE PIE Kerala</h4>
            <p>Promoting Innovation and Entrepreneurship. We are dedicated to fostering a culture of technological growth among students.</p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} title="Twitter">𝕏</a>
              <a href="#" className={styles.socialLink} title="Instagram">📸</a>
              <a href="#" className={styles.socialLink} title="LinkedIn">in</a>
            </div>
          </div>
          
          <div className={styles.links}>
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h5>Contact Us</h5>
            <ul>
              <li>
                <strong style={{ color: 'var(--color-text)' }}>Navendu Krishna</strong><br/>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9em' }}>Web Manager</span><br/>
                <a href="tel:+919188658581">+91 91886 58581</a>
              </li>
              <li style={{ marginTop: '1rem' }}>
                <strong style={{ color: 'var(--color-text)' }}>Sanjeev Santhosh</strong><br/>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9em' }}>Event Manager</span><br/>
                <a href="tel:+918891142352">+91 88911 42352</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          &copy; {currentYear} IEEE PIE Kerala Section. All Rights Reserved. Crafted for V-Fiesta 5.0.
        </div>
      </div>
    </footer>
  );
}
