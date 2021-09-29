import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "../ui/layout/component/header/Header"
import Footer from "../ui/layout/component/footer/Footer"
import ItemListContainer from "../ui/section/components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "../ui/section/components/itemDetailContainer/ItemDetailContainer"

export const Routes = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/"/>
                    <Route exact path="/productos" component={ItemListContainer}/>
                    <Route exact path="/producto/detalle/:id" component={ItemDetailContainer}/>
                    <Route exact path="/productos/cat/:id" component={ItemDetailContainer}/>
                </Switch>
                <Footer/>
            </Router>
            
        </div>
    )
}
