import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Game from './Pages/Game/Game';

function App() {
  return (
    <Switch>
        <Route path="/game">
          <Game/>
        </Route>
        <Redirect to="/game"/>
    </Switch>
  );
}

export default App;
