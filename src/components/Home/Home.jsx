import React from 'react'
import Carousel from "../Carousel/Carousel";
import {slides} from "../data/carouselData.json"
import Categories from "../Categories/Categories";
import Grid from "../Grid/Grid";
import Statement from "../Statement/Statement";

function Home() {
    return (
        <div>
            <Carousel/>
            <Categories />
            <Grid />
            <Statement />
        </div>
    )
}

export default Home
