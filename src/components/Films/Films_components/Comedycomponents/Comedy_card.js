import './Comedy_card.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import {Checkbox} from "@mui/material"

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Star, StarBorder } from '@material-ui/icons';



const Comedy_card = (props) =>{

    


    return (

            <div className='Comedy_card'> 
              <div className='Comedy_card_main'>

                <div className=''><img className='Comedy_card_main_img' src={props.img}/></div>

                <div className='Comedy_card_main_content'>
                  <div className='Comedy_card_main_conteiner'>
                    <div className='Comedy_card_main_conteiner_title'>{props.title}</div>
                    <span className='Comedy_card_main_conteiner_time'>{props.time}</span>
                    <div className='Comedy_card_main_conteiner_creater'>{props.author}</div>
                    <span className='Comedy_card_main_conteiner_roles'>{props.role}</span>
                  </div>
                  

                  <div className='Comedy_card_main_rate'>
                    <div className='Comedy_card_main_rate_block'>
                      <div className='Comedy_card_main_rate_block_one'>
                        <span className='Comedy_card_main_rate_block_one_span1'>{props.rate}</span>
                        <span className='Comedy_card_main_rate_block_one_span2'>{props.views}</span>
                      </div>
                      <div className='Comedy_card_main_rate_block_two'>{props.top}</div>
                    </div>

                    <div className='Comedy_card_main_rate_button'>
                      <div className='Comedy_card_main_rate_button_one'><Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}/>Буду смотреть</div>
                      <div className='Comedy_card_main_rate_button_two'><Checkbox icon={<StarBorder />} checkedIcon={<Star />}/></div>
                      <div className='Comedy_card_main_rate_button_three'>. . .</div>
                    </div>
                  </div>

                </div>
                

              </div>
            </div>                  

    );
}

export default Comedy_card;