import './App.css';
import Cards from './components/Card';
import Hero from './components/Hero';
import Main from './components/Main';
import Nav from './components/Nav';
function App() {
  return (
    <div className='container'>
     {/* <h1>WELCOME TO HOOK LIST</h1> */}
     <Nav/>
     <Hero/> 
     <Cards/>
     

 
    </div>
  );
}

export default App;
