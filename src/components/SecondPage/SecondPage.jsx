import './SecondPage.css';
import Flavour from '../Flavour/Flavour';
import Intensity from '../Intensity/Intensity';

const SecondPage = () => {
    return (
        // <div className='container'>
        <div className='secondPage'>
            <div className='secondPage_header'>
                <h1>Stirring Up Great Conversations Over Coffee!</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates inventore sapiente possimus eos asperiores pariatur, quisquam distinctio? Voluptas incidunt aperiam omnis mollitia amet tempore debitis aut. Ea, accusantium facilis.</p>
            </div>
            <Flavour />
            <Intensity />
        </div>
        // </div>
    )
}

export default SecondPage;