import { createRoot } from 'react-dom/client';
import { restaurants } from '../materials/mock.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  restaurants.map(r => {
    return <div key={r.id}>
      <h1>{`${r.name}`}</h1>

      <h3>Меню</h3>
      <ul>
        {
          r.menu.map(m => {
            return <li key={m.id}>
              {m.name}
            </li>
          })
        }
      </ul>

      <h3>Отзывы</h3>
      <ul>
        {
          r.reviews.map(rv => {
            return <li key={rv.id}>
              {rv.text}
            </li>
          })
        }
      </ul>
    </div>
  })
);