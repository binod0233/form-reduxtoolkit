import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import MainContainer from "./component/MainContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
