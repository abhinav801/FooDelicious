import React from 'react'
import Home from './Home'
import {Route , Routes} from 'react-router-dom'
import Cuisine from './cuisine';
import Searched from './searched';
import Recipes from './recipes';

function Pages() {
  return (
    
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cuisine/:type' element={<Cuisine/>} />
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/recipes/:name' element={<Recipes/>}/>
    </Routes>
    
  )
}

export default Pages;