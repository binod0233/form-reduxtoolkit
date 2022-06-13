import React from "react";

import { Provider } from "react-redux";
import "./App.css";
import MainContainer from "./component/MainContainer";
import store from "./app/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </div>
  );
}

export default App;
