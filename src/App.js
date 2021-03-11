import "./App.css";
import TopNav from "./components/TopNav";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TopNav />
      </div>
    </Provider>
  );
}

export default App;
