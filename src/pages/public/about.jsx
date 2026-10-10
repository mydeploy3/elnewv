import Aboutdescription from "../../components/public/about/aboutdescription"
import AboutPictures from "../../components/public/about/aboutpictures"
import Aboutconventions from "../../components/public/about/aboutconventions"
import Navbar from "../../components/public/landing/navbar"
import LessonHeader from "../../components/public/lessons/lessonheader"
import Lessonsprefooter from "../../components/public/lessons/lessonsprefooter"
import Footer from "../../components/public/landing/footer"


const About = () => {
  return (
    <>
       {/* navbar */}
      <Navbar/>
      {/* LessonHeader */}
      <LessonHeader/>
      {/* AboutPictures */}
      <AboutPictures/>
      {/* Aboutdescription */}
      <Aboutdescription/>
      {/* Aboutconventions */}
      <Aboutconventions/>
      {/* Lessonsprefooter */}
      <Lessonsprefooter/>
      {/* Footer */}
      <Footer/>
    </>
  )
}

export default About