import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UseReducer from '../UseReducer/UseReducer'
import Toggle from '../UseState/Toggle'
import Counter from '../UseState/Counter'
import ChangeColor from '../UseState/ChangeColor'
import TextArea from '../UseState/TextArea'
import First from '../Pages/First'
import Second from '../Pages/Second'
import Third from '../Pages/Third'
import Fourth from '../Pages/Fourth'
import Five from '../Pages/Five'
import Six from '../Pages/Six'
import Seven from '../Pages/Seven'
import Eight from '../Pages/Eight'
import Nine from '../Pages/Nine'
import Ten from '../Pages/Ten'
import Eleven from '../Pages/Eleven'

const myRoute = () => {
  return (
    <>
      <Router>
         <Routes>
            <Route path='/' element={<UseReducer/>}/>
            <Route path='/toggle' element={<Toggle/>}/>
            <Route path='/count' element={<Counter/>}/>
            <Route path='/colorchange' element={<ChangeColor/>}/>
            <Route path='/textarea' element={<TextArea/>}/>

            <Route path='/f1' element={<First/>}/>
            <Route path='/2nd' element={<Second/>}/>
            <Route path='/3rd' element={<Third/>}/>
            <Route path='/4th' element={<Fourth/>}/>
            <Route path='/5th' element={<Five/>}/>
            <Route path='/6th' element={<Six/>}/>
            <Route path='/7th' element={<Seven/>}/>
            <Route path='/8th' element={<Eight/>}/>
            <Route path='/9th' element={<Nine/>}/>
            <Route path='/10th' element={<Ten/>}/>
            <Route path='/11th' element={<Eleven/>}/>
         </Routes>
      </Router>
    </>
  )
}

export default myRoute
