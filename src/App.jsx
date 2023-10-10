import './App.css'
import Landing from './components/landing/Landing'
import { Route, Routes } from "react-router-dom";
import Error from './components/Error-page/Error';
import Home from './components/home/Home';
import CardDetailContainer from './components/cardDetail/CardDetailContainer';
import Form from './components/form/Form';
function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />

        <Route path='/detail/:detailId' element={<CardDetailContainer />} />
        <Route path='/createVideogame' element={<Form />} />
      </Routes>
    </>
  )
}

export default App
