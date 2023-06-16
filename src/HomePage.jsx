import Brands from "./Brands";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Influencers from "./Influencers";
import IntroSection from "./IntroSection";
import Resources from "./Resources";
import WhyInfluenceAI from "./WhyInfluenceAI";

const HomePage = () => {
  return (
    <>
      {/* <div>
        <video>
          <source
            src="https://images-tv.adobe.com/mpcv3/1041/66230c24-a02b-4dc8-beb5-4dd1b604f90c_1685643767.1920x1080at3000_h264.mp4"
            type="video/mp4"
          />
        </video>
      </div> */}
      <IntroSection />
      <Brands />
      <Influencers />
      <WhyInfluenceAI />
      <Resources />
      <ContactForm />
      <Footer />
    </>
  );
};

export default HomePage;
