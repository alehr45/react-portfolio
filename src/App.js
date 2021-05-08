import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: 'Portfolio', description: 'My up-to-date portfolio' },
    { name: 'Resume', description: 'Past experience and job history' },
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
 <main>
  <ContactForm></ContactForm>
  <Portfolio currentCategory={currentCategory}></Portfolio>
  <About></About>
</main>
    </div>
  );
}

export default App;