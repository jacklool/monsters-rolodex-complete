import React from 'react';
import './search-box.styles.css'

export default function SearchBox({ 
  className,
  placeholder, 
  onChangeHandler = () => {} 
}) {
  return (
    <div>
        <input 
          className={`search-box ${className}`}
          type='search'
          placeholder={placeholder}
          onChange={(e) => onChangeHandler(e)}
        />
    </div>
  )
}
