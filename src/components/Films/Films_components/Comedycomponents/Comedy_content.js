import './Comedy_content.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import cross from './cross.png'
import Comedy_card from './Comedy_card'
import CountrySelect from './Cunty'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'



const Comedy_content = () =>{
    return (

     <div className='Comedy_content'> 
        <div className='Comedy_content_main'>
                
            
            <aside className='Comedy_content_main_sidebar'>
              <ul className='Comedy_content_main_sidebar_ul'>
                <div className='Comedy_content_main_sidebar_ul_text'>Фильмы</div>
                <div className='Comedy_content_main_sidebar_ul_text'>Сериалы</div>
                <div className='Comedy_content_main_sidebar_ul_text'>С высоким рейтингом</div>
                <div className='Comedy_content_main_sidebar_ul_text'>Российские</div>
                <div className='Comedy_content_main_sidebar_ul_text'>Зарубежные</div>
                <div className='Comedy_content_main_sidebar_ul_text'>Вышедшие</div>
                <div className='Comedy_content_main_sidebar_ul_text'>Скрыть просмотренные</div>
              </ul>
              <div className='Comedy_content_main_sidebar_slider'><CountrySelect /></div>
              <div className='Comedy_content_main_sidebar_slider'><CountrySelect /></div>
              <div className='Comedy_content_main_sidebar_slider'><CountrySelect /></div>
            </aside>

          <div className='Comedy_content_main_content'>
            <div className='Comedy_content_main_content_title'>Комедии <img src={cross} className='Comedy_content_main_content_title_img'></img>– лучшие фильмы и сериалы</div>

            <div className='Comedy_content_main_content_films'>
              <div className='Comedy_content_main_content_films_block_first'>
                <div className='Comedy_content_main_content_films_block_text1'>Онлайн</div>
                <div className='Comedy_content_main_content_films_block_text2'>915 фильмов</div>
              </div>
              <div className='Comedy_content_main_content_films_block'>
                <div className='Comedy_content_main_content_films_block_text1'>Лучшие фильмы</div>
                <div className='Comedy_content_main_content_films_block_text2'>20 фильмов</div>
              </div>
              <div className='Comedy_content_main_content_films_block'>
                <div className='Comedy_content_main_content_films_block_text1'>Все</div>
                <div className='Comedy_content_main_content_films_block_text2'>61299 фильмов</div>
              </div>
              <div className='Comedy_content_main_content_films_slider'>
              <aside >
                <details>
                  <summary>По порядку</summary>
                </details>
              </aside>
              </div>
            </div>

            <div className='Comedy_content_main_content_watch'>
              <div className='Comedy_content_main_content_watch_text'>Вы посмотрели 0 фильмов из 20:</div>
              <div className='Comedy_content_main_content_watch_block'>
                <div className='Comedy_content_main_content_watch_block_percent'>0%</div>
              </div>
            </div>

            <Comedy_card title='Иван Васильевич меняет профессию' time='1973, 88 мин.' author='СССР • комедия  Режиссёр: Леонид Гайдай' role='В ролях: Александр Демьяненко, Юрий Яковлев' rate='8.8' views='759 438' top='Tog 250: 10' img={img1}/>
            <Comedy_card title='Один дома' time='1973, 88 мин.' author='СССР • комедия  Режиссёр: Леонид Гайдай' role='В ролях: Александр Демьяненко, Юрий Яковлев' rate='8.8' views='759 438' top='Tog 250: 10' img={img2}/>
            <Comedy_card title='Операция Ы' time='1973, 88 мин.' author='СССР • комедия  Режиссёр: Леонид Гайдай' role='В ролях: Александр Демьяненко, Юрий Яковлев' rate='8.8' views='759 438' top='Tog 250: 10' img={img3}/>
            <Comedy_card title='Джентельмены удачи' time='1973, 88 мин.' author='СССР • комедия  Режиссёр: Леонид Гайдай' role='В ролях: Александр Демьяненко, Юрий Яковлев' rate='8.8' views='759 438' top='Tog 250: 10' img={img4}/>
            <Comedy_card title='Бриллиантовая рука' time='1973, 88 мин.' author='СССР • комедия  Режиссёр: Леонид Гайдай' role='В ролях: Александр Демьяненко, Юрий Яковлев' rate='8.8' views='759 438' top='Tog 250: 10' img={img4}/>
            <Comedy_card title='Теория большого взрыва' time='1973, 88 мин.' author='СССР • комедия  Режиссёр: Леонид Гайдай' role='В ролях: Александр Демьяненко, Юрий Яковлев' rate='8.8' views='759 438' top='Tog 250: 10' img={img3}/>
            <Comedy_card title='Друзья' time='1973, 88 мин.' author='СССР • комедия  Режиссёр: Леонид Гайдай' role='В ролях: Александр Демьяненко, Юрий Яковлев' rate='8.8' views='759 438' top='Tog 250: 10' img=''/>
            <Comedy_card title='Маска' time='1973, 88 мин.' author='СССР • комедия  Режиссёр: Леонид Гайдай' role='В ролях: Александр Демьяненко, Юрий Яковлев' rate='8.8' views='759 438' top='Tog 250: 10' img=''/>
            <Comedy_card title='Иван Васильевич меняет профессию' time='1973, 88 мин.' author='СССР • комедия  Режиссёр: Леонид Гайдай' role='В ролях: Александр Демьяненко, Юрий Яковлев' rate='8.8' views='759 438' top='Tog 250: 10' img=''/>
            <Comedy_card title='Иван Васильевич меняет профессию' time='1973, 88 мин.' author='СССР • комедия  Режиссёр: Леонид Гайдай' role='В ролях: Александр Демьяненко, Юрий Яковлев' rate='8.8' views='759 438' top='Tog 250: 10' img=''/>
            
          </div>

          


        </div>
      </div>                  

    );
}

export default Comedy_content;