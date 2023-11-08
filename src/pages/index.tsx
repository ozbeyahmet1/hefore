import SearchModal from "@/components/searchModal";
import Banner from "@/containers/banner";
import Banner5 from "@/containers/banner5";
import BannerX from "@/containers/bannerPoly";
import CardCarousel from "@/containers/cardCarousel";
import { HomepageData } from "@/data/homepage";
import Footer from "@/layouts/footer";
import Navbar from "@/layouts/navbar";
import Orbit from "@/layouts/orbit";
import { toggleSearchModal } from "@/store/state";
import { useSelector } from "react-redux";
export default function Home() {
  const searchModal = useSelector(toggleSearchModal);
  console.log(searchModal);
  return (
    <div>
      <Navbar />
      <Orbit />
      <main className="container homepage">
        <Banner data={HomepageData.banner} />
        <CardCarousel />
        <BannerX data={{ data: HomepageData.banner2 }} flexDirection="row" />
        <BannerX data={{ data: HomepageData.banner3 }} flexDirection="reverse" />
        <BannerX data={{ data: HomepageData.banner4 }} flexDirection="row" />
        <Banner5 data={HomepageData.banner5} />
        {searchModal && <SearchModal />}
      </main>
      <Footer />
    </div>
  );
}
