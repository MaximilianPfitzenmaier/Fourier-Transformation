import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { labels } from '../assets/data/labels';

class Legal extends React.Component {
  render() {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <main style={{ width: '50%', margin: '0 auto' }}>
          <div>
            <h2>Legal notice</h2>
            <p>Maximilian Pfitzenmaier</p>
            <p>74354 Besigheim</p>
            <p>Deutschland</p>
            <p>E-Mail: max.pfitzenmaier@web.de</p>
          </div>
          <div>
            <p>
              <strong>Accountability for content</strong> The contents of our pages have been created with the utmost care. However, we cannot guarantee the
              contents accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web
              pages. In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties,
              or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable
              laws remain unaffected by this as per § 8 to § 10 of the Telemedia Act (TMG)
              For the calculation of the Fourier-Transform we use the FFT calculation of: {labels.nayuki} in JavaScript form.
            </p>
            <p>
              <strong>Accountability for links</strong> Responsibility for the content of external links (to web pages of third parties) lies solely with the
              operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will
              remove the respective link immediately.
            </p>
            <p>
              <strong>Copyright</strong> Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq.
              of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the
              prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either
              directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).
            </p>
          </div>
        </main>
        <footer className="footer-legal" style={{ position: 'absolute', bottom: '0' }}>
          <Footer />
        </footer>
      </>
    );
  }
}

export default Legal;
