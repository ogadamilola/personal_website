import React from 'react';
import './App.css';
import { Footer, Blog, Features, Header } from './containers';
import { CTA, Brand, Navbar} from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg" >
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
