import Footer from './Footer';
import Navigation from './Navigation';

export default function NotFound() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <h1> 404 Site Not Found </h1>
      </main>
      <footer style={{ position: 'absolute', bottom: '0' }}>
        <Footer />
      </footer>
    </>
  );
}



