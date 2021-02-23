
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import Amazon from './components/amazon'
import Flipkart from './components/flipkart'
import SnapDeal from './components/snapdeal'

function App() {
  return (
   <Router>
   <div className="App" >
     <Nav/>
     <Switch>
     <Route  path="/amazon" exact component={Amazon}/>
     <Route  path="/flipkart" exact component={Flipkart}/> 
     <Route  path="/snapdeal" exact component={SnapDeal}/>
     </Switch>
   </div>
 </Router>
  );
}

export default App;
