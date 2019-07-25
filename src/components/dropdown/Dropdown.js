import React from 'react'
import Arrow from '../../assets/img/arrow-down-angle.svg'

const Dropdown = ({
  children,
  status,
  name,
  default_name,
  click,
  type,
  active
}) => {
  console.log(name, 'as')
  return (
    <div
      className={[
        status ? 'select__menu-active ' : 'select__menu ',
        type == 'normal' && ' select__menu-easy'
      ]}
    >
      <div
        className={status ? 'selected selected-active ' : 'selected'}
        onClick={click}
      >
        <span>{name ? name.name : default_name}</span>

        {active && <img className='select__arrow' src={Arrow} />}
      </div>
      <ul
        className={
          status
            ? 'select__dropdown select__dropdown-active'
            : 'select__dropdown select__dropdown'
        }
      >
        {children}
      </ul>
    </div>
  )
}
export default Dropdown;