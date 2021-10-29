
import { Switch, Route,  BrowserRouter  } from 'react-router-dom'
import MainPage from './Components/Main-Page/MainPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

       <Switch>
       <Route path="/" component={MainPage} ></Route>
       </Switch>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
