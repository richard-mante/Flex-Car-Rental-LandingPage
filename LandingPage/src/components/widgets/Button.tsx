interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "fill" | "outline" | "text";
}
const typeStyle = (type: string) => {
  switch (type) {
    case "fill":
      return "btn-primary";
    case "outline":
      return "btn-outline btn-primary";
    case "text":
      return "btn-text";
    default:
      return "btn-primary";
  }
};
export const Button = (props: Props) => {
  return (
    <button
      className={`btn rounded-xl px-8 text-base leading-none ${typeStyle(
        props.type || "fill"
      )}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
