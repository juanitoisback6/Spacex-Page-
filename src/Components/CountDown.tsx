import { useEffect, useState } from "react";


 
interface element {

 date:string

}

export default function CountDown({date}:element){
 

          const [hours,setHours]= useState("");
          
 
interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
}
 
function getCountdown(targetDate: Date | string): CountdownTime {
  const targetTime = new Date(targetDate).getTime();
  const currentTime = new Date().getTime();
  const difference = targetTime - currentTime;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
  }

  const MS_PER_SECOND = 1000;
  const MS_PER_MINUTE = MS_PER_SECOND * 60;
  const MS_PER_HOUR = MS_PER_MINUTE * 60;
  const MS_PER_DAY = MS_PER_HOUR * 24;

  const days = Math.floor(difference / MS_PER_DAY);
  const hours = Math.floor((difference % MS_PER_DAY) / MS_PER_HOUR);
  const minutes = Math.floor((difference % MS_PER_HOUR) / MS_PER_MINUTE);
  const seconds = Math.floor((difference % MS_PER_MINUTE) / MS_PER_SECOND);

  return { days, hours, minutes, seconds, isFinished: false };
}
  

useEffect(()=>{

const intervalo = setInterval(() => {
 const target =  date ; //"2026-04-30T21:58:00";
const countdown = getCountdown(target);

if (!countdown.isFinished) {
  setHours(`${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`);
} else {
  clearInterval(intervalo);
  setHours("¡El tiempo ha terminado!");
  console.log("¡El tiempo ha terminado!");
}
    
}, 100);

return ()=>{clearInterval(intervalo)}

},[date])

 

          return(
           <>
                    <p> {hours} </p>
           </>
          );
}
