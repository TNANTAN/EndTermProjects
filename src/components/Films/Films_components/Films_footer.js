import './Films_footer.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Comeon from './img/Comeon.png'
import Batman from './img/batman.png'
import Horse from './img/horse.png'


const Films_footer = () =>{
    return (
        <div className='Films_footer'>
            <div className='Films_footer_conteiner'> 

              <div className='Films_footer_conteiner_header'>
                <h2 className='Films_footer_conteiner_header_textone'>Выбор редакции</h2>
                <p className='Films_footer_conteiner_header_texttwo'>Все Материалы</p>
              </div>

              <div className='Films_footer_conteiner_footer'>

                <div className='Films_footer_conteiner_footer_block1'>
                  <img src={Comeon} className='Films_footer_conteiner_footer_block1_img'></img>
                  <div className='Films_footer_conteiner_footer_block1_conteiner'>
                    <div className='Films_footer_conteiner_footer_block1_texts'>
                      <div className='Films_footer_conteiner_footer_block1_texts_one'>Выбор редакции</div>
                      <div className='Films_footer_conteiner_footer_block1_texts_two'>Что смотреть дома: «Финник», «Камон Камон» и «Сядь за руль моей машины»</div>
                      <div className='Films_footer_conteiner_footer_block1_texts_three'>29 апреля</div>
                    </div>
                  </div>
                </div>

                <div className='Films_footer_conteiner_footer_block2'>
                  <div className='Films_footer_conteiner_footer_block2_img'><img src={Batman} className='Films_footer_conteiner_footer_block2_img'></img></div>
                  <div className='Films_footer_conteiner_footer_block2_texts'>
                    <div className='Films_footer_conteiner_footer_block2_texts_one'>Выбор редакции</div>
                    <div className='Films_footer_conteiner_footer_block2_texts_two'><h3 className='Films_footer_conteiner_footer_block2_texts_two_h3'>Что смотреть дома: «Бэтмен», «Лулу и Бриггс», финал «Лучше звоните Солу»</h3></div>
                    <div className='Films_footer_conteiner_footer_block2_texts_three'>22 апреля</div>
                  </div>
                </div>

                <div className='Films_footer_conteiner_footer_block2'>
                  <div className='Films_footer_conteiner_footer_block2_img'><img src={Horse} className='Films_footer_conteiner_footer_block2_img'></img></div>
                  <div className='Films_footer_conteiner_footer_block2_texts'>
                    <div className='Films_footer_conteiner_footer_block2_texts_one'>Выбор редакции</div>
                    <div className='Films_footer_conteiner_footer_block2_texts_two'><h3 className='Films_footer_conteiner_footer_block2_texts_two_h3'>Что смотреть дома: «Бэтмен», «Лулу и Бриггс», финал «Лучше звоните Солу»</h3></div>
                    <div className='Films_footer_conteiner_footer_block2_texts_three'>22 апреля</div>
                  </div>
                </div>
                
              </div>

            </div>                  
        </div>
    );
}

export default Films_footer;