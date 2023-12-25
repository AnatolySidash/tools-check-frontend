import React from 'react';
import ToolsCard from '../ToolsCard/ToolsCard.js';

function OwnerChangeScreen({ isOpen, onClose, tools }) {

    const [currentOwnerName, setCurrentOwnerName] = React.useState('');
    const [newOwnerName, setNewOwnerName] = React.useState('');

    function handleCurrentOwnerNameChange(e) {
        setCurrentOwnerName(e.target.value)
    }

    function handleNewOwnerNameChange(e) {
        setNewOwnerName(e.target.value)
    }

    return (

    <main className={`ownerchangescreen ${isOpen ? 'ownerchangescreen_opened' : ''}`}>
        <h1 className="ownerchangescreen__title">Изменить ответственность за средства измерения</h1>
        <form id='ownerForm' className="ownerchangescreen__form" >
            <fieldset className='ownerchangescreen__block'>
                <label htmlFor='ownerNameInput' className="ownerchangescreen__item">Введите ФИО текущего сотрудника</label>
                <input 
                    className="ownerchangescreen__input"
                    id='ownerNameInput'
                    name='ownerNameInput'
                    type="text"
                    value={currentOwnerName}
                    onChange={(e) => handleCurrentOwnerNameChange(e)}
                    placeholder="Например: Пушкин Александр"
                    minLength={2}
                    maxLength={40}
                    required>
                </input>
                <button type="submit" className="ownerchangescreen__button">Найти</button>
            </fieldset>
            <fieldset className='ownerchangescreen__block'>
                <label htmlFor='ownerNameInput' className="ownerchangescreen__item">Введите ФИО нового сотрудника</label>
                <input 
                    className="ownerchangescreen__input"
                    id='ownerNameInput'
                    name='ownerNameInput'
                    type="text"
                    value={newOwnerName}
                    onChange={(e) => handleNewOwnerNameChange(e)}
                    placeholder="Например: Пушкин Александр"
                    minLength={2}
                    maxLength={40}
                    required>
                </input>
                <button type="submit" className="ownerchangescreen__button">Изменить</button>
            </fieldset>
            <button type="button" className="toolscreen__close" onClick={onClose} />
        </form>
        <ul className='toolscardlist__list'>
                    <li className="toolscardlist__item">
                        {tools.toReversed().sort((a, b) => a.toolNameRU.localeCompare(b.toolNameRU)).slice(0, 10).map((tool) => (
                            <ToolsCard
                            key={tool._id}
                            tool={tool}
                            onClose={onClose}
                            />
                            ))}  
                    </li>
                </ul>
     </main >
    )
 }
 
 export default OwnerChangeScreen;