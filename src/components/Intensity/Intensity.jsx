import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { intensity } from "./intensityData";
import './IntensityStyle.css';

const Intensity = () => {
    return (
        <div className='intensity'>
            <h1>Intensity</h1>
            <div className='intensity_content'>
                {intensity.map((data, index) => (
                    <div className='intensity_data'>
                        <FontAwesomeIcon icon={data.logo} className='intensity_logo'/>
                        <h1>{data.title}</h1>
                        <p>{data.details}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Intensity;