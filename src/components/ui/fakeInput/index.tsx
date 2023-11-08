import { AiOutlineSearch } from "react-icons/ai";
import { RiCommandFill } from "react-icons/ri";

interface FakeInputProps {
  onClick: () => void;
}
export default function FakeInput({ onClick }: FakeInputProps) {
  return (
    <div className="inputComponent" onClick={onClick}>
      <AiOutlineSearch size={30} className="inputComponent_icon" />
      <p className="inputComponent_input">Search</p>
      <div className="inputComponent_button">
        <RiCommandFill size={16} />
      </div>
      <p className="inputComponent_button">k</p>
    </div>
  );
}
