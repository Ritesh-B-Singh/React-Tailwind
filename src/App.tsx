import BackgroundImages from './components/BackgroundImages'
import CourseDetails from './components/CourseDetails'
import HeaderContent from './components/HeaderContent'
import Navbar from './components/Navbar'
import ChooseYourPlan from './components/ChooseYourPlan'
import CustomerReviews from './components/CustomerReviews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <main>
        <div className="relative">
          <Navbar />
          <BackgroundImages />
          <HeaderContent />
          <CourseDetails />
        </div>
        <div className="relative z-50 top-[1250px]">
          <ChooseYourPlan />
          <CustomerReviews />
          <Footer />          
        </div>
      </main>
    </div>
  )
}

export default App
