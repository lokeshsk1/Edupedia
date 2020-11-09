import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

function Slide()
{
    return(
        <div className="container">
		<div className="slide">
			<div className="slider-slide owl-carousel owl-theme">
				<div className="content">
					<div className="mask-red"></div>
					<img src="images/slider1.jpg" alt="" />
					<div className="slider-caption">
						<h2>WELCOME TO NCERT PREP</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elite. Neque, iusto.</p>
					</div>
				</div>
				<div className="content">
					<div className="mask-blue"></div>
					<img src="images/slider2.jpg" alt="" />
					<div className="slider-caption">
						<h2>ALL BOOKS IN ONE APP</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elite. Neque, iusto.</p>
					</div>
				</div>
				<div className="content">
					<div className="mask-purple"></div>
					<img src="images/slider3.jpg" alt="" />
					<div className="slider-caption">
						<h2>LEARNING MORE FUN</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elite. Neque, iusto.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
}

export default Slide;
