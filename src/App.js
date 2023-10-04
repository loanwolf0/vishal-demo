import Header from "./components/Header/Header";
import HeroPic from "./components/HeroPic/HeroPic";
import StyleBox from "./components/Styles/StyleBox";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div >
        <Header/>
        <div className="relative w-full">
          <Hero customClass="h-screen" />
          <div className="absolute h-[100%] w-[100%] bottom-0 left-0 flex items-end justify-between">
            <StyleBox dynamicClass="h-[20%] w-[20%] md:h-[25%] md:w-[18%] rounded-b-[150px] max-w-[500px] bg-[rgb(17,51,73)] p-4" />
            <StyleBox dynamicClass="h-[30%] w-[25%] md:h-[35%] md:w-[22%] rounded-t-[150px] max-w-[500px] bg-white p-4" />
            <StyleBox dynamicClass="h-[35%] w-[30%] md:h-[55%] md:w-[25%] rounded-b-[150px] max-w-[500px] bg-[rgb(17,51,73)] p-4" />
            <StyleBox dynamicClass="h-[50%] w-[30%] md:h-[80%] md:w-[26%] rounded-t-[150px] max-w-[500px] bg-white p-4" />
          </div>
          <div className="absolute bottom-0 right-0 flex items-end justify-end h-[40%] w-[50%] md:h-[70%] md:w-[50%]">
            <HeroPic />
          </div>
        </div>
    </div>
    
  );
}

export default App;
