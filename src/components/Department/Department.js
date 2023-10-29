import React from 'react';
import mainApi from '../../utils/MainApi';

function Department() {

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
        return (tool.toolCondition.toLowerCase().includes('годен'.toLowerCase()) && 
                !tool.toolCondition.toLowerCase().includes('не'.toLowerCase())
        );
    })

    const notOkTools = allTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('не годен'.toLowerCase()));
    })

    const checkingTools = allTools.filter((tool) => {
        return (tool.toolCondition.toLowerCase().includes('в процессе'.toLowerCase()));
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
        return (tool.toolCondition.toLowerCase().includes('консервация'.toLowerCase()));
    })

    // Список СИ цеха штамповки

    const stampingAllTools = allTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('stamping'.toLowerCase()));
    })

    const stampingOkTools = okTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('stamping'.toLowerCase()));
    })

    const stampingNotOkTools = notOkTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('stamping'.toLowerCase()));
    })

    const stampingCheckingTools = checkingTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('stamping'.toLowerCase()));
    })

    const stampingBrokenTools = brokenTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('stamping'.toLowerCase()));
    })

    const stampingLostTools = lostTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('stamping'.toLowerCase()));
    })

    const stampingScrapedTools = scrapedTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('stamping'.toLowerCase()));
    })

    const stampingSpareTools = spareTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('stamping'.toLowerCase()));
    })

    // Список СИ цеха сварки

    const weldingAllTools = allTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('welding'.toLowerCase()));
    })

    const weldingOkTools = okTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('welding'.toLowerCase()));
    })

    const weldingNotOkTools = notOkTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('welding'.toLowerCase()));
    })

    const weldingCheckingTools = checkingTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('welding'.toLowerCase()));
    })

    const weldingBrokenTools = brokenTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('welding'.toLowerCase()));
    })

    const weldingLostTools = lostTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('welding'.toLowerCase()));
    })

    const weldingScrapedTools = scrapedTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('welding'.toLowerCase()));
    })

    const weldingSpareTools = spareTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('welding'.toLowerCase()));
    })

    // Список СИ цеха окраски

    const paintAllTools = allTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('paint'.toLowerCase()));
    })

    const paintOkTools = okTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('paint'.toLowerCase()));
    })

    const paintNotOkTools = notOkTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('paint'.toLowerCase()));
    })

    const paintCheckingTools = checkingTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('paint'.toLowerCase()));
    })

    const paintBrokenTools = brokenTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('paint'.toLowerCase()));
    })

    const paintLostTools = lostTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('paint'.toLowerCase()));
    })

    const paintScrapedTools = scrapedTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('paint'.toLowerCase()));
    })

    const paintSpareTools = spareTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('paint'.toLowerCase()));
    })

    // Список СИ цеха сборки

    const assemblyAllTools = allTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('assembly'.toLowerCase()));
    })

    const assemblyOkTools = okTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('assembly'.toLowerCase()));
    })

    const assemblyNotOkTools = notOkTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('assembly'.toLowerCase()));
    })

    const assemblyCheckingTools = checkingTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('assembly'.toLowerCase()));
    })

    const assemblyBrokenTools = brokenTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('assembly'.toLowerCase()));
    })

    const assemblyLostTools = lostTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('assembly'.toLowerCase()));
    })

    const assemblyScrapedTools = scrapedTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('assembly'.toLowerCase()));
    })

    const assemblySpareTools = spareTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('assembly'.toLowerCase()));
    })

    // Список СИ департамента контроля качества

    const QCAllTools = allTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QC'.toLowerCase()));
    })

    const QCOkTools = okTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QC'.toLowerCase()));
    })

    const QCNotOkTools = notOkTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QC'.toLowerCase()));
    })

    const QCCheckingTools = checkingTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QC'.toLowerCase()));
    })

    const QCBrokenTools = brokenTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QC'.toLowerCase()));
    })

    const QCLostTools = lostTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QC'.toLowerCase()));
    })

    const QCScrapedTools = scrapedTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QC'.toLowerCase()));
    })

    const QCSpareTools = spareTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QC'.toLowerCase()));
    })

    // Список СИ департамента гарантии качества

    const QAAllTools = allTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QA'.toLowerCase()));
    })

    const QAOkTools = okTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QA'.toLowerCase()));
    })

    const QANotOkTools = notOkTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QA'.toLowerCase()));
    })

    const QACheckingTools = checkingTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QA'.toLowerCase()));
    })

    const QABrokenTools = brokenTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QA'.toLowerCase()));
    })

    const QALostTools = lostTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QA'.toLowerCase()));
    })

    const QAScrapedTools = scrapedTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QA'.toLowerCase()));
    })

    const QASpareTools = spareTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('QA'.toLowerCase()));
    })

    // Список СИ департамента производственного инжиниринга и охраны труда

    const PESAllTools = allTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('PE&S'.toLowerCase()));
    })

    const PESOkTools = okTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('PE&S'.toLowerCase()));
    })

    const PESNotOkTools = notOkTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('PE&S'.toLowerCase()));
    })

    const PESCheckingTools = checkingTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('PE&S'.toLowerCase()));
    })

    const PESBrokenTools = brokenTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('PE&S'.toLowerCase()));
    })

    const PESLostTools = lostTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('PE&S'.toLowerCase()));
    })

    const PESScrapedTools = scrapedTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('PE&S'.toLowerCase()));
    })

    const PESSpareTools = spareTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('PE&S'.toLowerCase()));
    })

    // Список СИ департамента обслуживания технологического оборудования

    const maintenanceAllTools = allTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('Maintenance'.toLowerCase()));
    })

    const maintenanceOkTools = okTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('Maintenance'.toLowerCase()));
    })

    const maintenanceNotOkTools = notOkTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('Maintenance'.toLowerCase()));
    })

    const maintenanceCheckingTools = checkingTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('Maintenance'.toLowerCase()));
    })

    const maintenanceBrokenTools = brokenTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('Maintenance'.toLowerCase()));
    })

    const maintenanceLostTools = lostTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('Maintenance'.toLowerCase()));
    })

    const maintenanceScrapedTools = scrapedTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('Maintenance'.toLowerCase()));
    })

    const maintenanceSpareTools = spareTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('Maintenance'.toLowerCase()));
    })

    // Список СИ департамента исследований и разработок

    const RNDAllTools = allTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('R&D'.toLowerCase()));
    })

    const RNDOkTools = okTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('R&D'.toLowerCase()));
    })

    const RNDNotOkTools = notOkTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('R&D'.toLowerCase()));
    })

    const RNDCheckingTools = checkingTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('R&D'.toLowerCase()));
    })

    const RNDBrokenTools = brokenTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('R&D'.toLowerCase()));
    })

    const RNDLostTools = lostTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('R&D'.toLowerCase()));
    })

    const RNDScrapedTools = scrapedTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('R&D'.toLowerCase()));
    })

    const RNDSpareTools = spareTools.filter((tool) => {
        return (tool.toolOwnerDept.toLowerCase().includes('R&D'.toLowerCase()));
    })

    return (

            <section className="department">
                <ul className='department__info'>
                    <li className="department__item">
                        <h2 className='department__title'>Общий статус по заводу ХММР</h2>
                        <ul className='department__list'>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Всего:</h3>
                                <p className='department__result'>{allTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Годен:</h3>
                                <p className='department__result'>{okTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Не годен:</h3>
                                <p className='department__result'>{notOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>В процессе:</h3>
                                <p className='department__result'>{checkingTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Сломан:</h3>
                                <p className='department__result'>{brokenTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утерян:</h3>
                                <p className='department__result'>{lostTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утилизирован:</h3>
                                <p className='department__result'>{scrapedTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Консервация:</h3>
                                <p className='department__result'>{spareTools.length}</p>
                            </li>
                        </ul>
                    </li>
                    <li className="department__item">
                        <h2 className='department__title'>Цех штамповки</h2>
                        <ul className='department__list'>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Всего:</h3>
                                <p className='department__result'>{stampingAllTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Годен:</h3>
                                <p className='department__result'>{stampingOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Не годен:</h3>
                                <p className='department__result'>{stampingNotOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>В процессе:</h3>
                                <p className='department__result'>{stampingCheckingTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Сломан:</h3>
                                <p className='department__result'>{stampingBrokenTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утерян:</h3>
                                <p className='department__result'>{stampingLostTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утилизирован:</h3>
                                <p className='department__result'>{stampingScrapedTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Консервация:</h3>
                                <p className='department__result'>{stampingSpareTools.length}</p>
                            </li>
                        </ul>
                    </li>
                    <li className="department__item">
                        <h2 className='department__title'>Цех сварки</h2>
                        <ul className='department__list'>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Всего:</h3>
                                <p className='department__result'>{weldingAllTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Годен:</h3>
                                <p className='department__result'>{weldingOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Не годен:</h3>
                                <p className='department__result'>{weldingNotOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>В процессе:</h3>
                                <p className='department__result'>{weldingCheckingTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Сломан:</h3>
                                <p className='department__result'>{weldingBrokenTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утерян:</h3>
                                <p className='department__result'>{weldingLostTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утилизирован:</h3>
                                <p className='department__result'>{weldingScrapedTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Консервация:</h3>
                                <p className='department__result'>{weldingSpareTools.length}</p>
                            </li>
                        </ul>
                    </li>
                    <li className="department__item">
                        <h2 className='department__title'>Цех окраски</h2>
                        <ul className='department__list'>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Всего:</h3>
                                <p className='department__result'>{paintAllTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Годен:</h3>
                                <p className='department__result'>{paintOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Не годен:</h3>
                                <p className='department__result'>{paintNotOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>В процессе:</h3>
                                <p className='department__result'>{paintCheckingTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Сломан:</h3>
                                <p className='department__result'>{paintBrokenTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утерян:</h3>
                                <p className='department__result'>{paintLostTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утилизирован:</h3>
                                <p className='department__result'>{paintScrapedTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Консервация:</h3>
                                <p className='department__result'>{paintSpareTools.length}</p>
                            </li>
                        </ul>
                    </li>
                    <li className="department__item">
                        <h2 className='department__title'>Цех сборки</h2>
                        <ul className='department__list'>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Всего:</h3>
                                <p className='department__result'>{assemblyAllTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Годен:</h3>
                                <p className='department__result'>{assemblyOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Не годен:</h3>
                                <p className='department__result'>{assemblyNotOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>В процессе:</h3>
                                <p className='department__result'>{assemblyCheckingTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Сломан:</h3>
                                <p className='department__result'>{assemblyBrokenTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утерян:</h3>
                                <p className='department__result'>{assemblyLostTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утилизирован:</h3>
                                <p className='department__result'>{assemblyScrapedTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Консервация:</h3>
                                <p className='department__result'>{assemblySpareTools.length}</p>
                            </li>
                        </ul>
                    </li>
                    <li className="department__item">
                        <h2 className='department__title'>Департамент контроля качества</h2>
                        <ul className='department__list'>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Всего:</h3>
                                <p className='department__result'>{QCAllTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Годен:</h3>
                                <p className='department__result'>{QCOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Не годен:</h3>
                                <p className='department__result'>{QCNotOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>В процессе:</h3>
                                <p className='department__result'>{QCCheckingTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Сломан:</h3>
                                <p className='department__result'>{QCBrokenTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утерян:</h3>
                                <p className='department__result'>{QCLostTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утилизирован:</h3>
                                <p className='department__result'>{QCScrapedTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Консервация:</h3>
                                <p className='department__result'>{QCSpareTools.length}</p>
                            </li>
                        </ul>
                    </li>
                    <li className="department__item">
                        <h2 className='department__title'>Департамент гарантии качества</h2>
                        <ul className='department__list'>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Всего:</h3>
                                <p className='department__result'>{QAAllTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Годен:</h3>
                                <p className='department__result'>{QAOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Не годен:</h3>
                                <p className='department__result'>{QANotOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>В процессе:</h3>
                                <p className='department__result'>{QACheckingTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Сломан:</h3>
                                <p className='department__result'>{QABrokenTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утерян:</h3>
                                <p className='department__result'>{QALostTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утилизирован:</h3>
                                <p className='department__result'>{QAScrapedTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Консервация:</h3>
                                <p className='department__result'>{QASpareTools.length}</p>
                            </li>
                        </ul>
                    </li>
                    <li className="department__item">
                        <h2 className='department__title'>Департамент производственного инжиниринга и охраны труда</h2>
                        <ul className='department__list'>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Всего:</h3>
                                <p className='department__result'>{PESAllTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Годен:</h3>
                                <p className='department__result'>{PESOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Не годен:</h3>
                                <p className='department__result'>{PESNotOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>В процессе:</h3>
                                <p className='department__result'>{PESCheckingTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Сломан:</h3>
                                <p className='department__result'>{PESBrokenTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утерян:</h3>
                                <p className='department__result'>{PESLostTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утилизирован:</h3>
                                <p className='department__result'>{PESScrapedTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Консервация:</h3>
                                <p className='department__result'>{PESSpareTools.length}</p>
                            </li>
                        </ul>
                    </li>
                    <li className="department__item">
                        <h2 className='department__title'>Департамент обслуживания технологического оборудования</h2>
                        <ul className='department__list'>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Всего:</h3>
                                <p className='department__result'>{maintenanceAllTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Годен:</h3>
                                <p className='department__result'>{maintenanceOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Не годен:</h3>
                                <p className='department__result'>{maintenanceNotOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>В процессе:</h3>
                                <p className='department__result'>{maintenanceCheckingTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Сломан:</h3>
                                <p className='department__result'>{maintenanceBrokenTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утерян:</h3>
                                <p className='department__result'>{maintenanceLostTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утилизирован:</h3>
                                <p className='department__result'>{maintenanceScrapedTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Консервация:</h3>
                                <p className='department__result'>{maintenanceSpareTools.length}</p>
                            </li>
                        </ul>
                    </li>
                    <li className="department__item">
                        <h2 className='department__title'>Департамент исследований и разработок</h2>
                        <ul className='department__list'>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Всего:</h3>
                                <p className='department__result'>{RNDAllTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Годен:</h3>
                                <p className='department__result'>{RNDOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Не годен:</h3>
                                <p className='department__result'>{RNDNotOkTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>В процессе:</h3>
                                <p className='department__result'>{RNDCheckingTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Сломан:</h3>
                                <p className='department__result'>{RNDBrokenTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утерян:</h3>
                                <p className='department__result'>{RNDLostTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Утилизирован:</h3>
                                <p className='department__result'>{RNDScrapedTools.length}</p>
                            </li>
                            <li className='department__data'>
                                <h3 className='department__subtitle'>Консервация:</h3>
                                <p className='department__result'>{RNDSpareTools.length}</p>
                            </li>
                        </ul>
                    </li>
                </ul>

            </section >
    )
 }
 
 export default Department;