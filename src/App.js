import './App.css';
import Navbar from './components/navbar/Navbar.component';
import { Link,BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/pages/Home.component';
import Services from './components/pages/Services.component';
import Products from './components/pages/Products.component';
import SignUp from './components/pages/Sign-up.component';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/services" exact component={Services}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;

