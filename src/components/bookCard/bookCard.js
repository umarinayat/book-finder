import React from 'react';
import './bookCard.css';


const bookCard = (props) => {
    return (
        <div className={'card-container'}>
            <img src={props.img} alt="Book"/>
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.publisher}</p>
            </div>
        </div>
    )
}

export default bookCard