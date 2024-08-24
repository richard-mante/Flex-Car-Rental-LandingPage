import { ReactNode } from "react";
import mark from "../../assets/mark.svg";

interface FeatureProps {
  children: ReactNode;
}
export const Feature = ({ children }: FeatureProps) => {
  return (
    <div className="flex items-start gap-2">
      <img className="mt-2" src={mark} alt="mark" />
      {children}
    </div>
  );
};
