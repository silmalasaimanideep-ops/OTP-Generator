import { useState, useEffect, useRef } from "react";

export const OTPGenerator = () => {
  const [otp,setOtp]=useState("")
  const [timeLeft,setTimeLeft] = useState(0)
  const timeRef = useRef(null)

const createOtp=()=>{

  let OTP= "";
  const pass ="1234567890"
  for(let i= 0 ; i<6 ;i++){
    const randomIndex = Math.floor(Math.random() * pass.length)
    OTP+=pass[randomIndex]
}
setOtp(OTP);
setTimeLeft(10);
};

useEffect(()=>{
  if(timeLeft==0){
    clearInterval(timeRef.current)
    return;
  }
  timeRef.current=setInterval(()=>{
    setTimeLeft((prev)=>prev-1)
  },1000);
  return ()=> clearInterval(timeRef.current)
},[timeLeft])

  return(
    <div className="container">
    <h1 id="otp-title">OTP Generator</h1>
    <h2  id = "otp-display">{otp ? otp :"Click 'Generate OTP' to get a code"}</h2>
    <p id="otp-timer" aria-live="assertive">{timeLeft > 0 && `Expires in: ${timeLeft} seconds`}{timeLeft==0 && otp && "OTP expired. Click the button to generate a new OTP."}</p>
    <button id= "generate-otp-button" onClick = {createOtp} disabled={timeLeft > 0}>Generate OTP</button>
    </div>
    
  )
};