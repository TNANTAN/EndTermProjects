import './Genres.css'
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import Card from './Card'
import icon1 from './genresImg/icon1.png'
import icon2 from './genresImg/icon2.png'
import icon3 from './genresImg/icon3.png'
import icon4 from './genresImg/icon4.png'
import icon5 from './genresImg/icon6.png'
import icon6 from './genresImg/icon7.png'
import icon7 from './genresImg/icon8.png'
import icon8 from './genresImg/icon9.png'
import icon9 from './genresImg/icon10.png'
import icon10 from './genresImg/icon11.png'



import Comedy from './Comedy'




const Genres = () =>{
    return (

            <div className='Genres_main'> 
              <div className='Genres_main_conteiner'>

                <div className='Genres_main_conteiner_text'>
                  <div className='Genres_main_conteiner_text_texts'>СПИСОК</div>
                  <div className='Genres_main_conteiner_text_texts'>ПРОСМОТРЕНО</div>
                </div>


                
                <Routes>
                  <Route  path='Comedy' element={<Navigate to="/Comedy"/>}></Route>
                </Routes>


                <Link to="Comedy"><Card icon={icon1} titel='Комедии' /></Link>
                
                <Card icon={icon2} titel='Мультфильмы' />
                <Card icon={icon3} titel='Ужасы' />
                <Card icon={icon4} titel='Фантастика' />
                <Card icon={icon5} titel='Триллеры' />
                <Card icon={icon6} titel='Боевики' />
                <Card icon={icon7} titel='Детективы' />
                <Card icon={icon8} titel='Фэнтези' />
                <Card icon={icon9} titel='Военные' />
                <Card icon={icon10} titel='Семейные' />



              </div>
            </div>                  

    );
}

export default Genres;