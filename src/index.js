//import 'todomvc-app-css/index.css';
import React from 'react';
import { createRoot } from "react-dom/client";
import Root from './containers/Root';
import loadData from './loadData';
import syncChanges from './syncChanges';
import configureStore from './store/configureStore';
const store = configureStore();


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>
);
loadData(store);
syncChanges(store);

