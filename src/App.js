import './App.css';

import React, { useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      
  <Routes>
    <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
    <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
    <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
    <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
    <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
    <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
    <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
    <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
  </Routes>


        </Router>
      </div>
    )
 
}

export default App;
// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './component/Navbar';
// import News from './component/News';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";




// export default class App extends Component {
//  pageSize = 6;
  
//   render() {
//     return (
//       <div>
//         <Router>
//         <Navbar/>
//         <Routes>
//         <Route exact path="/" element={<News key ="general" category="general" country="in" pageSize={this.pageSize} />} />
//         <Route exact path="/general" element={<News key ="general" category="general" country="in" pageSize={this.pageSize} />} />
//         <Route exact path="/business" element={<News key ="business" category="business" country="in" pageSize={this.pageSize} />} />
//         <Route exact path="/science" element={<News key ="science" category="science" country="in" pageSize={this.pageSize} />} />
//         <Route exact path="/sports" element={<News key ="sports" category="sports" country="in" pageSize={this.pageSize} />} />
//         <Route exact path="/health" element={<News key ="health" category="health" country="in" pageSize={this.pageSize} />} />
//         <Route exact path="/entertainment" element={<News key ="entertainment" category="entertainment" country="in" pageSize={this.pageSize} />} />
//         <Route exact path="/technology" element={<News key ="technology" category="technology" country="in" pageSize={this.pageSize} />} />
//       </Routes>
//         </Router>
//       </div>
//     )
//   }
// }


