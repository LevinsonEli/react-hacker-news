import React from 'react'

import { useGlobalContext } from './context'
import Story from './Story';

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading)
    return <div className="loading"></div>
  else
    return (
      <section className='stories'>
        {hits.map((story) => {
          return <Story key={story.objectID} {...story} />;
        })}
      </section>
    );
}

export default Stories
