import {BrowserRouter, Routes, Route} from "react-router-dom"


// >> components
import Home from "./components/js/home/home";
import Loading from "./components/js/loading";
import Nav from "./components/js/nav/nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Loading />
        <Nav />
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
