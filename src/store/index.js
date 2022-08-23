import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import todoReducer from './todoSlice';
import storage from 'redux-persist-indexeddb-storage';

// export default configureStore({
//     reducer: {
//         todos: todoReducer,
//     },
// });

const persistConfig = {
    key: 'root',
    storage: storage('myDB'),
}

const rootReducer = combineReducers({
    todos: todoReducer,
});

// const persistConfig = {
//     key: 'root',
//     storage,
// }

const persistedReducer = persistReducer(persistConfig, rootReducer);

// создается store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

//используем метод persiststore который импортировали и передаем store
export const persistor = persistStore(store);

//экспортируется наружу
export default store;


// const store = configureStore({
//     reducer: {
//         todos: todoReducer,
//     },
// });
// export default store;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;