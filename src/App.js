import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Menu from './pages/Menu';
import Dashboard from './pages/Dashboard';
import Widgets from './pages/Widgets';
import Footer from './pages/Footer';
import { Route, Router } from 'react-router-dom';



function App() {
  return (
    <div className="wrapper">
      
      <Header/>

      
      <Router>
          <Menu />

          <Route path='/' element={<Dashboard/>} />

          <Route path='/widgets' element={<Widgets/>} />
          
      </Router>
     

     
      <Footer/>

    </div>
  );
}

export default App;
