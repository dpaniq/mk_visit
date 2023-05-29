import { createSignal, type Component, createRenderEffect, For } from 'solid-js';

import styles from '../App.module.css';
import Photoshoot from '../assets/img/photoshoot.jpg'
import Separator from './Separator';
import { Colors } from '../constants';

import Gif1 from '../assets/img/gif/coin.gif'
import Gif2 from '../assets/img/gif/joker.webp'
import Gif3 from '../assets/img/gif/sky.webp'

const About: Component = () => {

  const [photos, setPhotos] = createSignal([Gif1, Gif2, Gif3])

  createRenderEffect(() => {
    setInterval(() => {
      const lastPhoto = photos().pop()
      setPhotos([lastPhoto!, ...photos()])
    }, 1500)
  });

  return (
    <div class="wrapper bg-container black trapezoid-reverse">


      <section id="about">
        <div class="">
          {/* <Separator
        position="topLeft"
        styles={{
          'position': 'absolute',
          'top': 0,
          'background-color': Colors.gray,
        }}
      /> */}

          {/* Block */}
          <div class="block">
            <div class="preview">
              <For each={photos()}>
                {(photo) => (<img src={photo} alt="Solid logo" />)}
              </For>

              {/* <img src={Gif1} alt="Solid logo" />
              <img src={Gif3} alt="Solid logo" />
              <img src={Gif2} alt="Solid logo" /> */}
              {/* <img src={Photoshoot} alt="Solid logo" />
              <img src={Photoshoot} alt="Solid logo" /> */}
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

          {/* <Separator
        position="bottomRight"
        styles={{
          'position': 'absolute',
          'bottom': 0,
          'background-color': Colors.gray,
        }}
      /> */}
        </div>

      </section>
    </div>
  );
};

export default About;
