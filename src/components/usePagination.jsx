import {useState, useEffect} from 'react';
import { DATA_PER_PAGE } from '../Constants';

export default function usePagination() {
  const [ items, setitems ] = useState([]);
  const totalPages = (items?.length)/DATA_PER_PAGE;
  console.log(totalPages)
  const handleItems = (dataFromAPI) => {
    //const sliceData = dataFromAPI
    setitems()
  }
  return {
    items,
    handleItems,
    totalPages
  }
}
