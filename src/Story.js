import React from 'react';

import { useGlobalContext } from './context';

const Story = ({ objectID, title, num_comments, url, points, author }) => {
  const { removeStory } = useGlobalContext();
  return (
    <article className='story'>
      <h4 className='title'>{title}</h4>
      <p className='info'>
        {points} points by <span>{author} | </span>
        {num_comments} comments
      </p>
      <div>
        <a
          href={url}
          className='read-link'
          target='_blank'
          rel='nooperner noreferrer'
        >
          read more
        </a>
        <button className='remove-btn' onClick={() => removeStory(objectID)}>
          remove
        </button>
      </div>
    </article>
  );
};

export default Story;
