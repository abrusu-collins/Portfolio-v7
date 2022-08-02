import {BrowserRouter,Switch,Route} from "ReactRouterDOM";
import "../styles/style.css";
import NavBar from "./components/navbar";

//Pages
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};

function App() {
  return (
    <>
     
    <BrowserRouter>
     <NavBar />

     <div className="pages">
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/blog" component={Blog} />
         <Route path="/contact" component={Contact} />
       </Switch>
     </div>
   </BrowserRouter>
 </>

  );
}

export default App;
