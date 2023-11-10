// Acá se configura el store 
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
// permite almacenar los valores de manera local
import storage from "redux-persist/lib/storage";
// multiples reducers
import { combineReducers } from "@reduxjs/toolkit";
// para almacenar reducers
import { persistReducer } from "redux-persist";
// midleware que comunica toolkit con persist
import thunk from "redux-thunk";

const persistConfig = {
    //key es el name para almacenar local, storage es la lib que se encargar de almacenar
    // whitelist es un array de reducers que queremos guardar
    key: 'root', 
    storage,
    whitelist:['counterState']
}

// obj que almacena los reducers a persistir
const rootReducer = combineReducers({
    counterState: counterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer) 

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})