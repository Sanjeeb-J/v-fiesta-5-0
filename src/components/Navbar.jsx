import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>V-Fiesta</Link>
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/schedule" onClick={() => setIsOpen(false)}>Schedule</Link>
          <Link to="/register" className={styles.accentText} onClick={() => setIsOpen(false)}>Register</Link>
        </div>
        <button className={styles.mobileBtn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '×' : '☰'}
        </button>
      </div>
    </nav>
  );
}
