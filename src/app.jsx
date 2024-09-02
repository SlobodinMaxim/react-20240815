import "./app.css";
import { Layout } from "./components/layout/layout.jsx";
import { RestaurantPage } from "./components/restaurant-page/restaurant-page.jsx";
import { ThemeContextProvider } from "./components/theme-context/theme-context-provider.jsx";
import { AuthorizationContextProvider } from "./components/authorization-context/authorization-context-provider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthorizationContextProvider>
          <Layout>
            <RestaurantPage />
          </Layout>
        </AuthorizationContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
