import React from 'react';
import mainApi from '../../utils/MainApi.js';

function NewToolScreen({ onClose, isOpen, setSelectedTool, isNewToolAdded, setNewToolAdded }) {

    const [toolNameRU, setNameRU] = React.useState('');
    const [toolNameEN, setNameEN] = React.useState('');
    const [toolId, setToolId] = React.useState('');
    const [toolManufacturer, setToolManufacturer] = React.useState('');
    const [toolSerialNo, setToolSerialNo] = React.useState('');
    const [toolRegisterNo, setToolRegisterNo] = React.useState('');
    const [toolParameters, setToolParameters] = React.useState('');
    const [toolReceiveDate, setToolReceiveDate] = React.useState('');
    const [toolCheckDate, setToolCheckDate] = React.useState('');
    const [toolReadyDate, setToolReadyDate] = React.useState('');
    const [toolReleaseDate, setToolReleaseDate] = React.useState('');
    const [toolNextCheckDate, setToolNextCheckDate] = React.useState('');
    const [toolUsagePeriod, setToolUsagePeriod] = React.useState('');
    const [toolCertificateNo, setToolCertificateNo] = React.useState('');
    const [toolCondition, setToolCondition] = React.useState('');
    const [toolCurrentLocation, setToolCurrentLocation] = React.useState('');
    const [toolUsageLocation, setToolUsageLocation] = React.useState('');
    const [toolOwnerDept, setToolOwnerDept] = React.useState('');
    const [toolOwnerName, setToolOwnerName] = React.useState('');
    const [toolCheckCompany, setToolCheckCompany] = React.useState('');
    const [toolCheckCost, setToolCheckCost] = React.useState('');
    const [toolAvailability, setToolAvailability] = React.useState(false);
    const [toolWorkability, setToolWorkability] = React.useState(false);
    const [toolDocAvailability, setToolDocAvailability] = React.useState(false);
    const [comment, setComment] = React.useState('');

    const handleNameRuChange = (event) => {
        setNameRU(event.target.value);
     }

    const handleNameEnChange = (event) => {
        setNameEN(event.target.value);
    }

    const handleToolIdChange = (event) => {
        setToolId(event.target.value);
    }

    const handleToolManufacturerChange = (event) => {
        setToolManufacturer(event.target.value);
    }

    const handleToolSerialNoChange = (event) => {
        setToolSerialNo(event.target.value);
    }

    const handleToolRegisterNoChange = (event) => {
        setToolRegisterNo(event.target.value);
    }

    const handleToolParametersChange = (event) => {
        setToolParameters(event.target.value);
    }

    const handleToolReceiveDateChange = (event) => {
        setToolReceiveDate(event.target.value);
    }

    const handleToolCheckDateChange = (event) => {
        setToolCheckDate(event.target.value);
    }

    const handleToolReadyDateChange = (event) => {
        setToolReadyDate(event.target.value);
    }

    const handleToolReleaseDateChange = (event) => {
        setToolReleaseDate(event.target.value);
    }

    const handleToolNextCheckDateChange = (event) => {
        setToolNextCheckDate(event.target.value);
    }

    const handleToolUsagePeriodChange = (event) => {
        setToolUsagePeriod(event.target.value);
    }

    const handleToolCertificateNoChange = (event) => {
        setToolCertificateNo(event.target.value);
    }

    const handleToolConditionChange = (event) => {
        setToolCondition(event.target.value);
    }

    const handleToolCurrentLocationChange = (event) => {
        setToolCurrentLocation(event.target.value);
    }

    const handleToolUsageLocationChange = (event) => {
        setToolUsageLocation(event.target.value);
    }

    const handleToolOwnerDeptChange = (event) => {
        setToolOwnerDept(event.target.value);
    }

    const handleToolOwnerNameChange = (event) => {
        setToolOwnerName(event.target.value);
    }

    const handleToolCheckCompanyChange = (event) => {
        setToolCheckCompany(event.target.value);
    }

    const handleToolCheckCostChange = (event) => {
        setToolCheckCost(event.target.value);
    }

    const handleToolAvailabilityChange = (event) => {
        setToolAvailability(event.target.checked);
    }

    const handleToolWorkabilityChange = (event) => {
        setToolWorkability(event.target.checked);
    }

    const handleToolDocAvailabilityChange = (event) => {
        setToolDocAvailability(event.target.checked);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    function handleNewToolAdd(event) {
        event.preventDefault();
  
        // Передаём значения управляемых компонентов во внешний обработчик
        handleToolScreenUpdate({
           toolNameRU: toolNameRU,
           toolNameEN: toolNameEN,
           toolId: toolId,
           toolManufacturer: toolManufacturer,
           toolSerialNo: toolSerialNo,
           toolRegisterNo: toolRegisterNo,
           toolParameters: toolParameters,
           toolReceiveDate: toolReceiveDate,
           toolCheckDate: toolCheckDate,
           toolReadyDate: toolReadyDate,
           toolReleaseDate: toolReleaseDate,
           toolNextCheckDate: toolNextCheckDate,
           toolUsagePeriod: toolUsagePeriod,
           toolCertificateNo: toolCertificateNo,
           toolCondition: toolCondition,
           toolCurrentLocation: toolCurrentLocation,
           toolUsageLocation: toolUsageLocation,
           toolOwnerDept: toolOwnerDept,
           toolOwnerName: toolOwnerName,
           toolCheckCompany: toolCheckCompany,
           toolCheckCost: toolCheckCost,
           toolAvailability: toolAvailability,
           toolWorkability: toolWorkability,
           toolDocAvailability: toolDocAvailability,
           comment: comment,
        });
    }

    function handleToolScreenUpdate(
        {
            toolNameRU,
            toolNameEN,
            toolId,
            toolManufacturer,
            toolSerialNo,
            toolRegisterNo,
            toolParameters,
            toolReceiveDate,
            toolCheckDate,
            toolReadyDate,
            toolReleaseDate,
            toolNextCheckDate,
            toolUsagePeriod,
            toolCertificateNo,
            toolCondition,
            toolCurrentLocation,
            toolUsageLocation,
            toolOwnerDept,
            toolOwnerName,
            toolCheckCompany,
            toolCheckCost,
            toolAvailability,
            toolWorkability,
            toolDocAvailability,
            comment,
        }) {
            const tool = {
                toolNameRU,
                toolNameEN,
                toolId,
                toolManufacturer,
                toolSerialNo,
                toolRegisterNo,
                toolParameters,
                toolReceiveDate,
                toolCheckDate,
                toolReadyDate,
                toolReleaseDate,
                toolNextCheckDate,
                toolUsagePeriod,
                toolCertificateNo,
                toolCondition,
                toolCurrentLocation,
                toolUsageLocation,
                toolOwnerDept,
                toolOwnerName,
                toolCheckCompany,
                toolCheckCost,
                toolAvailability,
                toolWorkability,
                toolDocAvailability,
                comment
            }
        mainApi.addTool(tool)
         .then((data) => {
            setSelectedTool(data);
            setNewToolAdded(true);
         })
         .catch((err) => {
            // handleErrorMessage();
            console.error(`Ошибка получения данных профиля: ${err}`);
            // setErrorMessage({
            //    message: err
            // })
         });
      }

      function handleFormClear() {
        setNameRU('');
        setNameEN('');
        setToolId('');
        setToolManufacturer('');
        setToolSerialNo('');
        setToolRegisterNo('');
        setToolParameters('');
        setToolReceiveDate('');
        setToolCheckDate('');
        setToolReadyDate('');
        setToolReleaseDate('');
        setToolNextCheckDate('');
        setToolUsagePeriod('');
        setToolCertificateNo('');
        setToolCondition('');
        setToolCurrentLocation();
        setToolUsageLocation('');
        setToolOwnerDept('');
        setToolOwnerName('');
        setToolCheckCompany('');
        setToolCheckCost('');
        setToolAvailability(false);
        setToolWorkability(false);
        setToolDocAvailability(false);
        setComment('');
      }

   return (
    <main className={`toolscreen ${isOpen ? 'toolscreen_opened' : ''}`}>
         <h1 className="toolscreen__title">Карточка средства измерения</h1>
         <form id='newToolForm' className="toolscreen__form" onSubmit={handleNewToolAdd}>
            <fieldset className='toolscreen__block'>
                <label htmlFor='newNameRU' className="toolscreen__item">Название RU</label>
                <textarea 
                    id='newNameRU' 
                    name='newNameRU'
                    className="toolscreen__input toolscreen__input_textarea"
                    type="text"
                    value={toolNameRU}
                    placeholder="Название на русском языке"
                    minLength={2}
                    maxLength={80}
                    onChange={handleNameRuChange}
                    required>
                </textarea>
                <label htmlFor='newNameEN' className="toolscreen__item">Название EN</label>
                <input 
                    id='newNameEN'
                    name='newNameEN'
                    className="toolscreen__input"
                    type="text"
                    value={toolNameEN}
                    placeholder="Название на английском языке"
                    minLength={2}
                    maxLength={40}
                    onChange={handleNameEnChange}
                    required>
                </input>
                <label htmlFor='newIdNo' className="toolscreen__item">Идентификационный номер</label>
                <input 
                    className="toolscreen__input"
                    id='newIdNo'
                    name='newIdNo'
                    type="text"
                    value={toolId}
                    placeholder="Например такой: 450701-0013"
                    minLength={2}
                    maxLength={20}
                    onChange={handleToolIdChange}
                    required>
                </input>
                <label htmlFor='newRegNo' className="toolscreen__item">Регистрационный номер типа СИ</label>
                <input 
                    className="toolscreen__input"
                    id='newRegNo'
                    name='newRegNo'
                    type="text"
                    value={toolRegisterNo}
                    placeholder="Регистрационный номер"
                    minLength={2}
                    maxLength={20}
                    onChange={handleToolRegisterNoChange}
                    required>
                </input>
                <label htmlFor='newSerialNo' className="toolscreen__item">Серийный номер</label>
                <input 
                    className="toolscreen__input"
                    id='newSerialNo'
                    name='newSerialNo'
                    type="text"
                    value={toolSerialNo}
                    placeholder="Серийный номер"
                    minLength={2}
                    maxLength={20}
                    onChange={handleToolSerialNoChange}
                    required>
                </input>
                <label htmlFor='newParameters' className="toolscreen__item">Параметры</label>
                <textarea 
                    className="toolscreen__input toolscreen__input_textarea"
                    id='newParameters'
                    name='newParameters'
                    type="text"
                    value={toolParameters}
                    placeholder="Например: Класс точности, Диапазон измерений, Тип присоединения, Диаметр корпуса"
                    onChange={handleToolParametersChange}
                    minLength={2}
                    maxLength={400}>
                </textarea>
                <label htmlFor='newCertificateNo' className="toolscreen__item">Номер сертификата</label>
                <input 
                    className="toolscreen__input"
                    id='newCertificateNo'
                    name='newCertificateNo'
                    type="text"
                    value={toolCertificateNo}
                    onChange={handleToolCertificateNoChange}
                    placeholder="Номер сертификата"
                    minLength={2}
                    maxLength={40}>
                </input>
                <label htmlFor='newCondition' className="toolscreen__item">Текущее состояние</label>
                <select 
                    className="toolscreen__input"
                    id='newCondition'
                    name='newCondition'
                    value={toolCondition}
                    onChange={handleToolConditionChange}
                    required>
                        <option value="">-- Выберите статус --</option>
                        <option value="Годен">Годен</option>
                        <option value="Не годен">Не годен</option>
                        <option value="Утерян">Утерян</option>
                        <option value="Сломан">Сломан</option>
                        <option value="Утилизирован">Утилизирован</option>
                        <option value="В процессе">В процессе</option>
                </select>
            </fieldset>

            <fieldset className='toolscreen__block'>
                <label htmlFor='newReceiveDate' className="toolscreen__item">Дата приёмки</label>
                <input 
                    id='newReceiveDate' 
                    name='newReceiveDate' 
                    className="toolscreen__input"
                    type="date"
                    value={toolReceiveDate}
                    onChange={handleToolReceiveDateChange}
                    required>
                </input>
                <label htmlFor='newCheckDate' className="toolscreen__item">Дата поверки/калибровки</label>
                <input 
                    id='newCheckDate' 
                    name='newCheckDate' 
                    className="toolscreen__input"
                    type="date"
                    value={toolCheckDate}
                    onChange={handleToolCheckDateChange}
                    required>
                </input>
                <label htmlFor='newReadyDate' className="toolscreen__item">Дата готовности</label>
                <input 
                    className="toolscreen__input"
                    id='newReadyDate'
                    name='newReadyDate'
                    type="date"
                    value={toolReadyDate}
                    onChange={handleToolReadyDateChange}
                    required>
                </input>
                <label htmlFor='newReleaseDate' className="toolscreen__item">Дата выдачи</label>
                <input 
                    className="toolscreen__input"
                    id='newReleaseDate'
                    name='newReleaseDate'
                    type="text"
                    value={toolReleaseDate}
                    onChange={handleToolReleaseDateChange}
                    placeholder="Дата выдачи"
                    minLength={2}
                    maxLength={20}>
                </input>
                <label htmlFor='newNextCheckDate' className="toolscreen__item">Дата следующей поверки/калибровки</label>
                <input 
                    id='newNextCheckDate' 
                    name='newNextCheckDate' 
                    className="toolscreen__input"
                    type="date"
                    value={toolNextCheckDate}
                    onChange={handleToolNextCheckDateChange}
                    required>
                </input>
                <label htmlFor='newUsagePeriod' className="toolscreen__item">Межповерочный интервал (МПИ)</label>
                <input 
                    className="toolscreen__input"
                    id='newUsagePeriod'
                    name='newUsagePeriod'
                    type="text"
                    value={toolUsagePeriod}
                    onChange={handleToolUsagePeriodChange}
                    placeholder="Количество дней"
                    required>
                </input>
                <label htmlFor='newOwnerDept' className="toolscreen__item">Ответственный департамент/цех</label>
                <input 
                    className="toolscreen__input"
                    id='newOwnerDept'
                    name='newOwnerDept'
                    type="text"
                    value={toolOwnerDept}
                    onChange={handleToolOwnerDeptChange}
                    placeholder="Например: Цех окраски"
                    minLength={2}
                    maxLength={40}
                    required>
                </input>
                <label htmlFor='newOwnerName' className="toolscreen__item">ФИО ответственного сотрудника</label>
                <input 
                    className="toolscreen__input"
                    id='newOwnerName'
                    name='newOwnerName'
                    type="text"
                    value={toolOwnerName}
                    onChange={handleToolOwnerNameChange}
                    placeholder="Например: Пригожин Евгений"
                    minLength={2}
                    maxLength={40}
                    required>
                </input>
                <label htmlFor='newUsageLocation' className="toolscreen__item">Место использования</label>
                <textarea 
                    className="toolscreen__input toolscreen__input_textarea"
                    id='newUsageLocation'
                    name='newUsageLocation'
                    type="text"
                    value={toolUsageLocation}
                    placeholder="Укажите где установлено данное оборудование"
                    onChange={handleToolUsageLocationChange}
                    minLength={2}
                    maxLength={400}>
                </textarea>
            </fieldset>

            <fieldset className='toolscreen__block toolscreen__block_checkbox'>
                <label htmlFor='newCurrentLocation' className="toolscreen__item">Текущее местонахождение</label>
                <input 
                    id='newCurrentLocation' 
                    name='newCurrentLocation' 
                    className="toolscreen__input"
                    type="text"
                    value={toolCurrentLocation}
                    onChange={handleToolCurrentLocationChange}
                    placeholder="Где сейчас оборудование? На поверке? В запасе?"
                    minLength={2}
                    maxLength={40}>
                </input>
                <label htmlFor='newManufacturer' className="toolscreen__item">Производитель</label>
                <input 
                    className="toolscreen__input"
                    id='newManufacturer'
                    name='newManufacturer'
                    type="text"
                    value={toolManufacturer}
                    placeholder="Название компании-производителя"
                    minLength={2}
                    maxLength={40}
                    onChange={handleToolManufacturerChange}
                    required>
                </input>
                <label htmlFor='newCheckCompany' className="toolscreen__item">Поверитель</label>
                <input 
                    id='newCheckCompany'
                    name='newCheckCompany'
                    className="toolscreen__input"
                    type="text"
                    value={toolCheckCompany}
                    onChange={handleToolCheckCompanyChange}
                    placeholder="Название компании-поверителя"
                    minLength={2}
                    maxLength={40}>
                </input>
                <label htmlFor='newCheckCost' className="toolscreen__item">Стоимость поверки/калибровки</label>
                <input 
                    className="toolscreen__input"
                    id='newCheckCost'
                    name='newCheckCost'
                    type="text"
                    value={toolCheckCost}
                    onChange={handleToolCheckCostChange}
                    placeholder="Стоимость в рублях">
                </input>
                <label htmlFor='newAvailability' className="toolscreen__item toolscreen__item_checkbox">Есть в наличии?</label>
                <input 
                    className="toolscreen__input toolscreen__input_checkbox-avail"
                    id='newAvailability'
                    name='newAvailability'
                    value={toolAvailability}
                    onChange={handleToolAvailabilityChange}
                    type="checkbox">
                </input>
                <label htmlFor='newWorkability' className="toolscreen__item toolscreen__item_checkbox">Установлено и исправно работает?</label>
                <input 
                    id='newWorkability'
                    name='newWorkability'
                    className="toolscreen__input toolscreen__input_checkbox-work"
                    value={toolWorkability}
                    onChange={handleToolWorkabilityChange}
                    type="checkbox">
                </input>
                <label htmlFor='newDocument' className="toolscreen__item toolscreen__item_checkbox">Документы в порядке?</label>
                <input 
                    className="toolscreen__input toolscreen__input_checkbox-doc"
                    id='newDocument'
                    name='newDocument'
                    value={toolDocAvailability}
                    onChange={handleToolDocAvailabilityChange}
                    type="checkbox">
                </input>
                <label htmlFor='newComment' className="toolscreen__item toolscreen__item_comment">Комментарий</label>
                <textarea 
                    className="toolscreen__input toolscreen__input_textarea"
                    id='newComment'
                    name='newComment'
                    form='toolForm'
                    type="textarea"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Добавьте ваш комментарий"
                    minLength={2}
                    maxLength={400}>
                </textarea>
                {isNewToolAdded && <span className='toolscreen__infotooltip'>Новое СИ успешно добавлено</span>}
            </fieldset>
            <button type="button" className="toolscreen__close" onClick={onClose} />
            <button type="submit" className="toolscreen__button">Сохранить</button>
            <button type="button" className="toolscreen__button toolscreen__button_clear" onClick={handleFormClear}>Очистить форму</button>
         </form>
      </main >
   )
}

export default NewToolScreen;