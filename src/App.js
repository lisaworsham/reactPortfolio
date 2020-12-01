import React from 'react';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';
import AboutMe from './pages/aboutMe';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Container>
          <Route exact path="/" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Container>
    </div>
  );
}

export default App;
