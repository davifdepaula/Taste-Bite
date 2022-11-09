import React from 'react'
import SearchItems from '../../searchItems'

function Dessert() {
  return (<div className='category'>   
    <h1>Sobremesas</h1>
    <SearchItems
      category = "dessert"
      />
  </div>
)
}

export default Dessert