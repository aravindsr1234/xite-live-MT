import { useState } from 'react';
import './MainContent.css';
import { data } from "./MainContentData";

const MainContent = () => {

    var [index, setIndex] = useState("0");
    console.log(index);

    const increaseIndex = () => {
        if (index === 3) {
            console.log("hereee");
            index--
        }
        index++
        setIndex(index);
    };

    const decreaseIndex = () => {
        if (index <= 0) {
            index++
        }
        index--
        setIndex(index)
    }

    return (
        <div className='MainContent'>
            <button className='leftSideIndex' onClick={decreaseIndex}>{"<<"}</button>
            <div className='MainData'>
                <h1>{data[index].title}</h1>
                <h3>{data[index].subTitle}</h3>
                <button className='MainData_button'>Know More</button>
            </div>
            <img src={data[index].Image} alt="" />
            <button className='rightSideIndex' onClick={increaseIndex}>{">>"}</button>
        </div>
    )
}

export default MainContent