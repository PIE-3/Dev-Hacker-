import { Switch, Route,  BrowserRouter  } from 'react-router-dom'
import MainPage from './Components/Main-Page/MainPage'
import Buy from './Components/Buy/Buy'
import Sell from './Components/Sell/Sell'

export default function Routing(){
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} ></Route>
                    <Route  path="/all-rooms"  component={Buy} ></Route>
                    <Route path="/" component={Sell}> </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}