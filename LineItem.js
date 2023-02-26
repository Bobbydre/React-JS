import React from 'react'
import {FaTrashAlt} from "react-icons/fa";
 
const LineItem = ({item, handleCheck, handleDelete}) => {
    
  return (
    <li className="item">
            <input type="checkbox" 
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
             />
            <label

                // strike-through when box is checked
                style={(item.checked) ? {textDecoration: "line-through"} : null}
                // check when text is double clicked
                 onDoubleClick={() => handleCheck(item.id)}>
                {item.item}
            </label>
            <FaTrashAlt
                        onClick={() => handleDelete(item.id)}
                        role="button"
                        tabIndex="0"
                        aria-label={`Delete ${item.item}`}
            />
        </li>
  )
}

export default LineItem;