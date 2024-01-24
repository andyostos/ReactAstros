import Button from '../Button/button';
import './Navbar.css';

const Navbar = ({ links }) => {

    return(
        <div className='nav-container'>
            <div className='navbar'>
                {
                    links.map(link => (
                        <Button key={link.id} {...link} />
                    ))

                }
            </div>
        </div>

        

    )

}

  





export default Navbar;