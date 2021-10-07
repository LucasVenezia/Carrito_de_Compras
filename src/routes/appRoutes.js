import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "../ui/layout/component/header/Header"
import Footer from "../ui/layout/component/footer/Footer"
import ItemListContainer from "../ui/section/components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "../ui/section/components/itemDetailContainer/ItemDetailContainer"
import CartDetail from "../ui/section/components/cartWidget/CartDetail"
import Home from "../ui/section/components/home/home"
import ProviderCartContext from "../ui/layout/component/context/CartContext"


export const Routes = () => {
    
    return (
        <div>
            <Router>
                <ProviderCartContext>
                    <Header/>
                        <Switch>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/productos" component={ItemListContainer}/>
                            <Route exact path="/producto/detalle/:id" component={ItemDetailContainer}/>
                            <Route exact path="/productos/:id" component={ItemListContainer}/>
                            <Route exact path="/carrito" component={CartDetail}/>
                        </Switch>
                    <Footer/>
                </ProviderCartContext>
            </Router>
            
        </div>
    )
}

