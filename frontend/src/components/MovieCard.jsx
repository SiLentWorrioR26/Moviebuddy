import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    return (
        <div className="card_area">
            <div className="img_area" key={props.id}>
                <img src={props.src} alt="noimg" />
            </div>
            <div className="text_area">
                <h3>{props.title}</h3>
                <h5>{props.type} | {props.lang}</h5>
                <Link to='/ticket' className='bookbtn'>Book Ticket</Link>
            </div>
        </div>
    )
}

export default MovieCard