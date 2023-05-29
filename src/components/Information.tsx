import type { Component } from 'solid-js';

import styles from '../App.module.css';
import Photoshoot from '../assets/img/photoshoot.jpg'
import Separator from './Separator';
import { Colors } from '../constants';

const Information: Component = () => {
  return (
    <div class="wrapper bg-container red trapezoid">
      <section id="information" class="trapezoid-reverse">
        <div class="trapezoid-reverse">
          {/* Block */}
          <div class="block">
            <div class="preview">
              <img src={Photoshoot} alt="Solid logo" />
              <div class="preview-overlay">
                <span class="material-symbols-outlined">
                  play_circle
                </span>
              </div>
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
        </div>
      </section>
    </div>
  );
};

export default Information;
