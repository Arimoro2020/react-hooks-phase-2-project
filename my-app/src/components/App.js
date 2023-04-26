
import Home from "./Home";
import Arts from './Arts.js';
import Business from './Business.js';
import Health from './Health.js';
import World from './World.js';
import Favorites from './Favorites.js';
import NavBar from './NavBar.js';
import {Route, Switch} from 'react-router-dom';
import DarkMode from './DarkMode';




function App() {

     

  return (<div>
           <NavBar /> <DarkMode />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/arts"><Arts /></Route>
            <Route path="/business"><Business /></Route>
            <Route path="/health"><Health /></Route>
            <Route path="/world"><World /></Route>
            <Route path="/favorites"><Favorites /></Route>
          </Switch>
        </div>);
}

export default App;