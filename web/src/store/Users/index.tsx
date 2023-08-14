import { GlobalState } from "./global-state.interface";
import { applyMiddleware, createStore } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import persistConfig from "../../../persistconfig";
import { persistStore, persistReducer } from "redux-persist";

const persistedReducer = persistReducer(persistConfig, reducer); // Importa tu configuración de persistencia

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const useGlobalSelector: TypedUseSelectorHook<GlobalState> = useSelector;
export type GlobalDispatch = typeof store.dispatch;
