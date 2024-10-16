import MotionNumber from "motion-number";
import { ComponentProps } from "react";

export function Timer() {
    const format: ComponentProps<typeof MotionNumber>["format"]={
        minimumIntegerDigits: 2,
    }
  return (
    <div className="bg-gray-400 font-mono flex text-3xl">
      <MotionNumber
        value={23}
        format={format}
      />
      <div>:</div>
      <MotionNumber
        value={0}
        format={format}
      />
    </div>
  );
}
