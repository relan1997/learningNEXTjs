import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <HeroSection/>  {/* these are the children that will be passed into the layout and get set exactly the way they are stacked in page */}
     <FeaturedCourses/>
   </main>
  );
}
