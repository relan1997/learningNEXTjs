import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUse from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Insrtuctors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>  {/* these are the children that will be passed into the layout and get set exactly the way they are stacked in page */}
    <FeaturedCourses/>
    <WhyChooseUse/>  {/* all the components that are not to displayed on every route will be added to the page and also the components that will not be part of every section and need a structured layout will also be needed to be added in page */}
    <TestimonialCards/>
    <UpcomingWebinars/>
    <Insrtuctors/>
    <Footer />
   </main>
  );
}
