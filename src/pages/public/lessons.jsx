import Navbar from "../../components/public/landing/navbar"
import Footer from "../../components/public/landing/footer"
import Lessonheader from "../../components/public/lessons/lessonheader"
import Lessonscards from "../../components/public/lessons/lessonscards"
import Lessonsection from "../../components/public/lessons/lessonsection"
import Lessonsprefooter from "../../components/public/lessons/lessonsprefooter"

const Lessons = () => {
  return (
    <>
          {/* navbar */}
          <Navbar/>
          {/* lessonsHeader */}
          <Lessonheader/>
          {/* Lessonsection */}
          <Lessonsection/>
          {/* Lessonscards */}
          <Lessonscards/>
          {/* Lessonsprefooter */}
          <Lessonsprefooter/>
          {/* Footer */}
          <Footer/>

          
    </>
  )
}

export default Lessons