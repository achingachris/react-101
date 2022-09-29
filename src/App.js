import './App.css';
import Landing from './components/landing-page/Landing';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Projects from './components/projects/Projects';
import SignIn from './components/authentication/signin/SignIn';
import FreelanceProjects from './components/projects/FreelanceProjects';
import OpenSourceProjects from './components/projects/OpenSourceProjects';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path='*' element='Page does not exist'/>
        <Route path='/' element= {<Landing />} />
        <Route path='/projects' element= {<Projects />} >
          <Route path='f-projects' element = {<FreelanceProjects />}/>
          <Route path='o-projects' element = {<OpenSourceProjects />}/>
        </Route>
        <Route path='/signin' element= {<SignIn />} />
      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
