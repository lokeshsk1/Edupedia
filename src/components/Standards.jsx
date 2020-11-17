import React from 'react';
import ReactDOM from 'react-dom';
import jo from '../urls';
import Bdy from './Bdy';
import Subjects from './Subjects';


function Standards(props)
{
    return(
        <div>
		   <div className="features segments">
                <div className="container">
                    <div className="row">
                        <div className="col s4">
                            <div className="content">
                                <a href="{jo.classes[0]}"><i className="fa bg-red">I</i>
                                <h5>Class I</h5></a>
                                {
                                    jo.classes[0].subjects.map((x)=>
                                    {
                                        <Subjects sbj={x} />
                                    })
                                }
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="content">
                                <a href="books/1/1.html"><i className="fa bg-red">II</i>
                                <h5>Class II</h5></a>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="content">
                                <a href="books/1/1.html"><i className="fa bg-red">III</i>
                                <h5>Class III</h5></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s4">
                            <div className="content">
                                <a href="books/1/1.html"><i className="fa bg-red">IV</i>
                                <h5>Class IV</h5></a>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="content">
                                <a href="books/1/1.html"><i className="fa bg-red">V</i>
                                <h5>Class V</h5></a>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="content">
                                <a href="books/1/1.html"><i className="fa bg-red">VI</i>
                                <h5>Class VI</h5></a>
                            </div>
                        </div>
                    </div>
                </div>
	        </div>
        </div>

    );
}

export default Standards;
