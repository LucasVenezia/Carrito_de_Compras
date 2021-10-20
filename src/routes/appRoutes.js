import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "../ui/layout/component/header/Header"
import Footer from "../ui/layout/component/footer/Footer"
import ItemListContainer from "../ui/section/components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "../ui/section/components/itemDetailContainer/ItemDetailContainer"
import CartDetail from "../ui/section/components/cartWidget/CartDetail"
import Home from "../ui/section/components/home/home"
import ProviderCartContext from "../ui/layout/component/context/CartContext"
import { ErrorPage } from "../ui/section/components/Error404/Error404"


export const Routes = () => {
    
    return (
        <div>
            <Router>
                <ProviderCartContext>
                    <Header/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/productos" component={ItemListContainer}/>
                            <Route exact path="/producto/detalle/:id" component={ItemDetailContainer}/>
                            <Route exact path="/productos/:id" component={ItemListContainer}/>
                            <Route exact path="/carrito" component={CartDetail}/>
                            <Route exact path="/faq" component={ErrorPage} />
                            <Route exact path="/contacto" component={ErrorPage} />
                            <Route exact path="/logIn" component={ErrorPage} />
                        </Switch>
                    <Footer/>
                </ProviderCartContext>
            </Router>
            
        </div>
    )
}

