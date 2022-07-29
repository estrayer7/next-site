import React from 'react'

const GitCard = ({repo}) => {
  return (
  <div className='max-w-sm rounded overflow-hidden shadow-lg grow basis-1/4'>
    <div className='px-6 py-4'>
      <div className='font-bold text-xl mb-2'>{repo.title}</div>
      <p className='text-base mb-3'>
        {repo.description}
      </p>
      <a href={repo.giturl} target='_blank' rel="noreferrer">Github Link</a><br></br>
      <a href={repo.url} target='_blank' rel="noreferrer">Website Link</a>
    </div>
    <div className='px-6 pt-4 pb-2'>
      {repo.tags.map((tag) => (
        <span key={tag} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{tag}</span>
      ))}
    </div>
  </div>
  )
}

export default GitCard