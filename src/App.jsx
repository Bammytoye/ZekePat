import './App.css'
import About from './Component/About/About'
import Download from './Component/Download/Download'
import Navbar from './Component/Navbar/Navbar'
import Send from './Component/Send/Send'
import SignIn from './Component/Signin.jsx/SignIn'

function App() {

  return (
    <>
      <div className='bg-gray-100'>
        <Navbar />
        <About /> 
        <SignIn />   
        <Send />  
        <Download />   
      </div>
    </>
  )
}

export default App
