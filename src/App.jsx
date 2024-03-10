import './App.css'
import About from './Component/About/About'
import Download from './Component/Download/Download'
import Navbar from './Component/Navbar/Navbar'
import Send from './Component/Send/Send'
import SignIn from './Component/Signin.jsx/SignIn'
import Let from './Component/Let/Let'
import New from './Component/New/New'
import NewsLetter from './Component/Newletter.jsx/NewsLetter'
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <>
      <div className='bg-gray-100'>
        <Navbar />
        <About /> 
        <SignIn />   
        <Send />  
        <Download />
        <Let />  
        <New /> 
        <NewsLetter />
        <Footer />
      </div>
    </>
  )
}

export default App
