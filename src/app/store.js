import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/Product/fetchMovieSlice";
import serieReducer from "../features/Product/fetchShow";

// import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage";
import {
  // persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["verify, newProduct, products"],
  // whitelist: ["auth"],
};

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const allReducer = combineReducers({
  movies: moviesReducer,
  series: serieReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export default () => {

//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
//  export const Persistor = persistStore(store)

export default store;
