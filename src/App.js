import logo from './logo.svg';
import './App.css';
import Landing from './components/landing-page/Landing';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Projects from './components/projects/Projects';
import SignIn from './components/authentication/signin/SignIn';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Landing/>
      <Routes>
        <Route path='/' element= {<Landing />} />
        <Route path='/projects' element= {<Projects />} />
        <Route path='/signin' element= {<SignIn />} />
      </Routes>
      <Landing/>
    </Router>
    </>
   
  );
}

export default App;
