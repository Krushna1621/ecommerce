import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Title from './components/Title/Title';
import Content from './components/Content/Content';
function App() {
 
  return (
    <div className="app">
     <Header></Header>
     <Title></Title>
     <Content></Content>
     <Footer></Footer>
    </div>
  );
}

export default App;
