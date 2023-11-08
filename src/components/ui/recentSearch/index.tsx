import { BsClockHistory } from "react-icons/bs";

export interface RecentSearch {
  text: string;
}

export default function RecentSearch({ text }: RecentSearch) {
  return (
    <span className="recentSearch">
      <BsClockHistory color="grey" size={16} />
      <p>{text}</p>
    </span>
  );
}
