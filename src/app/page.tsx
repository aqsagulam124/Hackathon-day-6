import FollowUs from "./Component/FollowUs";
import HeroSection from "./Component/HeroSection";
import MainPage from "./Component/MainPage";
import MobileNavbar from "./Component/MobilleNavbar";
import NewArrivals from "./Component/NewArrivals";
import OurBlogs from "./Component/OurBlogs";

export default async function Home() {
  return (
    <div>

      <div className="lg:hidden">
        <MobileNavbar />
      </div>

      <HeroSection />

      <MainPage />

      <NewArrivals />

      <OurBlogs />
      <FollowUs />


    </div>
  );
}
