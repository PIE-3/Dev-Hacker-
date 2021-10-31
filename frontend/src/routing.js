import { Switch, Route,  BrowserRouter  } from 'react-router-dom'
import MainPage from './Components/Main-Page/MainPage'
import Buy from './Components/Buy/buyData'

import Sell from './Components/Sell/Sell'
import Detail from './Components/Room-detail/Detail'
export default function Routing(){
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} ></Route>
                    <Route  path="/all-rooms"  component={Buy} ></Route>
                    <Route path="/get-details-of-owner" component={Sell}></Route>
                    <Route path="/product-1-detail" component={Detail}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}