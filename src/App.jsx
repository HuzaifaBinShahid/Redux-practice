import CakeShop from "./components/CakeShop";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamShop from "./components/IceCreamShop";
import NewCakeContainer from "./components/NewCakeContainer";
import store from "./redux/store";
import ItemContainer from "./components/ItemContainer";
import Users from "./components/Users";


import  {Provider}  from "react-redux";

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
      <Users />
      <ItemContainer cake />
      <ItemContainer />
      <HooksCakeContainer />
      <CakeShop />
      <IceCreamShop/>
      <NewCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
