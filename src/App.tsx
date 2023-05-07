import type { Component } from 'solid-js';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Separator from './components/Separator';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contacts from './components/Contacts';
import Information from './components/Information';

const App: Component = () => {
  return (
    <div class="container">
      <Header />
      <Home />
      <About />
      <Information />
      <Portfolio />
      <Blog />
      <Contacts />
    </div>
  );
};

export default App;
