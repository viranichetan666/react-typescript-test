import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "routes";
import { SocketProvider } from "helper/SocketProvider";

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SocketProvider>
          <BrowserRouter>
            {/* Main App Routing */}
            <Routes>
              <Route path="*" element={<AppRoutes />} />
            </Routes>
          </BrowserRouter>
        </SocketProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
