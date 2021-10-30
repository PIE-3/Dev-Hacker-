
import { Switch, Route,  BrowserRouter  } from 'react-router-dom'
import MainPage from './Components/Main-Page/MainPage'
import Buy from './Components/Buy/Buy'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

       <Switch>
       <Route path="/" component={Buy} ></Route>
       </Switch>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
