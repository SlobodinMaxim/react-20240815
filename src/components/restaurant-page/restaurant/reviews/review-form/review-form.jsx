import { Counter } from "../../../../couner/counter";
import { TextInput } from "../../../../text-input/text-input";
import { useReviewForm } from "./use-review-from";

export const ReviewForm = () => {
  const { clear, form, setName, setRating, setText } = useReviewForm();
  const { name, rating, text } = form;

  return (
    <div>
      <TextInput onChange={setName} title="Name" value={name} />

      <TextInput onChange={setText} title="Text" value={text} />

      <div>
        <span>Рейтинг</span>

        <Counter max={5} min={1} onChange={setRating} value={rating} />
      </div>

      <button onClick={clear}>Clear</button>
    </div>
  );
};
