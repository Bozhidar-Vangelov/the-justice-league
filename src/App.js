import { useState } from 'react';
import './App.css';

import Dropdown from './components/Navbar/Dropdown.js';
import Navbar from './components/Navbar/Navbar.js';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </>
  );
}

export default App;
