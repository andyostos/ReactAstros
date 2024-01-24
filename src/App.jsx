
import './App.css';
import Button from './components/Button/button';
import Navbar from './components/Navbar/Navbar';
import Astro from './components/Astros/Astros';
import BottomNav from './components/BottomNav/BottomoNav';
import { Routes, Route} from 'react-router-dom';
import AboutMe from './components/About/About';

function App() {
  const btnText = 'Inicio';
  
  const links = [
    {id: 1,name: 'Home', imhref:'/'},
    {id: 2,name: 'About', href:'/about'},
    {id: 3,name: 'Astros', href:'/astros'}
  ]
  
  return (
      <>
      <Navbar links={links}/>
      <Routes>

        <Route 
          path='/'
          element= {<Button name={btnText} />}
        />

        <Route 
          path='/about'
          element= {<AboutMe />} 
          
        />


        <Route 
          path='/about'
          element= {<AboutMe />}
          
        />
        <Route 
          path='/astros'
          element= {<Astro />}
        />
      </Routes>

      </>
  )

  // Navbar = ({links}) => {
  //   return (
  //       <nav>
  //           <div class='nav--title'>
  //               // etc
  //           </div> 
  //           <div class='nav--links'>
  //               {
  //                   links.map(link => (
  //                     <Button {...link} />
                  
  //                   ))
  //               }
  //           </div>
  //       </nav>
  //   )
  // }
}




export default App
