import Banner from "@/containers/banner";
import Banner2 from "@/containers/banner2";
import Banner3 from "@/containers/banner3";
import Banner4 from "@/containers/banner4";
import Banner5 from "@/containers/banner5";
import CardCarousel from "@/containers/cardCarousel";
import Footer from "@/layouts/footer";
import Navbar from "@/layouts/navbar";
import Orbit from "@/layouts/orbit";
import { HomepageData } from "@/types/homepage";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Orbit />
      <main className="container homepage">
        <Banner data={HomepageData.banner} />
        <CardCarousel />
        <Banner2 data={HomepageData.banner2} />
        <Banner3 data={HomepageData.banner3} />
        <Banner4 data={HomepageData.banner4} />
        <Banner5 data={HomepageData.banner5} />
      </main>
      <Footer />
    </div>
  );
}
