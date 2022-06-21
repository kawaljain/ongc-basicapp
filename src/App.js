import AddressUI from "./components/map-ui";
import UserAddress from "./components/user-address";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Add Address</header>
      
      <AddressUI />
      <UserAddress />
    </div>
  );
}

export default App;
