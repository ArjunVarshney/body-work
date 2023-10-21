import Footer from "../ui/Footer.tsx";
import Navbar from "../ui/Navbar.tsx";
import { Link } from "react-router-dom";

function Hero() {
    return (
      <>
        <Navbar/>
        <div className="pt-16 pr-0 pl-0 pb-8">
            <div className="max-w-7xl my-0 mx-auto py-0 px-3.5 grid grid-cols-2 items-center gap-24">
                <div className="px-4">
                    <h1 className="text-[5.5rem] cursor-pointer font-rubik bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-500 transition-all duration-700 font-extrabold mb-6 decoration-pink-500">Body Works</h1>
                    <p className="text-white hover:text-pink-500 transition-all duration-300 font-poppins text-xl opacity-70 leading-10">Are you lagging to find the best exercises for your muscles ?</p>
                    <p className="text-white hover:text-pink-500 transition-all font-poppins text-xl opacity-70 leading-10 decoration-inherit">Now your wait is over with BodyWorks! </p>
                    <p className="text-white hover:text-pink-500 transition-all font-poppins text-xl opacity-70 leading-10 mb-16">Build your muscles with your favourite exercises!</p>
                    <Link to={"/exercises"} className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-pink-600 to-violet-500 group-hover:from-pink-600 group-hover:to-violet-500 absolute"></span>
                        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">Explore Now</span>
                        </span>
                    </Link>
                </div>
                <div>
                    <img src="/silhouette-basketball-player-holding-ball-black-background.jpg" alt={"strong-man-fence-with-dumbbell"} className={"h-full w-full bg-black z-10 rounded "}/>
                </div>
            </div>
        </div>
      <Footer/>
      </>

    );
}

export default Hero;
