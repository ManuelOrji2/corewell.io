// import { useEffect, useRef} from "react";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import ResourceHub from "./components/ResourceHub/ResourceHub";


function App() {
  // const nav:any = useRef()

  // useEffect(() => {
  //   window.onscroll = () => {
  //     let top = window.scrollY;
  //     if (top >= 30) {
  //       nav.current.classList.add("active");
       
  //     } else {
  //       nav.current.classList.remove("active");
      
  //     }
  //   };
  // });
 
  return (
    <main className="flex flex-col items-center">
      <Nav  />
      <Hero/>
      <ResourceHub/>
    </main>
  );
}

export default App
