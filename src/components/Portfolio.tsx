

import type { Component } from 'solid-js';

import coinGif from '../assets/img/gif/coin.gif'

import ag1Gif from '../assets/img/gif/american-gods.gif'
import ag2Gif from '../assets/img/gif/american-gods-2.gif'

import skyGif from '../assets/img/gif/sky.webp'
import JokerGif from '../assets/img/gif/joker.webp'


import Separator from './Separator';
import { Colors } from '../constants';

const Portfolio: Component = () => {
  return (
    <section id="portfolio">
      <div class="trapezoid-f2">
        <span>MORE</span>
      </div>
      <div class="trapezoid">
        <div class="grid-row portfolio">
          <div class="preview">
            <img src={ag1Gif} alt="Solid logo" />
          </div>
          <div class="preview">
            <img src={coinGif} alt="Solid logo" />
          </div>
          <div class="preview">
            <img src={JokerGif} alt="Solid logo" />
          </div>
          <div class="preview">
            <img src={skyGif} alt="Solid logo" />
          </div>
          <div class="preview">
            <img src={ag2Gif} alt="Solid logo" />
          </div>
        </div>
      </div>
      {/* <div class="triangle"></div> */}

    </section>
  );
};

export default Portfolio;
