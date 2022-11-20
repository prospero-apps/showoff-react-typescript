import React from 'react'
import '../App.css'
import { IState as IProps } from '../App'

const List: React.FC<IProps> = ({ works }) => {
  const renderList = (): JSX.Element[] => {
    return works.map((work) => {
      return (
        <li className='list-item'>
          <img className='list-image' src={work.url} alt={work.name} />
          <h3 className='list-name'>{work.name}</h3>
          <p className='list-year'>created in {work.year}</p>
          <p className='list-description'>{work.description}</p>
        </li>
      )
    })
  }

  return (
    <ul className='list'>
      {renderList()}
    </ul>
  )
}

export default List