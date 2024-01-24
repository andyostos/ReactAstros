
import './App.css';
import Button from './components/Button/button';
import Navbar from './components/Navbar/Navbar';
import Astro from './components/Astros/Astros';
import BottomNav from './components/BottomNav/BottomoNav';
import { Routes, Route} from 'react-router-dom';

function App() {
  const btnText = 'Login';
  
  const links = [
    {id: 1,name: 'Home', href:'/'},
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
          element= {<BottomNav />}
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
