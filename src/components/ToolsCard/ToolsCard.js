import React from 'react';

function ToolsCard({ tool, onToolClick }) {
    
    const OKTool = tool?.toolCalibrationStatus.toLowerCase() !== 'не годен';
    const newTool = tool?.toolCondition.toLowerCase() === 'требуется регистрация';
    
    const toolConditionClassName = (`toolscard__item ${OKTool ? 'toolscard__item_green' : 'toolscard__item_red'}`);

    function checkDayDifference () {
        const todayDate = new Date();
        const nextCheckDate = new Date(tool.toolNextCheckDate);
        return Math.ceil((nextCheckDate - todayDate) / (60 * 60 * 24 * 1000));
    }

    function isRiskTool() {
        const dayDifference = checkDayDifference();
        if (dayDifference >= 0 && dayDifference < 60) {
            return true;
        } else {
            return false;
        }
    }

   return (
      <article className="toolscard">
        <div className='toolscard__info'>
            <h2 className='toolscard__title' onClick={() => onToolClick(tool)}>{tool.toolNameRU} <span className='toolscard__title-accent'>{newTool && `Требуется регистрация`}</span></h2>
            <span className='toolscard__timelimit'>{isRiskTool() && `Годен еще ${checkDayDifference()} дней`}</span>
            <ul className='toolscard__list'>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>ID номер:</h3>
                    <p className='toolscard__data'>{tool.toolId}</p>
                </li>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>Годен до:</h3>
                    <p className='toolscard__data'>{tool.toolNextCheckDate.slice(0, 10)}</p>
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
                    <h3 className='toolscard__subtitle'>ФИО:</h3>
                    <p className='toolscard__data'>{tool.toolOwnerName}</p>
                </li>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>Состояние:</h3>
                    <p className='toolscard__data'>{tool.toolCondition}</p>
                </li>
                <li className={toolConditionClassName}>
                    <h3 className='toolscard__subtitle toolscard__subtitle_black'>Статус:</h3>
                    <p className='toolscard__data toolscard__data_black'>{tool.toolCalibrationStatus}</p>
                </li>
            </ul>
        </div>
        <button type='button' className='toolscard__button' onClick={() => onToolClick(tool)}>Детальное описание</button>
      </article >
   )
}

export default ToolsCard;