import React from 'react';

function PersonCard({ person, totalTools }) {

   const personTotalTools = totalTools?.filter((tool) => {
    return (tool.toolOwnerName === person);
   })

   const personOkTotalTools = totalTools?.filter((tool) => {
    return (tool.toolOwnerName === person && tool.toolCalibrationStatus.toLowerCase() === 'годен'.toLowerCase());
   })

   const personNokTotalTools = totalTools?.filter((tool) => {
    return (tool.toolOwnerName === person && tool.toolCalibrationStatus.toLowerCase() === 'не годен'.toLowerCase());
   })

    
   return (
      <article className="personcard">
        <div className='personcard__info'>
            <h2 className='personcard__name'>{person}</h2>
            <ul className='personcard__list'>
                <li className='personcard__item'>
                    <h3 className='personcard__subtitle'>Всего:</h3>
                    <p className='personcard__data'>{personTotalTools?.length}</p>
                </li>
                <li className='personcard__item'>
                    <h3 className='personcard__subtitle'>Годные:</h3>
                    <p className='personcard__data'>{personOkTotalTools?.length}</p>
                </li>
                <li className='personcard__item'>
                    <h3 className='personcard__subtitle'>Не годные:</h3>
                    <p className='personcard__data'>{personNokTotalTools?.length}</p>
                </li>
            </ul>
        </div>
      </article >
   )
}

export default PersonCard;