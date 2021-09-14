import "./App.scss";
import { Switch,Route } from 'react-router-dom'
//components
import Header from "./components/Header/Header";
//pages
import HomePage from "./pages/Home/HomePage";
import About from "./pages/Abou/About";
import Contact from "./pages/Contact/Contact";
import Work from "./pages/Work/Work";
import Writing from "./pages/Writing/Writing";
import HtmlCssProjects from "./pages/Html&CssProjects/Html&cssProjects";
import JavascriptProjects from "./pages/JavascriptProjects/JavascriptProjects";
import ReactProjects from "./pages/ReactProjects/ReactProjects";
function App() {
  return (
   <div className="app-wrapper">
     <Header/>
     <Switch>
       <Route path="/" component={HomePage} exact/>
       <Route path="/about" component={About} />
       <Route path="/work" component={Work} />
       <Route path="/writing" component={Writing} />
       <Route path="/contact" component={Contact} />
       <Route path="/html&css&projects" component={HtmlCssProjects} exact/>
       <Route path="/javascript&projects" component={JavascriptProjects}/>
       <Route path="/react&projects" component={ReactProjects}/>

       

     </Switch>


   </div>
     
  );
}

export default App;
