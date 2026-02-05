import { useState ,useRef ,useEffect} from 'react'
import { OTPGenerator } from './component/OtpGenerator'
import "./style/OTPGenerator.css";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <OTPGenerator/>
    </>
  )
}

export default App
