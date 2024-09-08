import "./app.css";
import { Layout } from "./components/layout/layout.jsx";
import { RestaurantPage } from "./components/restaurant-page/restaurant-page.jsx";
import { ThemeContextProvider } from "./components/theme-context/theme-context-provider.jsx";
import { AuthorizationContextProvider } from "./components/authorization-context/authorization-context-provider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { LoaderContextProvider } from "./components/loader-context/loader-context.provider.jsx";

export const App = () => {
  return (
    <Provider store={store}>
      <LoaderContextProvider>
        <ThemeContextProvider>
          <AuthorizationContextProvider>
            <Layout>
              <RestaurantPage />
            </Layout>
          </AuthorizationContextProvider>
        </ThemeContextProvider>
      </LoaderContextProvider>
    </Provider>
  );
};
