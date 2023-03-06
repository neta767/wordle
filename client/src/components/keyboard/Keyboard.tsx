import { CharStatus } from "../../lib/types";
import { Key } from "./Key";
import React, { useEffect } from "react";

type Props = {
  onChar: (value: string) => void;
  onDelete: () => void;
  onEnter: () => void;

  isRevealing?: boolean;
  keysStatuses: { [key: string]: CharStatus };
};

export const Keyboard = React.memo(function Keyboard({
  onChar,
  onDelete,
  onEnter,
  isRevealing,
  keysStatuses,
}: Props) {
  const onClick = (value: string) => {
    if (value === "Enter") {
      onEnter();
    } else if (value === "Delete") {
      onDelete();
    } else {
      onChar(value);
    }
  };

  //useEffect because we want to listen when component finished to render
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        onEnter();
      } else if (e.code === "Backspace") {
        onDelete();
      } else {
        const key = e.key.toUpperCase();
        if (key.length === 1 && key >= "A" && key <= "Z") {
          onChar(key);
        }
      }
    };
    window.addEventListener("keyup", listener);
    //when component unmounts we remove the event to clean
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [onEnter, onDelete, onChar]);

  return (
    <div>
      <div className="mb-1 flex justify-center">
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={keysStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="mb-1 flex justify-center">
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={keysStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="Enter" onClick={onClick} />
        {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={keysStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={65.4} value="Delete" onClick={onClick} />
      </div>
    </div>
  );
});
