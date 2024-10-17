import MotionNumber from "motion-number";
import { ComponentProps, useEffect, useState } from "react";
const format: ComponentProps<typeof MotionNumber>["format"] = {
  minimumIntegerDigits: 2,
};
export function Timer() {

  const currentime = new Date();
  const currentHour = currentime.getHours();
  const currentMinute = currentime.getMinutes();
  const currentSeconds = new Date().getSeconds();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
      if (seconds === 59) {
        setSeconds(0);
        setMinutes((prev) => prev + 1);
      }
      if (seconds === 59 && minutes === 59) {
        setMinutes(0);
        setHours((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);
  return (
    <div className="font-mono flex text-3xl font-bold">
      <MotionNumber value={currentHour} format={format} />
      <div>:</div>
      <MotionNumber value={currentMinute} format={format} />
      <div>:</div>
      <MotionNumber value={currentSeconds} format={format} />
    </div>
  );
}
