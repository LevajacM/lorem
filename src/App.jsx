import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    const newCount = parseInt(e.target.value);
    setCount(newCount);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const paragraphs = data.slice(0, count);
    setText(paragraphs);
  };

  return (
    <div className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='count'>paragraphs:</label>
        <input
          type='number'
          id='count'
          value={count}
          name='count'
          onChange={handleChange}
          min={1}
          step={1}
          max={8}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </div>
  );
};
export default App;
