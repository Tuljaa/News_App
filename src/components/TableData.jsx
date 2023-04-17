import React from 'react';
import useTableData from './useTableData';
import Pagination from './Pagination';
import { THEAD_DATA, NO_DATA } from '../Constants';

export default function TableData() {
  const {articles} = useTableData();

  const headData = THEAD_DATA.map( (value, key) => {
    return( 
      <tr key={key}>
        <td> {value.name} </td>
        <td> {value.author} </td>
        <td> {value.description} </td>
        <td> {value.title} </td>
        <td> {value.publishedAt} </td>
        <td> {value.url} </td>
      </tr>
    );
  } )

  const bodyData = articles.map( (value, key) => {
    return(
      <tr key={key} >
        <td> { (value.source.name)? value.source.name : NO_DATA } </td>
        <td> { (value.author)? value.author : NO_DATA } </td>
        <td> { (value.description)? value.description : NO_DATA } </td>
        <td> { (value.title)? value.title : NO_DATA } </td>
        <td> { (value.publishedAt)? value.publishedAt : NO_DATA } </td>
        <td> { (value.url)? value.url : value.url } </td>
      </tr>
    )
  })

  return (
    <div className='table-paginate'>
      <table>
        <thead>{headData}</thead>
        <tbody>{bodyData}</tbody>
      </table>
      {
        articles && <Pagination articles={articles} />
      }
    </div>
  )
}
