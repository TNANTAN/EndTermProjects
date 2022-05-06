import './Card.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';



const Card = (props) =>{
    return (

            <div className='Card'> 

              <div className='Card_icon'>
                <img src={props.icon} className='Card_icon'></img>
              </div>

              <div className='Card_info'>
                <div className='Card_info_textone'>{props.titel}</div>
                <div className='Card_info_texttwo'>{props.count}</div>
              </div>

              <div className='Card_rate'>
                <span className='Card_rate_text'>{props.amount}</span>
                <img src={props.circle} className='Card_rate_circle'></img>
              </div>

            </div>            

    );
}

export default Card;