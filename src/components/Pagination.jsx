import React, {useEffect} from 'react';
import Proptypes from 'prop-types'
import './stylesheet/Pagination.css'
import usePagination from './usePagination';

export default function Pagination({articles}) {
 // const { items, handleItems, totalPages } = usePagination()

  // useEffect( () => {
  //   handleItems(articles);
  // }, [articles, handleItems])

  // const numbers = (
  //   for(let i=1; i<=totalPages; i++){
      
  //   }
  // )

  return (
    <div className='paginate-css'>
        {
          [1,2,3,4].map((value, key) => {
            return(
              <div className='page-numbers' key={key}>
                {value}
              </div>
            )
          } )
          
        }
    </div>
  )
}

Pagination.prototype = {
    articles: Proptypes.arrayOf(Proptypes.object),
}


