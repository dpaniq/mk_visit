

import type { Component } from 'solid-js';

import kreslo from '../assets/img/kreslo.jpeg'

const Portfolio: Component = () => {
  return (
    <section id="portfolio" class="grid-row portfolio">
      <div class="preview">
        <img src={kreslo} alt="Solid logo" />
      </div>
      <div class="preview">
        <img src={kreslo} alt="Solid logo" />
      </div>
      <div class="preview">
        <img src={kreslo} alt="Solid logo" />
      </div>
      <div class="preview">
        <img src={kreslo} alt="Solid logo" />
      </div>
      <div class="preview">
        <img src={kreslo} alt="Solid logo" />
      </div>
    </section>
  );
};

export default Portfolio;
