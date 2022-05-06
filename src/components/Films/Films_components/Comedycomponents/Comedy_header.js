import './Comedy_header.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


const Comedy_header = () =>{
    return (

            <div className='Comedy_header'> 
              <div className='Comedy_header_main'>

                <div className='Comedy_header_conteiner'>
                  <div className='Comedy_header_conteiner_text1'>Все списки</div>
                  <ul className='Comedy_header_conteiner_ul'>
                    <li className='Comedy_header_conteiner_li'>Топ 250 фильмов</li>
                    <li className='Comedy_header_conteiner_li'>Топ 250 сериалов</li>
                    <li className='Comedy_header_conteiner_li'>Онлайн-кинотеатр</li>
                    <li className='Comedy_header_conteiner_li'>Навигатор</li>
                  </ul>
                </div>

              </div>
            </div>                  

    );
}

export default Comedy_header;