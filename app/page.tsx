import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";
import MouseGlow from "./components/effects/MouseGlow";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Waitlist />
      <Footer />
    </>
  );
}
