import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {BrowserRouter} from "react-router-dom";
// import {Route,Switch} from "react-router-dom";
import React from 'react'
import Header from './Header'
import Banner from './Banner';
import PageLoading from './PageLoading';
import ScrollTop from './ScrollTop';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import Parallex from './Parallex';
import ContactUs from './ContactUs';
import OurProjects from './OurProjects';
import Client from './Client';
import OurTeam from './OurTeam';
import Testimonial from './Testimonial';
import OurBlogs from './OurBlogs';
import Footer from './Footer';
import Cursor from './Cursor';
import ContactSectionFirst from './ContactSectionFirst';

function App() {
  return (
    <div>
      {/* <PageLoading/> */}
      {/* <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/src/AboutUs" component={AboutUs}></Route>
          <Route></Route>
        </Switch>
      </Router> */}
      {/* <Switch>
        <Route path='/' Component={AboutUs}/>
      </Switch> */}
      <Header/>
      <Banner/>
      {/* <AboutUs/> */}
      <OurServices/>
      <Parallex/>
      <OurProjects/>
      <Client/>
      <Testimonial/>
      <OurBlogs/>
      <Footer/>
      <Cursor/>
      {/* <ScrollTop/> */}
    </div>
  )
}

export default App