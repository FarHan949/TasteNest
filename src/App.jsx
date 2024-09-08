import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Cards from './components/Cards/Cards'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      
      <Header></Header>
      <Home></Home>
      <Cards></Cards>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
