import MotionNumber from "motion-number";
import React, { ComponentProps, useEffect, useState } from "react";
const format: ComponentProps<typeof MotionNumber>["format"] = {
  minimumIntegerDigits: 2,
};
export function Timer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() =>{
        const interval = setInterval(() =>{
            setSeconds((prev)=> prev + 1);
            if( seconds === 59) {
                setSeconds(0);
                setMinutes((prev) => prev + 1);
            }
        }, 100)
        return () => clearInterval(interval);
    },[seconds])
  return (
    <div className="bg-gray-400 font-mono flex text-3xl">
      <MotionNumber value={minutes} format={format} />
      <div>:</div>
      <MotionNumber value={seconds} format={format} />
    </div>
  );
}
