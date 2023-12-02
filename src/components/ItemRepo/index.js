import React from 'react'
import { ItemContainer } from './styles'

function ItemRepo({repository, handleRemoveRepo}) {
  const handleRemove = () =>{
    handleRemoveRepo(repository.id)
  }
  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repository?.full_name}</h3>
      <p>{repository.name}</p>
      <div className='links'>
        <a href={repository.html_url} target="_blank" rel="noreferrer">Ver repo</a>
        <a href="#" className='remover'>Remover</a>
      </div>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;