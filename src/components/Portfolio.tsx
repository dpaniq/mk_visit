

import type { Component } from 'solid-js';

import kreslo from '../assets/img/kreslo.jpeg'
import Separator from './Separator';
import { Colors } from '../constants';

const Portfolio: Component = () => {
  return (
    <section
      id="portfolio"

    >
      <Separator
        position="topRight"
        styles={{
          'position': 'absolute',
          'top': 0,
          'background-color': Colors.tomato,
        }}
      />
      {/* 
      <Separator
        position="topRight"
        styles={{
          'position': 'absolute',
          'top': 100,
          'background-color': Colors.gray,
        }}
      /> */}
      <div class="grid-row portfolio">
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
      </div>
      <Separator
        position="bottomRight"
        styles={{
          'position': 'absolute',
          'bottom': 0,
          'background-color': Colors.gray,
        }}
      />
    </section>
  );
};

export default Portfolio;
