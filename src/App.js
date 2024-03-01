import React from 'react';
import './App.css';
import { Footer, Music, Photography, Header} from './containers';
import { Programming, Brand, Navbar, GGS, Contact} from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg" >
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Photography />
      <Programming />
      <GGS />
      <Music />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
