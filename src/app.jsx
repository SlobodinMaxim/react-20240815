import { restaurants } from "../materials/mock.js";

import { Layout } from "./components/layout/layout.jsx";
import { Restaurant } from "./components/restaurant/restaurant.jsx";
import { Tabs } from "./components/tabs/tabs.jsx";

export const App = () => {
  return (
    <>
      <Layout>
        <Tabs>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              name={restaurant.name}
              restaurant={restaurant}
            />
          ))}
        </Tabs>
      </Layout>
    </>
  );
};
