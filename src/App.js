import './App.css';
import Navbar from './components/navbar/Navbar.component';
import { Link,BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/pages/Home.component';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;

