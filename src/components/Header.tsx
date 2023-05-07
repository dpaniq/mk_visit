import type { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <header>
      <nav>
        <div id="logotype">
          M<em>REC</em>
          <div class="rec"></div>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
