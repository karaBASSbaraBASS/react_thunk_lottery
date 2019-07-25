import React from 'react'

const DropdownItem = ({ children, click, position }) => {
  return (
    <li onClick={() => click(position)} className='select__dropdown-item'>
      {children}
    </li>
  )
}
export default DropdownItem;