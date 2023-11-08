import Image from "next/image";
import { LiaMonumentSolid } from "react-icons/lia";
export interface NftCardProps {
  index: number;
}

export default function NftCard(props: NftCardProps) {
  return (
    <div className="nftCard">
      <div className="nftCard--top">
        <p className="nftCard_country">TR</p>
        <LiaMonumentSolid size={25} />
      </div>
      <div className="nftCard--middle">
        <Image
          src="https://res.cloudinary.com/droheqpxn/image/upload/v1698676825/hefore/image_swovr7.png"
          width={240}
          height={180}
          alt="nft"
        />
      </div>
      <div className="nftCard--bottom">
        <div>
          <p className="nftCard_name">Trabzon Opera House</p>
          <p className="nftCard_owner">Hefore</p>
        </div>
        <button className="nftCard_button">BUY</button>
      </div>
    </div>
  );
}
