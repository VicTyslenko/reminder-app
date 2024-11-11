import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "App";
import { store, persistor } from "store/storage";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
