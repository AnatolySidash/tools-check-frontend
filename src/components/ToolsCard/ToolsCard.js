import React from 'react';

function ToolsCard({ tool, onToolClick }) {

    const toolConditionClassName = (`toolscard__item ${tool.toolCondition.toLowerCase() !== 'не годен' ? 'toolscard__item_green' : 'toolscard__item_red'}`);

   return (
      <article className="toolscard">
        <div className='toolscard__info'>
            <h2 className='toolscard__title' onClick={() => onToolClick(tool)}>{tool.toolNameRU}</h2>
            <ul className='toolscard__list'>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>ID номер:</h3>
                    <p className='toolscard__data'>{tool.toolId}</p>
                </li>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>Дата поверки/калибровки:</h3>
                    <p className='toolscard__data'>{tool.toolCheckDate.slice(0, 10)}</p>
                </li>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>МПИ:</h3>
                    <p className='toolscard__data'>{tool.toolUsagePeriod}</p>
                </li>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>Департамент:</h3>
                    <p className='toolscard__data'>{tool.toolOwnerDept}</p>
                </li>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>ФИО сотрудника:</h3>
                    <p className='toolscard__data'>{tool.toolOwnerName}</p>
                </li>
                <li className={toolConditionClassName}>
                    <h3 className='toolscard__subtitle toolscard__subtitle_black'>Состояние:</h3>
                    <p className='toolscard__data toolscard__data_black'>{tool.toolCondition}</p>
                </li>
            </ul>
        </div>
        <button type='button' className='toolscard__button' onClick={() => onToolClick(tool)}>Детальное описание</button>
      </article >
   )
}

export default ToolsCard;