import type { Component } from 'solid-js';

import styles from '../App.module.css';
import kreslo from '../assets/img/kreslo.jpeg'

const About: Component = () => {
  return (
    <section id="about">
      {/* Block */}
      <div class="block">
        <div class="preview">
          <img src={kreslo} alt="Solid logo" />
        </div>
        <div>
          <div class="text">
            <h1>Hey,</h1>
            <h1>I`m Marek</h1>
            <p>I`m an independent creative filmmaker, editor and storyteller</p>

          </div>

          {/* Icon */}
          <div class="icon-in-block">
            <div class="icon">
              <span class="material-symbols-outlined">
                south
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
