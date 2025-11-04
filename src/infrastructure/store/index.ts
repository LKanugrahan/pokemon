import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { Api, PokemonApi } from "infrastructure/services/api";
import auth from "./auth";
import users from "./users";
import pokemon from "./pokemon";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  auth,
  users,
  pokemon,
  [Api.reducerPath]: Api.reducer,
  [PokemonApi.reducerPath]: PokemonApi.reducer,
});

const persistConfig = {
  key: "pokemonstore",
  storage,
  whitelist: ["auth", "users","pokemon"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(Api.middleware)
      .concat(PokemonApi.middleware);

    return middlewares;
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof reducers>;
export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { store, persistor };
