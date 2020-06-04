import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./RootReducer";

const store = createStore(rootReducer);

export default store;
