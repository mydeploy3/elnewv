import AboutUs from "../../components/public/landing/aboutUs";
import CardSection from "../../components/public/landing/cardSection";
import Footer from "../../components/public/landing/footer";
import Hero from "../../components/public/landing/hero";
import IconSection from "../../components/public/landing/iconSection";
import Landingcards from "../../components/public/landing/landinganimatedcards";
import Navbar from "../../components/public/landing/navbar";
import Section from "../../components/public/landing/section";
import Stat from "../../components/public/landing/stat";

const Landing = () => {
    return (
        <>
            {/* navbar */}
            <Navbar />
            {/* Hero */}
            <Hero />
            {/* section */}
            <Section />
            {/* Stat */}
            <Stat />
            {/* card section */}
            <CardSection />
            {/* Icon Section */}
            <IconSection />
            {/* Landingcards */}
            <Landingcards/>
            {/* AboutUs */}
            <AboutUs/>
            {/* footer */}
            <Footer />
        </>
    );
}

export default Landing;