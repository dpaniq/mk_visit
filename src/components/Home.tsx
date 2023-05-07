

import type { Component } from 'solid-js';

import kreslo from '../assets/img/kreslo.jpeg'
import TestVid from '../assets/video/test.mp4'
import { toggleFullscreen } from '../utils/fullscreen-api';
import Separator from './Separator';
import { Colors } from '../constants';

const Home: Component = () => {

  // const chair = 'https://giphy.com/gifs/barbershop-propercuts-properbarber-j3PbynAZgdGnpzh3Ua'
  //   < iframe src = "https://giphy.com/embed/j3PbynAZgdGnpzh3Ua" width = "480" height = "320" frameBorder = "0" class="giphy-embed" allowFullScreen ></ > <p><a href="https://giphy.com/gifs/barbershop-propercuts-properbarber-j3PbynAZgdGnpzh3Ua">via GIPHY</a></p>

  const chair = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODU4OWVkY2U4ODg5NGU2YzZkYTNlMzkzNjQzMWM3OWQ3YjVlYmJkMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/j3PbynAZgdGnpzh3Ua/giphy.gif'

  const onPlay = (event: MouseEvent) => {
    // console.log(event.)
    const videoTarget = document.getElementById("vid")
    if (videoTarget) {
      toggleFullscreen(videoTarget as HTMLVideoElement)
    }
  }

  return (
    <section id="home">
      <div class="trapezoid">
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
          <div class="preview" onClick={onPlay}>
            <img src={chair} alt="Solid logo" />
            <div class="preview-overlay">
              <span class="material-symbols-outlined">
                play_arrow
              </span>
            </div>
          </div>
        </div>

        <video
          id="vid"
          controls
          autoplay={false}
          loop={true}
          controlsList="nodownload noremoteplayback noplaybackrate pictureinpicture"
        >
          <source src={TestVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section >
  );
};

export default Home;
