import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
// import WithRestroService from '../hoc'
import {Route, Switch} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {

    // RestoService.getMenuItems() // из пропосв App
    //     .then(menu => console.log(menu))
    //     .catch(() => console.log("Незачем, но пусть будет"))

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route className="header__link" exact path="/menu" component={MainPage}/>
                <Route className="header__link" path="/cart" component={CartPage}/>
                <Route className="header__link" path = '/menu/:id' component ={ItemPage}/>
            </Switch>
        </div>
    )
}
export default App;
// export default  WithRestroService()(App); // App передается в качестве wrappera, чтобы всеп обернуть в контекст