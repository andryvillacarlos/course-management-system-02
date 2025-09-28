import LandingPageLayout from "@/Layouts/LandingPageLayout";
import HeroSection from "./partial/HeroSection";
import KeyFeatures from "./partial/KeyFeauteres";
import AboutSection from "./partial/AboutSection";
import HowItWorks from "./partial/HowItWorks";
import WelcomeMessage from "./partial/WelcomeMessage";
const LandingPage = () => {
  return(
    <>
     <LandingPageLayout>
      <HeroSection/>
      <KeyFeatures/>
      <AboutSection/>
      <HowItWorks/>
      <WelcomeMessage/>
     </LandingPageLayout>
    </>
  );
}


export default LandingPage;