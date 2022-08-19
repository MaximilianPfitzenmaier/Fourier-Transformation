import Navigation from './Navigation';
import Footer from './Footer';
import sinus from '../assets/images/sinus.png';
import cosinus from '../assets/images/cosinus.png';
import rightClick from '../assets/images/right-click.png';
import middleClick from '../assets/images/middle-click.png';
import pyramide from '../assets/images/pyramide.png';
import kamm from '../assets/images/kamm.png';
import konstant from '../assets/images/konstant.png';
import single from '../assets/images/single.png';
import size1 from '../assets/images/size-16.png';
import size2 from '../assets/images/size-32.png';
import size3 from '../assets/images/size-64.png';
import size4 from '../assets/images/size-128.png';

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="home">
        <h1>Welcome to the 2D Fourier-Transformation Application!</h1>
        <h2>How to use</h2>
        <p>
          The application has four areas that can be interacted with. To calculate the Fourier Transformation you can simply click on one of the areas and the
          application will calculate and visualise the result.
        </p>

        <h3>How to interact with the Grid Systems</h3>
        <p>To draw inside the areas you can simply click and drag the mouse</p>
        <p>
          To draw a line with the <b>same height</b> click and drag with the right mousebutton
        </p>
        <img src={rightClick} alt="" />
        <p>You can also connect two points together by using the middle mousebutton. The first click for the starting point and the next click to connect it</p>
        <img src={middleClick} alt="" />

        <div style={{ margin: '2rem 0' }}>
          <h3>Buttons/Dropdowns</h3>
          <p>
            <b>Reset all Functions Button:</b> Resets all Areas.
          </p>
          <p>
            <b>Size Dropdown:</b> The size dropedown determines the interval between points.
          </p>
        </div>
        <strong>Size 16:</strong>
        <img src={size1} alt="" />
        <strong>Size 32:</strong>
        <img src={size2} alt="" />
        <strong>Size 64:</strong>
        <img src={size3} alt="" />
        <strong>Size 128:</strong>
        <img src={size4} alt="" />
        <h3>Basefunction Dropdown</h3>
        <p>Determines predefined functions that are hard to draw with the mouse.</p>
        <strong>Sinus</strong>
        <img src={sinus} alt="" />
        <strong>Cosinus</strong>
        <img src={cosinus} alt="" />
        <strong>Comb</strong>
        <img src={kamm} alt="" />
        <strong>Constant</strong>
        <img src={konstant} alt="" />
        <strong>Pyramid</strong>
        <img src={pyramide} alt="" />
        <strong>Single</strong>
        <img src={single} alt="" />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
