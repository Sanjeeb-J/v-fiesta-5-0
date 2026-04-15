import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
      <h1 className="gradient-text" style={{ fontSize: '6rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>Lost in space...</p>
      <Link to="/" style={{
        padding: '0.875rem 2.5rem',
        border: '1px solid var(--color-accent-blue)',
        borderRadius: '4px',
        color: '#fff',
        fontFamily: 'var(--font-heading)',
        backgroundColor: 'var(--color-accent-blue)'
      }}>Back Home</Link>
    </div>
  );
}
