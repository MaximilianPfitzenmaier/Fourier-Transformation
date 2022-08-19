import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { labels } from '../assets/data/labels';
import forwardfft from '../assets/images/forwardfft.png';
import backwardfft from '../assets/images/backwardfft.png';

class About extends React.Component {
  render() {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <main className="about">

          <section>
            <h1>About this Project</h1>
            <p>This seminar project from <a href={labels.uni}>University of Tuebingen</a> is a beautiful react Application that creates and calculates the 2D Fourier Transformation.
             We provide this Project for educational purposes, with this Project you can visualise the 2D Fourier Transformation and hopefully learn something from this experience.</p>
          </section>

          <section>
            <h3>
              About us
            </h3>
            <p>
              Our names are Maximilian Pfitzenmaier and Thanh Michael Giang and we are two absolutly stunning and awesome master students of the <a href={labels.uni}>University of Tuebingen</a> that are currently studying media informatics.
            </p>
          </section>

          <section>
            <h3>About Fourier-Transformation</h3>
            <p>
              The Fourier Tranformation breaks down functions while relying on the position in spatial or the time. While the spatial or time is relying on the spatial frequency and the temporal frequency.
              Using the Fourier Transformation, one tries to find the sinus and cosinus functions that have suitable frequencies and amplitudes. The sum of the suitable frequencies and amplitudes should approximate the given function.
            </p>

            <strong>Properties of Fourier-Transformation</strong>
            <ul>
              <li>Convolution theorem: Convolution in spatial space corresponds to multiplication in frequency space (and vice versa).</li>
              <li>Separability: dimensions can be transformed separately</li>
              <li>Theorem of interchange: FT turned onto FT of a function results in point-mirrored original function: F(F(f(x, y))) = f(- x,- y)</li>
              <li>Displacement law: Displacement in spatial space changes only phase, not amplitude in frequency space.</li>
              <li>Rotation theorem: rotation in local space is rotation by the same angle in frequency space</li>
              <li>Superposition theorem: linear combinations of figures in local space correspond to superposition of the respective representations of the figures in frequency space</li>
              <li>Similarity theorem: stretching of the function in local space corresponds to compression in frequency space (and vice versa)</li>
              <li>Periodicity: FT of a periodic function is discrete on a regular grid</li>
            </ul>

            <strong>Discret Fourier-Transformation (DFT)</strong>
            <p>
              The Discrete Fourier Transformation works with the spectral analysis of discrete finite signals.
              Those are used to periodically analyse complex numbers that represent the signal values while the signal values can be summed up as a vector.
            </p>

            <strong>Fast Fourier-Transformation (FFT)</strong>
            <p>
            The FFT is a improvement of the efficiency of computing power compared to the discret fourier transformation. By using the divide and conquer algorithm the FFT reduces
            the number of arithmetic oprations by a large margin.
            </p>

            <p>
              The forward FFT is based on the formular:
            </p>

            <img src={forwardfft}></img>

            <p>
              The inverse FFT is based on the formular:
            </p>

            <img src={backwardfft}></img>


          </section>

          <section>
            <h3>
              Building the Project
            </h3>

            <p>
              This project was build by using ReactJS and Visual Studio Code as an programming environment. The Project is available at <a href={labels.github} rel='nofollow noreferrer' target='_blank'>GitHub</a>
            </p>

            <strong>React</strong>
            <p>
            React or ReactJS is a open-source Javascript library that uses UI components to build interfaces. By viewing each state in the Application React can render and update
            components where the data changes thus making it efficient and fast without much loading time. Through UI components, with each managing their own state, it is possible to easily
            create complex UIs while still being very clear and easy to debug.
            </p>

            {/*
            <strong>Components of this Project</strong>
            <p></p>
              Components are implemented with the render() method. The render method take data as input and &quot;renders&quot; the given data on the display in a webpage.
              Overal this Project is using 6 components for the Webpage and the Applikation.
            </p>

            <p><b>Home.js</b></p>
            <p><b>Footer.js</b></p>
            <p><b>Navigation.js</b></p>
            <p><b>Legal.js</b></p>
            <p><b>About.js</b></p>
            <p><b>NotFound.js</b></p>
            */}

          </section>


        </main>
        <footer><Footer /></footer>
      </>
    );
  }
}

export default About;
