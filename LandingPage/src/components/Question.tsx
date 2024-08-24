import { useState } from "react";
import add from "../assets/add.svg";
import remove from "../assets/remove.svg";

interface QuestionProps {
  question: string;
  answer: string;
}

export const Question = ({ question, answer }: QuestionProps) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div
      className="rounded-xl bg-slate-100 p-6 w-full transition duration-150 ease-out "
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className="w-full flex justify-between items-center">
        <p className="text-lg font-semibold text-slate-600">{question}</p>
        <img src={isClicked ? remove : add} alt="toggle button" className="cursor-pointer"/>
      </div>
      <p
        className={`text-slate-500 ${
          isClicked
            ? "h-0 overflow-hidden opacity-0 pt-0 w-0"
            : "h-auto pt-4 w-full opacity-100"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};
