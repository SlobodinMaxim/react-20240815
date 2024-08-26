import { Layout } from "./components/layout/layout.jsx";
import { RestaurantPage } from "./components/restaurant-page/restaurant-page.jsx";

import "./app.css";

export const App = () => {
  return (
    <Layout>
      <RestaurantPage />
    </Layout>
  );
};
