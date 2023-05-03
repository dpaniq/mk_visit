

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
            <p>Filmmaker. Editor. Storyteller</p>

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
        </div>
      </div>
    </section>
  );
};

export default Home;
