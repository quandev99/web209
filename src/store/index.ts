// import { counterReducer } from "@/reducer/CounterReducer";
// import { productReducer } from "@/reducer/ProductReducer";

// import thunk from "redux-thunk";
// import {
//   combineReducers,
//   legacy_createStore as createStore,
//   applyMiddleware,
//   compose,
// } from "redux";
// import { cartReducer } from "@/reducer/CartReducer";

// //
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk)
//   // other store enhancers if any
// );
// const rootReducer = combineReducers({
//   // counter: counterReducer,
//   // products: productReducer,
//   // carts: cartReducer,
// });

// const store = createStore(rootReducer, enhancer);

// export default store;

// // const rootReducer = combineReducers({
// //   counter: counterReducer,
// //   products: productReducer,
// // });
// // const store = createStore(rootReducer, applyMiddleware(thunk));
// // export default store;
