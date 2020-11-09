import React from 'react';
import ReactDOM from 'react-dom';
import k from '../test1';

function Features()
{
   return(
		<div>
			<h1>{k[0].Class1.English.Marigold.prelims}</h1>;
		</div>
   );
}

export default Features;


/*
return(
	<div>
	   <div className="features segments">
	<div className="container">
		<div className="row">
			<div className="col s4">
				<div className="content">
					<a href="books/1/1.html"><i className="fa bg-red">I</i><h5>Class I</h5></a>
				</div>
			</div>
			<div className="col s4">
				<div className="content">
					<i className="fa bg-red">II</i>
					<h5>Class II</h5>
				</div>
			</div>
			<div className="col s4">
				<div className="content">
					<i className="fa bg-red">III</i>
					<h5>Class III</h5>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col s4">
				<div className="content">
					<i className="fa bg-purple">IV</i>
					<h5>Class IV</h5>
				</div>
			</div>
			<div className="col s4">
				<div className="content">
					<i className="fa bg-purple">V</i>
					<h5>Class V</h5>
				</div>
			</div>
			<div className="col s4">
				<div className="content">
					<i className="fa bg-purple">VI</i>
					<h5>Class VI</h5>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col s4">
				<div className="content">
					<i className="fa bg-orange">VII</i>
					<h5>Class VII</h5>
				</div>
			</div>
			<div className="col s4">
				<div className="content">
					<i className="fa bg-orange">VIII</i>
					<h5>Class VIII</h5>
				</div>
			</div>
			<div className="col s4">
				<div className="content">
					<i className="fa bg-orange">IX</i>
					<h5>Class IX</h5>
				</div>
			</div>
			
		</div>
		<div className="row">
			<div className="col s4">
				<div className="content">
					<i className="fa bg-blue">X</i>
					<h5>Class X</h5>
				</div>
			</div>
			<div className="col s4">
				<div className="content">
					<i className="fa bg-blue">XI</i>
					<h5>Class XI</h5>
				</div>
			</div>
			<div className="col s4">
				<div className="content">
					<i className="fa bg-blue">XII</i>
					<h5>Class XII</h5>
				</div>
			</div>
		</div>
		</div>
			

	</div>
</div>
);
*/