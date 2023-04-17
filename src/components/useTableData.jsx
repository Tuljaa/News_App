import {useState, useEffect} from 'react'

export default function useTableData() {
  const [ articles, setArticles ] = useState([]);
  const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=08e802a8c4474fdc91e3cab7604cbc13'
  useEffect( () => {
    fetch(url)
    .then( (response) => response.json()  )
    .then( (jsonresData) => setArticles(jsonresData.articles) )
    .catch( (error) => console.log(error));
  }, [] )
  return {
    articles
  };
}
