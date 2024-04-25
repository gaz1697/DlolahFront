import NavBar from '@/NavBar';
import voiceInputAnimation from '../../Animation - 1711499666786.json'
import Lottie from 'lottie-react'
const RootLayout = () => {
  var x = <Lottie animationData={voiceInputAnimation} loop={true}/>;
  return (
    <div>
        <div>root layout</div>
        <NavBar></NavBar>
        {x}



    </div>
  )
}

export default RootLayout