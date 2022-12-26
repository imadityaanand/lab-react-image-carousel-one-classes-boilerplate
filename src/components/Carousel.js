import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

let num = 0;

// implement the class below
class Carousel extends Component {
    LeftClick(){
        if(num === 0){
            num = 3;
        } else {
            num--;
        }
        document.querySelector(".image-container").innerHTML = `
            <div class="text"><h1>${images[num].title}</h1></div>
            <div class="text"><p>${images[num].subtitle}</p></div>
            <img src="${images[num].img}"></img>
        `
    }
    RightClick(){
        if(num === 3){
            num = 0;
        } else {
            num++;
        }
        document.querySelector(".image-container").innerHTML = `
            <div class="text title"><h1>${images[num].title}</h1></div>
            <div class="text sub"><p>${images[num].subtitle}</p></div>
            <img src="${images[num].img}"></img>
        `
    }

    render(){
        return(
            <div className="main-container">
                <div onClick={()=>this.LeftClick()} className="left-arrow"><ArrowBackIosIcon /></div>
                <div className="image-container">
                    <div className="text title"><h1>{images[num].title}</h1></div>
                    <div className="text sub"><p>{images[num].subtitle}</p></div>
                    <img src={images[num].img}></img>
                </div>
                <div onClick={()=>this.RightClick()} className="right-arrow"><ArrowForwardIosIcon /></div>
            </div>
        )
    }
}

export default Carousel;