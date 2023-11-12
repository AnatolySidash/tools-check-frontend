import React from 'react';

function DepartmentScreen({ tools, onClose, isOpen, selectedDepartment }) {

    const currentDepartment = selectedDepartment;

    // Общий список СИ

    const totalTools = tools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase()));
    })

    const okTools = tools.filter((tool) => {
        return (tool.toolCalibrationStatus.toLowerCase().includes('годен'.toLowerCase()) && 
                !tool.toolCalibrationStatus.toLowerCase().includes('не'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })
    
    const notOkTools = tools.filter((tool) => {
        return (tool.toolCalibrationStatus.toLowerCase().includes('не годен'.toLowerCase()) &&
        tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })
    
    const okUsingTools = okTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('используется'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })

    const needCheckTools = okTools.filter((tool) => {
        const todayDate = new Date();
        const nextCheckDate = new Date(tool.toolNextCheckDate);
        const dayDifference = Math.round((nextCheckDate - todayDate) / (60 * 60 * 24 * 1000));
        if (dayDifference >= 0 && dayDifference < 60) {
            return tool;
        } else {
            return 0;
        }
    })

    const notNeedCheckTools = okTools.filter((tool) => {
        const todayDate = new Date();
        const nextCheckDate = new Date(tool.toolNextCheckDate);
        const dayDifference = Math.round((nextCheckDate - todayDate) / (60 * 60 * 24 * 1000));
        if (dayDifference > 60) {
            return tool;
        } else {
            return 0;
        }
    })

    const needRegisterTools = okTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('требуется регистрация'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })

    const needCheckUsingTools = needCheckTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('используется'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())

        );
    })

    const notNeedCheckUsingTools = notNeedCheckTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('используется'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })

    const notOkUsingTools = notOkTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('используется'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment.shortNameEN.toLowerCase())
        );
    })

    const okNotUsingTools = okTools.filter((tool) => {
        return (!tool.toolCondition.toLowerCase().includes('используется'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })

    const notOkNotUsingTools = notOkTools.filter((tool) => {
        return (!tool.toolCondition.toLowerCase().includes('используется'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })
    
    const checkingTools = tools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('на поверке'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })
    
    const okBrokenTools = okTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('сломан'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })

    const notOkBrokenTools = notOkTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('сломан'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })
    
    const okLostTools = okTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('утерян'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })

    const notOkLostTools = notOkTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('утерян'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })
    
    const scrapedTools = tools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('утилизирован'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })
    
    const okSpareTools = okTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('на хранении'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment?.shortNameEN.toLowerCase())
        );
    })

    const notOkSpareTools = notOkTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('на хранении'.toLowerCase()) &&
                tool.toolOwnerDept.toLowerCase().includes(currentDepartment.shortNameEN.toLowerCase())
        );
    })

   return (
            <main className={`departmentscreen ${isOpen ? 'departmentscreen_opened' : ''}`}>
                <h2 className='departmentscreen__title'>Статус по подразделению: <span className='departmentscreen__accent'>{currentDepartment ? currentDepartment.longNameRU : ''}</span></h2>
                <h2 className='departmentscreen__data'>Общее количество СИ: {totalTools.length}</h2>
                <ul className='departmentscreen__info'>
                    <li className="departmentscreen__block">
                        <h3 className='departmentscreen__subtitle'>Годные средства измерения</h3>
                        <ul className='departmentscreen__list'>
                            <li className='departmentscreen__item'>
                                <h3 className='departmentscreen__name'>Общее количество:</h3>
                                <p className='departmentscreen__result'>{okTools.length}</p>
                            </li>
                            <li className='departmentscreen__item'>
                                <h3 className='departmentscreen__name'>Используются:</h3>
                                <p className='departmentscreen__result'>{okUsingTools.length}</p>
                            </li>
                            <ul className='departmentscreen__sublist'>
                                <li className='departmentscreen__item'>
                                    <h3 className='departmentscreen__name'>Не требуется поверка/калибровка в течение 60 дней:</h3>
                                    <p className='departmentscreen__result'>{notNeedCheckUsingTools.length}</p>
                                </li>
                                <li className='departmentscreen__item'>
                                    <h3 className='departmentscreen__name'>Требуется поверка/калибровка в течение 60 дней:</h3>
                                    <p className='departmentscreen__result'>{needCheckUsingTools.length}</p>
                                </li>
                            </ul>
                            <li className='departmentscreen__item'>
                                <h3 className='departmentscreen__name'>Не используются:</h3>
                                <p className='departmentscreen__result'>{okNotUsingTools.length}</p>
                            </li>
                            <ul className='departmentscreen__sublist'>
                                <li className='departmentscreen__item'>
                                    <h3 className='departmentscreen__name'>Требуется регистрация:</h3>
                                    <p className='departmentscreen__result'>{needRegisterTools.length}</p>
                                </li>
                                <li className='departmentscreen__item'>
                                    <h3 className='departmentscreen__name'>На хранении:</h3>
                                    <p className='departmentscreen__result'>{okSpareTools.length}</p>
                                </li>
                                <li className='departmentscreen__item'>
                                    <h3 className='departmentscreen__name'>Сломаны:</h3>
                                    <p className='departmentscreen__result'>{okBrokenTools.length}</p>
                                </li>
                                <li className='departmentscreen__item'>
                                    <h3 className='departmentscreen__name'>Утеряны:</h3>
                                    <p className='departmentscreen__result'>{okLostTools.length}</p>
                                </li>
                            </ul>
                        </ul>
                    </li>
                    <li className="departmentscreen__block">
                        <h3 className='departmentscreen__subtitle'>Не годные средства измерения</h3>
                        <ul className='departmentscreen__list'>
                        <li className='departmentscreen__item'>
                                <h3 className='departmentscreen__name'>Общее количество:</h3>
                                <p className='departmentscreen__result'>{notOkTools.length}</p>
                            </li>
                            <li className='departmentscreen__item'>
                                <h3 className='departmentscreen__name'>Используются:</h3>
                                <p className='departmentscreen__result'>{notOkUsingTools.length}</p>
                            </li>
                            <li className='departmentscreen__item'>
                                <h3 className='departmentscreen__name'>Не используются:</h3>
                                <p className='departmentscreen__result'>{notOkNotUsingTools.length}</p>
                            </li>
                            <ul className='departmentscreen__sublist'>
                                <li className='departmentscreen__item'>
                                    <h3 className='departmentscreen__name'>На хранении:</h3>
                                    <p className='departmentscreen__result'>{notOkSpareTools.length}</p>
                                </li>
                                <li className='departmentscreen__item'>
                                    <h3 className='departmentscreen__name'>На поверке/калибровке:</h3>
                                    <p className='departmentscreen__result'>{checkingTools.length}</p>
                                </li>
                                <li className='departmentscreen__item'>
                                    <h3 className='departmentscreen__name'>Сломаны:</h3>
                                    <p className='departmentscreen__result'>{notOkBrokenTools.length}</p>
                                </li>
                                <li className='departmentscreen__item'>
                                    <h3 className='departmentscreen__name'>Утеряны:</h3>
                                    <p className='departmentscreen__result'>{notOkLostTools.length}</p>
                                </li>
                                <li className='departmentscreen__item'>
                                    <h3 className='departmentscreen__name'>Утилизированы:</h3>
                                    <p className='departmentscreen__result'>{scrapedTools.length}</p>
                                </li>
                            </ul>
                        </ul>
                    </li>
                </ul>
                <button type="button" className="toolscreen__close" onClick={onClose} />
            </main >
   )
}

export default DepartmentScreen;