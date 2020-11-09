import React from 'react';
import ReactDOM from 'react-dom';

function Navbar()
{
    return(
        <div>
            <div className="navbar">
            <div className="container">
                <div className="row">
                    <div className="col s6">
                        <div className="content-left">
                            <a href="index.html">
                                <h1>
                                    <span className="color-indigo1">NCERT</span><span className="color-indigo3">PREP</span>
                                </h1>
                            </a>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="content-right">
                            <a href="#slide-out" dataActivates="slide-out" className="sidebar"><i className="fa fa-bars"></i></a>
                        </div>
                    </div>
                </div>
            </div>
	</div>
        </div>
    );
}

export default Navbar;
