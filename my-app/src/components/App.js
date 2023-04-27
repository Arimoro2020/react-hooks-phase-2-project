
import Home from "./Home";
import Arts from './Arts.js';
import Business from './Business.js';
import Health from './Health.js';
import World from './World.js';
import Favorites from './Favorites.js';
import NavBar from './NavBar.js';
import { useState, useEffect} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import DarkMode from './DarkMode';



const apiKey = `tCiVgagD00AfGyGIE6MIdt8DFubW1hgU`


function App() {
 

     
 const [topHeadlines, setTopHeadlines] = useState([])

 let location =useLocation()

 const baseUrl = `https://api.nytimes.com/svc/topstories/v2`
 let newsUrl = baseUrl + `/${location.pathname}.json?api-key=${apiKey}`


const fetchTopHeadlines = () => {
   fetch(newsUrl)
   .then(res => res.json())
   .then(headlinesData=>setTopHeadlines(headlinesData.results))
   .catch(error=>console.log(error))

}
   console.log(topHeadlines)
//    
 useEffect(fetchTopHeadlines, []) 

  return (
           <div>
           <NavBar /> <DarkMode />
          <Switch>
            <Route exact path="/home"><Home location={location} topHeadlines={topHeadlines}/></Route>
            <Route path="/arts"><Arts  location={location} topHeadlines={topHeadlines}/></Route>
            <Route path="/business"><Business location={location} topHeadlines={topHeadlines}/></Route>
            <Route path="/health"><Health location={location} topHeadlines={topHeadlines}/></Route>
            <Route path="/world"><World location={location} topHeadlines={topHeadlines}/></Route>
            <Route path="/favorites"><Favorites location={location} topHeadlines={topHeadlines}/></Route>
            </Switch>
            </div>)
            
}
      
export default App;