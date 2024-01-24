import './Astros.css'
import { useState , useEffect} from 'react';

const Astro = (props) => {
    console.log(props);
    return(
        
        <div className='card flex'>
            <p className='card-name'>{props.name}</p>
            <p className='card-station'>Craft: {props.craft}</p>
        </div>
    )
    
}

const Astros = ()  => {
    const [astros, setAstros] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://api.open-notify.org/astros.json');
                const result = await response.json();
                setAstros(result.people);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

return (
    <div className='cards-container flex'>
        {
            astros !== null && astros.map((astro, index) => (
                <Astro key={index} {...astro} />
            ))
        }
    </div>
    )

}



    



export default Astros;