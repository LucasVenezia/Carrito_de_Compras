import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "../../../layout/component/header/Header"
import Footer from "../../../layout/component/footer/Footer"
import ItemListContainer from "../itemListContainer/ItemListContainer"
import ItemDetailContainer from "../itemDetailContainer/ItemDetailContainer"

export const Routes = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/"/>
                    <Route exact path="/productos" component={ItemListContainer}/>
                    <Route exact path="/producto/detalle/:id" component={ItemDetailContainer}/>
                </Switch>
                <Footer/>
            </Router>
            
        </div>
    )
}

