import { Link } from "react-router-dom";

const Button = (props) => {
   console.log(props);
    return (
        // <a  href={props.href} targent='_blank'>
        // <button>{props.name}</button>
        // </a>
        <Link to= {props.href}>
          <button>{props.name}</button>
        </Link>
    )
  }
Button.defaultProps = {

  name: 'Hola',
  href: '/'
}
  export default Button;