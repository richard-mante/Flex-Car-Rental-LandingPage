import { ReactNode } from "react";

interface TeamMemberProps {
  profimeImage: string;
  fullName: string;
  work: string;
  children: ReactNode;
}
const TeamMember = (props: TeamMemberProps) => {
  return (
    <div>
          <img src={props.profimeImage} alt="contributer profile" />
          
    </div>
  );
};

export default TeamMember;
