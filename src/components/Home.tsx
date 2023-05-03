

import type { Component } from 'solid-js';

import kreslo from '../assets/img/kreslo.jpeg'

const Home: Component = () => {
  return (
    <section id="home">
      {/* Block */}
      <div class="block">
        <div>
          <div class="text-home">
            <h1>Marek</h1>
            <h1>Kondratjev</h1>
            <br />
            <h3>Filmmaker. Editor. Storyteller</h3>

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
        <div class="preview">
          <img src={kreslo} alt="Solid logo" />
          <div class="preview-overlay">
            <span class="material-symbols-outlined">
              play_circle
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
