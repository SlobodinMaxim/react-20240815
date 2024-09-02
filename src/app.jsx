import "./app.css";
import { Layout } from "./components/layout/layout.jsx";
import { RestaurantPage } from "./components/restaurant-page/restaurant-page.jsx";
import { ThemeContextProvider } from "./components/theme-context/theme-context-provider.jsx";
import { UserContextProvider } from "./components/user-context/user-context-provider.jsx";

export const App = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <RestaurantPage />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
