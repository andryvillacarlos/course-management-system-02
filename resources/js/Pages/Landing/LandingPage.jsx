import LandingPageLayout from "@/Layouts/LandingPageLayout";
import HeroSection from "./partial/HeroSection";
import KeyFeatures from "./partial/KeyFeauteres";
import AboutSection from "./partial/AboutSection";
import HowItWorks from "./partial/HowItWorks";
import WelcomeMessage from "./partial/WelcomeMessage";

function LandingPage(){
  return(
    <>
     <>
      <HeroSection/>
      <KeyFeatures/>
      <AboutSection/>
      <HowItWorks/>
      <WelcomeMessage/>
     </>
    </>
  );
}

LandingPage.layout = (page) => <LandingPageLayout children={page}/>

export default LandingPage;