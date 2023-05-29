import type { Component } from 'solid-js';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Separator from './components/Separator';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Information from './components/Information';
import Footer from './components/Footer';

const App: Component = () => {
  return (
    <div class="container">
      <Header />
      <Home />
      <Portfolio />
      <About />
      <Information />
      <Blog />

      {/* <div class="wrapper bg-container black"></div> */}
      <Footer />
    </div>
  );
};

export default App;
