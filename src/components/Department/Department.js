import React from 'react';
import mainApi from '../../utils/MainApi';

function Department({ department, onDepartmentClick }) {

    const [allTools, setAllTools] = React.useState([]);

    async function handleToolListUpdate() {
        try {
            const tools = await mainApi.getTools();
            localStorage.setItem('allTools', JSON.stringify(tools));
            setAllTools(JSON.parse(localStorage.getItem('allTools')));
        } catch (err) {
            console.error(`Ошибка загрузки списка средст измерения: ${err}`);
        }
     }

    React.useEffect(() => {
        handleToolListUpdate();
    }, []);

    // Общий список СИ

    const okTools = allTools.filter((tool) => {
        return (tool.toolCalibrationStatus.toLowerCase().includes('годен'.toLowerCase()) && 
                !tool.toolCalibrationStatus.toLowerCase().includes('не'.toLowerCase())
        );
    })

    const notOkTools = allTools.filter((tool) => {
        return (tool.toolCalibrationStatus.toLowerCase().includes('не годен'.toLowerCase()));
    })

    const usingTools = allTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('используется'.toLowerCase()));
    })

    const checkingTools = allTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('на поверке'.toLowerCase()));
    })

    const brokenTools = allTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('сломан'.toLowerCase()));
    })

    const lostTools = allTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('утерян'.toLowerCase()));
    })

    const scrapedTools = allTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('утилизирован'.toLowerCase()));
    })

    const spareTools = allTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('на хранении'.toLowerCase()));
    })

    // Список СИ конкретного подразделения

    const departmentAllTools = allTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes(department.shortNameEN.toLowerCase()));
    })

    const departmentOkTools = okTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes(department.shortNameEN.toLowerCase()));
    })

    const departmentNotOkTools = notOkTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes(department.shortNameEN.toLowerCase()));
    })

    const departmentUsingTools = usingTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes(department.shortNameEN.toLowerCase()));
    })

    const departmentCheckingTools = checkingTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes(department.shortNameEN.toLowerCase()));
    })

    const departmentBrokenTools = brokenTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes(department.shortNameEN.toLowerCase()));
    })

    const departmentLostTools = lostTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes(department.shortNameEN.toLowerCase()));
    })

    const departmentScrapedTools = scrapedTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes(department.shortNameEN.toLowerCase()));
    })

    const departmentSpareTools = spareTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes(department.shortNameEN.toLowerCase()));
    })

    return (

            <section className="department">
                <ul className='department__info'>
                    <li className="department__item">
                        <h2 className='department__title' onClick={() => onDepartmentClick(department)}>{department.longNameRU}</h2>
                        <ul className='department__list'>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Всего:</h3>
                                <p className='department__result'>{departmentAllTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Годен:</h3>
                                <p className='department__result'>{departmentOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Используется:</h3>
                                <p className='department__result'>{departmentUsingTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Не годен:</h3>
                                <p className='department__result'>{departmentNotOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>На поверке:</h3>
                                <p className='department__result'>{departmentCheckingTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Сломан:</h3>
                                <p className='department__result'>{departmentBrokenTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утерян:</h3>
                                <p className='department__result'>{departmentLostTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утилизирован:</h3>
                                <p className='department__result'>{departmentScrapedTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>На хранении:</h3>
                                <p className='department__result'>{departmentSpareTools.length}</p>
                            </li>
                        </ul>
                    </li>
                </ul>

            </section >
    )
 }
 
 export default Department;