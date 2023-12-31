import { useEffect, useState } from "react";
import { Billing, Business, CTA, CardDeal, Clients, Footer, Hero, Navbar, Stats, Testimonials } from "./components";
import styles from "./style";
const App = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

   useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, []);

  return (
      <div className="bg-primary  w-full overflow-hidden relative ">
      <div className={`z-40 w-full fixed top-0 inset-x-0   transition-all  duration-[1000ms]  ease-in   ${styles.paddingX} ${styles.flexCenter} ${active ? ` bg-slate-800` : null}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
      </div>
  )
};

export default App;