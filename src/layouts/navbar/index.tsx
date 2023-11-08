import Button from "@/components/ui/button";
import ConnectWallet from "@/components/ui/connect-button";
import FakeInput from "@/components/ui/fakeInput";
import { openSearchModal } from "@/store/slices/uiSlice";
import Image from "next/image";
import { RiMenu3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import navbarData from "../../data/navbar.json";

export default function Navbar() {
  const dispatch = useDispatch();
  const openSearchModalFunc = () => dispatch(openSearchModal());

  return (
    <header className="header">
      <div className="container">
        <Image alt={navbarData.logo.alt} src={navbarData.logo.src} width={50} height={50} />
        <div className="header_inline">
          <nav className="header_nav">
            {navbarData.items.map((item, key) => {
              return (
                <Button key={key} className="header_button" as="a" href={item.path}>
                  {item.content}
                </Button>
              );
            })}
          </nav>
          <div className="header--right">
            <FakeInput onClick={openSearchModalFunc} />
            <ConnectWallet />
            <RiMenu3Line size={30} className="header_menu" />
          </div>
        </div>
      </div>
    </header>
  );
}
