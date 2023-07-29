import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./app/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <ProductProvider>
  //   <CounterProvider>
  //     <App />
  //   </CounterProvider>
  // </ProductProvider>

  <Provider store={store}>
    <App></App>
  </Provider>
);
