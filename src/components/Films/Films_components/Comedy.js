import './Comedy.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Comedy_header from './Comedycomponents/Comedy_header'
import Comedy_content from './Comedycomponents/Comedy_content'



const Comedy = () =>{
    return (

            <div className='Comedy'> 
              <div className='Comedy_main'>

                <Comedy_header/>
                <Comedy_content/>

              </div>
            </div>                  

    );
}

export default Comedy;