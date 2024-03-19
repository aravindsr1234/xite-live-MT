import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faBusinessTime, faEyeLowVision } from '@fortawesome/free-solid-svg-icons';

const Flavour = () => {
    return (
        <div className='secondPage_flavour'>
            <div className='flavour_content'>
                <h1 className='flavour_mainHeading'>Flavour</h1>
                <div className='flavours'>
                    <FontAwesomeIcon icon={faMicrochip} /><h1>Technology</h1>
                </div>
                <div className='flavours'>
                    <FontAwesomeIcon icon={faBusinessTime} /><h1>business</h1>
                </div>
                <div className='flavours'>
                    <FontAwesomeIcon icon={faEyeLowVision} /><h1>Visionary</h1>
                </div>
            </div>
            {/* <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2oumREkTnuHHME9Q0ioY15uJNp-39WFscv_yF58cwA&s"} alt="" /> */}
        </div>
    )
}

export default Flavour;