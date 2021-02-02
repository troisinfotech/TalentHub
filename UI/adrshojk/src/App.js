import Footer from "./components/Footer";
import { Header } from "./components/Header";
// import { Login } from "./components/Login";
import Sidebar from "./components/profile/Sidebar";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Login/> */}
      <Sidebar/>
      <Footer/>


    </div>
  );
}

export default App;
