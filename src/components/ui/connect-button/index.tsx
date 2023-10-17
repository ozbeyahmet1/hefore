import { FaWallet } from "react-icons/fa";
import Button from "../button";
export default function ConnectWallet() {
  return (
    <Button className="connectWallet">
      <p>Connect Wallet</p>
      <FaWallet size={30} />
    </Button>
  );
}
