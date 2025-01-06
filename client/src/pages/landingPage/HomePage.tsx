import CustomPage from "./CustomPage";
import Footer from "./Footer";
import HeroPage from "./HeroPage";
import Pricing from "./Pricing";
import SampleTicket from "./SampleTicket";
import SectionPage from "./SectionPage";

export function HomePage() {
  return (
    <>
      <HeroPage />   
      <SectionPage/>   
      <CustomPage/>            
      <SampleTicket/>
      <Pricing/>
      <Footer/>
    </>
  );
}
