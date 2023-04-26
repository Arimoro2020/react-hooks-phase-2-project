
import Home from "./Home";
import Category from './Category.js';
import Source from './Source.js';
import Favorites from './Favorites.js';
import NavBar from './NavBar.js';
import {Route, Switch} from 'react-router-dom';
import DarkMode from './DarkMode';




function App() {

     

  return (<div>
           <NavBar /> <DarkMode />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/category"><Category /></Route>
            <Route path="/source"><Source /></Route>
            <Route path="/favorites"><Favorites /></Route>
          </Switch>
        </div>);
}

export default App;