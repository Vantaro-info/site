import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('defer', '');
    script.setAttribute('data-domain', 'vantaro.info');
    script.src = 'https://plausible.io/js/plausible.js';
    document.body.appendChild(script);
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', color: '#fff', background: '#111' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Partner with Vantaro</h1>
      <p style={{ maxWidth: 600 }}>
        We simplify fixture sourcing for developers with AI-powered quoting and lean logistics.
        Join us as a supplier and grow your reach.
      </p>
      <a href=\"https://tally.so/r/w5DKKb\" target=\"_blank\" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '1rem 2rem', background: '#fff', color: '#000', fontWeight: 'bold', textDecoration: 'none', borderRadius: 6 }}>
        Apply Now
      </a>
    </main>
  );
}
