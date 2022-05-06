import './Films_main.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import circle from './img/Circle.png'
import Card from './Card'
import icon from './img/top.png'
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'
import icon4 from './img/icon4.png'
import icon5 from './img/icon5.png'
import icon6 from './img/icon6.png'
import icon7 from './img/icon7.png'
import icon8 from './img/icon8.png'
import icon9 from './img/icon9.png'
import icon10 from './img/icon10.png'
import icon11 from './img/icon11.png'
import icon12 from './img/icon12.png'
import icon13 from './img/icon13.png'
import icon14 from './img/icon14.png'
import icon15 from './img/icon15.png'


const Films_main = () =>{
    return (

            <div className='Films_main_main'> 
              <div className='Films_main_main_conteiner'>

                <div className='Films_main_main_conteiner_text'>
                  <div className='Films_main_main_conteiner_text_texts'>СПИСОК</div>
                  <div className='Films_main_main_conteiner_text_texts'>ПРОСМОТРЕНО</div>
                </div>

                <Card icon={icon} titel='250 лучших фильмов' count='250 фильмов' amount='0 из 250' circle={circle}/>
                <Card icon={icon3} titel='Лучшие фильмы 2021 года: выбор редакции' count='12 фильмов' amount='0 из 12' circle={circle}/>
                <Card icon={icon2} titel='500 лучших фильмов' count='500 фильмов' amount='0 из 500' circle={circle}/>
                <Card icon={icon1} titel='Популярные фильмы' count='1000 фильмов' amount='0 из 1000' circle={circle}/>
                <Card icon={icon4} titel='Цифровые релизы' count='50 фильмов' amount='0 из 50' circle={circle}/>
                <Card icon={icon5} titel='Фильмы про вампиров' count='65 фильмов' amount='0 из 65' circle={circle}/>
                <Card icon={icon6} titel='Фильмы про любовь' count='70 фильмов' amount='0 из 70' circle={circle}/>
                <Card icon={icon7} titel='Фильмы про зомби' count='31 фильмов' amount='0 из 31' circle={circle}/>
                <Card icon={icon8} titel='Фильмы про космомс' count='48 фильмов' amount='0 из 48' circle={circle}/>
                <Card icon={icon9} titel='Фильмы про подростков' count='340 фильмов' amount='0 из 34' circle={circle}/>
                <Card icon={icon10} titel='Фильмы про акул' count='29 фильмов' amount='0 из 29' circle={circle}/>
                <Card icon={icon11} titel='Фильмы про школу' count='30 фильмов' amount='0 из 30' circle={circle}/>
                <Card icon={icon12} titel='Фильмы про танцы' count='31 фильмов' amount='0 из 31' circle={circle}/>
                <Card icon={icon13} titel='Семейные комедии' count='50 фильмов' amount='0 из 50' circle={circle}/>
                <Card icon={icon14} titel='Комедейные боевики' count='50 фильмов' amount='0 из 50' circle={circle}/>
                <Card icon={icon15} titel='Мультфильмы для самых маленьких' count='30 фильмов' amount='0 из 30' circle={circle}/>
                

              </div>
            </div>                  

    );
}

export default Films_main;