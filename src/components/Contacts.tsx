import type { Component } from 'solid-js';

import kreslo from '../assets/img/kreslo.jpeg'

import Telegram from '../assets/icons/telegram-app-48.svg'
import Youtube from '../assets/icons/youtube-logo-48.svg'
import Facebook from '../assets/icons/facebook-48.svg'
import Instagram from '../assets/icons/instagram-48.svg'
import LinkedIn from '../assets/icons/linkedin-48.svg'
import Gmail from '../assets/icons/gmail.svg'

const Contacts: Component = () => {
  return (
    <footer id="contacts">
      <div class="contacts">
        <a href="#" class="contacts-group">
          <Telegram />
          {/* Telegram */}
        </a>
        <a href="#" class="contacts-group">
          <Youtube />
          {/* Youtube */}
        </a>
        <a href="#" class="contacts-group">
          <Facebook />
          {/* Facebook */}
        </a>
        <a href="#" class="contacts-group">
          <Instagram />
          {/* Instagram */}
        </a>
        <a href="#" class="contacts-group">
          <LinkedIn />
          {/* LinkedIn */}
        </a>
        <a href="#" class="contacts-group" >
          <Gmail />
          {/* Gmail */}
        </a>
      </div>
      <p>Copyright MK. Developed by <span>
        <a href="#">@dpaniq</a> /
        <a href="#">@nastya</a> /
        <a href="#">@mk</a>
      </span>
      </p>
    </footer>
  )
}

export default Contacts