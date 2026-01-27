import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";
import ProjectsScroller from "@/components/ProjectsScroller";
import OurTeams from "@/components/OurTeams";
import ScheduleForm from "@/components/ScheduleForm";
import OurPortfolio from "@/components/OurPortfolio";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="relative">
        
        <HeroSection/>

        {/* About Us Section */}
        <AboutUs />
        {/* Banner Section */}
        <Banner />

        <ProjectsScroller/>
        <OurTeams />
        <ScheduleForm />
        <OurPortfolio/>
        <ContactUs/>
        <Footer/>
      </main>
    </div>
  );
}
