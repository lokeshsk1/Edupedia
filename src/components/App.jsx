import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
// import Sidebarpanel from './Sidebarpanel';
import Features from './Features'
// import Slide from './Slide'

function App()
{
    return(
        <div>
           <Navbar />
           <div>
               <br/>
               <br/>
               <br/>
           </div>
           <Features />
           <Footer />
        </div>
    );
}

export default App;
