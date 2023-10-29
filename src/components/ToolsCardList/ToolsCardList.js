import React from 'react';
import ToolsCard from '../ToolsCard/ToolsCard.js';

function ToolsCardList({ tools, onToolClick, onClose, onNewToolAdd }) {

    return (

            <section className="toolscardlist">
                <h1 className='toolscardlist__title'>Средства измерения</h1>
                <button type='button' className='toolscardlist__button' onClick={onNewToolAdd}>Добавить новое СИ</button>
                <ul className='toolscardlist__list'>
                    <li className="toolscardlist__item">
                        {tools.toReversed().map((tool) => (
                            <ToolsCard
                                key={tool._id}
                                tool={tool}
                                onClose={onClose}
                                onToolClick={onToolClick}
                            />

                        ))}  
                    </li>
                </ul>

            </section >
    )
 }
 
 export default ToolsCardList;