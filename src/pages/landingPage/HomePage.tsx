import CustomPage from "./CustomPage";
import Footer from "./Footer";
import HeroPage from "./HeroPage";
import Pricing from "./Pricing";
import SectionPage from "./SectionPage";

export function HomePage() {
  return (
    <>
      <HeroPage />
      <CustomPage/>
      <SectionPage/>
      <Pricing/>
      <Footer/>
    </>
  );
}
