import React from 'react';
// import {MdDeleteForever} from 'react-icons/md';

const Note = ({id,text,date, handleDelete}) => {
  return (
    <div className='note'>
        <span>{text}</span> 
        <div className='note-footer'>
            <small>{date}</small>
            {/* <MdDeleteForever */}
             <button onClick={()=>handleDelete(id)} className="delete-icon" size="1.3em" >D 
             {/* /> */}
             </button>
        </div>
    </div>
  )
}

export default Note