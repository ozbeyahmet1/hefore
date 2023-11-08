import { useLocalStorage } from "@/hooks/useLocalStorage";
import useClickOutside from "@/hooks/usesClickOutside";
import { closeSearchModal } from "@/store/slices/uiSlice";
import Image from "next/image";
import { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { useDispatch } from "react-redux";
export default function SearchModal() {
  const [searchText, setSearchText] = useState("");
  const [recentSearchs, setRecentSearchs] = useLocalStorage<Array<string>>("recentSearchs", []);
  const addSearch = (addedValue: string) => {
    setRecentSearchs((prevArray) => [...prevArray, addedValue]);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const dispatch = useDispatch();
  const openSearchModalFunc = () => dispatch(closeSearchModal());
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef.current, () => {
    openSearchModalFunc();
  });
  return (
    <div className="searchModal">
      <div className="searchModal_block container bounceIn" ref={dropdownRef}>
        <div className="searchModal--top">
          <AiOutlineSearch size={25} color="white" />
          <input type="text" placeholder="Search" value={searchText} onChange={handleInputChange} />
        </div>
        <div className="searchModal--middle">
          {searchText.length > 0 ? (
            <div className="searchModal_nftsWrapper">
              <div className="searchModal_nft">
                <Image
                  src="https://res.cloudinary.com/droheqpxn/image/upload/v1698676825/hefore/image_swovr7.png"
                  width={160}
                  height={100}
                  alt="nft"
                />
                <div>
                  <h3 className="searchModal_nftHeadline">Trabzon Opera House</h3>
                  <h4 className="searchModal_nftCreator">Hefore</h4>
                  <span className="searchModal_price">
                    <Image
                      src="https://res.cloudinary.com/droheqpxn/image/upload/v1646281827/hefore/hefore_1_pjkipc.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <p>200</p>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="searchModal_recentHeadline">Recent Searches</p>
              <span className="searchModal_recent" onClick={() => addSearch("a")}>
                <BsClockHistory color="grey" size={16} />
                <p>Example Search</p>
              </span>
              <span className="searchModal_recent">
                <BsClockHistory color="grey" size={16} />
                <p>Example Search</p>
              </span>
              <span className="searchModal_recent">
                <BsClockHistory color="grey" size={16} />
                <p>Example Search</p>
              </span>
            </div>
          )}
        </div>
        <div className="searchModal--bottom"></div>
      </div>
    </div>
  );
}
