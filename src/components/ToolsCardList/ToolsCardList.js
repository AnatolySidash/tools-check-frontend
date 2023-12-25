import React from 'react';
import ToolsCard from '../ToolsCard/ToolsCard.js';

function ToolsCardList({ tools, onToolClick, onClose, onNewToolAdd, onRespChange }) {

    const [initialCardsQty, setInitialCardsQty] = React.useState(0);
    const [additionalCardsQty, setAdditionalCardsQty] = React.useState(0);
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

    const {
        LARGE_SCREEN_SIZE,
        MEDIUM_SCREEN_SIZE,
        MAX_TOOLS_QTY,
        MID_TOOLS_QTY,
        MAX_EXTRA_TOOLS_QTY,
        MID_EXTRA_TOOLS_QTY,
    } = require('../../utils/Constants.js');

    function handleScreenWidth() {
        setScreenWidth(window.innerWidth);
    }

    function handleMoreButtonClick() {
        setInitialCardsQty(initialCardsQty + additionalCardsQty);
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleScreenWidth);
        return () => {
           window.removeEventListener('resize', handleScreenWidth);
        }
     }, []);

    React.useEffect(() => {

        if (screenWidth >= LARGE_SCREEN_SIZE) {
            setInitialCardsQty(MAX_TOOLS_QTY);
            setAdditionalCardsQty(MAX_EXTRA_TOOLS_QTY);
         } else if (screenWidth >= MEDIUM_SCREEN_SIZE && screenWidth <= LARGE_SCREEN_SIZE) {
            setInitialCardsQty(MID_TOOLS_QTY);
            setAdditionalCardsQty(MID_EXTRA_TOOLS_QTY);
         }
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [screenWidth])

     const okTools = tools.filter((tool) => {
        return (tool.toolCalibrationStatus.toLowerCase().includes('годен'.toLowerCase()) && 
                !tool.toolCalibrationStatus.toLowerCase().includes('не'.toLowerCase())
        );
    })
    
    const notOkTools = tools.filter((tool) => {
        return (tool.toolCalibrationStatus.toLowerCase().includes('не годен'.toLowerCase()));
    })

    return (
        <>
            <section className="toolscardlist">
                <h1 className='toolscardlist__title'>Средства измерения</h1>
                <ul className='toolscardlist__block'>
                    <li className='toolscardlist__data'>Всего: {tools.length}</li>
                    <li className='toolscardlist__data'>Годные: {okTools.length}</li>
                    <li className='toolscardlist__data'>Не годные: {notOkTools.length}</li>
                </ul>
                <button type='button' className='toolscardlist__button' onClick={onNewToolAdd}>Добавить новое СИ</button>
                <button type='button' className='toolscardlist__button toolscardlist__button-resp' onClick={onRespChange}>Изменить ответственность</button>
                <ul className='toolscardlist__list'>
                    <li className="toolscardlist__item">
                        {tools.toReversed().sort((a, b) => a.toolNameRU.localeCompare(b.toolNameRU)).slice(0, initialCardsQty).map((tool) => (
                            <ToolsCard
                            key={tool._id}
                            tool={tool}
                            onClose={onClose}
                            onToolClick={onToolClick}
                            />
                            ))}  
                    </li>
                </ul>

            {(tools.length > initialCardsQty) && <button type="button" onClick={handleMoreButtonClick} className='toolscardlist__more-button'>Ещё</button>}
            </section >
        </>
    )
 }
 
 export default ToolsCardList;