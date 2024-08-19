import { createRoot } from 'react-dom/client';
import { restaurants } from '../materials/mock.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  restaurants.map(restaurant => {
    return <div key={restaurant.id}>
      <h2>{`${restaurant.name}`}</h2>

      <h3>Меню</h3>
      <ul>
        {
          restaurant.menu.map(menu => {
            return <li key={menu.id}>
              {menu.name}
            </li>
          })
        }
      </ul>

      <h3>Отзывы</h3>
      <ul>
        {
          restaurant.reviews.map(review => {
            return <li key={review.id}>
              {review.text}
            </li>
          })
        }
      </ul>
    </div>
  })
);