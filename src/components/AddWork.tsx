import React, { useState } from 'react'
import '../App.css'
import { IState as Props } from '../App'

interface IProps {
  works: Props['works']
  setWorks: React.Dispatch<React.SetStateAction<Props['works']>>
}

const AddWork: React.FC<IProps> = ({ works, setWorks }) => {
  const [input, setInput] = useState({
    name: "",
    year: "",
    image: "",
    description: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if (
      !input.name ||
      !input.year ||
      !input.image
    ) {
      return
    }
    setWorks([
      {
        name: input.name,
        year: parseInt(input.year),
        url: input.image,
        description: input.description
      },
      ...works,
    ])

    setInput({
      name: "",
      year: "",
      image: "",
      description: ""
    })
  }

  return (
    <div className='form'>
      <input 
        className='form-input'
        type="text" 
        placeholder="Name"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input 
        className='form-input'
        type="number" 
        placeholder="Year"
        value={input.year}
        onChange={handleChange}
        name="year"
      />
      <input 
        className='form-input'
        type="text" 
        placeholder="Image URL"
        value={input.image}
        onChange={handleChange}
        name="image"
      />
      <textarea 
        className='form-textarea'
        placeholder="Description"
        rows={3}
        value={input.description}
        onChange={handleChange}
        name="description"
      />
      <button 
        className='form-button'
        onClick={handleClick}
      >
        Add Work
      </button>
    </div>
  )
}

export default AddWork