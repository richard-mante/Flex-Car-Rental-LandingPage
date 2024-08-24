import { ReactNode } from "react";

interface TestimonialProps {
  authorName: string;
  autherOccupation: string;
  autherProfile: string;
  children: ReactNode;
}
export const Testimonial = ({
  children,
  autherOccupation,
  authorName,
  autherProfile,
}: TestimonialProps) => {
  return (
    <div className="border-2 w-full md:max-w-box lg:max-w-box-large border-solid border-slate-50 rounded-2xl p-6">
      <p className="text-slate-600"> {children}</p>
      <div className="flex gap-2 items-center mt-8">
        <img
          src={autherProfile}
          alt="auther profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-slate-600">{authorName}</p>
          <p className="text-slate-400">{autherOccupation}</p>
        </div>
      </div>
    </div>
  );
};
