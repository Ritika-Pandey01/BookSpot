import React from "react"
import "../index.css";
import DemoCarousel from "../Products/LandingCorousel";
import CarouselBar from "../Products/LineCarousel";
import Products from "../Products/Products";
import Header from "./Header";
const Home=()=>{
    return(<>
        <Header/>
        <DemoCarousel />
          <CarouselBar />
          <Products />
    </>);
}
export default Home;