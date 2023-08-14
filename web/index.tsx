import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./src/app";
import { store } from "./src/store/Users/index";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const app = document.getElementById("app");
const persistor = persistStore(store);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  app
);
