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
    const [toolRemainUsagePeriod, setToolRemainUsagePeriod] = React.useState('');
    const [toolCertificateNo, setToolCertificateNo] = React.useState('');
    const [toolCondition, setToolCondition] = React.useState('');
    const [toolCalibrationStatus, setToolCalibrationStatus] = React.useState('');
    const [toolCurrentLocation, setToolCurrentLocation] = React.useState('');
    const [toolUsageLocation, setToolUsageLocation] = React.useState('');
    const [toolOwnerDept, setToolOwnerDept] = React.useState('');
    const [toolOwnerSection, setToolOwnerSection] = React.useState('');
    const [toolOwnerName, setToolOwnerName] = React.useState('');
    const [toolCheckCompany, setToolCheckCompany] = React.useState('');
    const [toolCheckCost, setToolCheckCost] = React.useState('');
    const [comment, setComment] = React.useState('');

    function handleNextCheckDate() {
        const newDate = new Date(toolCheckDate);
        newDate.setDate(newDate.getDate() + Number(toolUsagePeriod));
        return newDate.toISOString().slice(0, 10);
    }

    function checkDayDifference() {
        const todayDate = new Date();
        const nextCheckDate = new Date(toolNextCheckDate);
        return Math.round((nextCheckDate - todayDate) / (60 * 60 * 24 * 1000));
    }

    function changeToolCalibrationStatus() {
        const dayDifference = checkDayDifference();
        if (dayDifference > 0) {
            return 'Годен';
        } else {
            return 'Не годен';
        }
    }

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

    const handleToolRemainUsagePeriodChange = (event) => {
        setToolRemainUsagePeriod(event.target.value);
    }

    const handleToolCertificateNoChange = (event) => {
        setToolCertificateNo(event.target.value);
    }

    const handleToolConditionChange = (event) => {
        setToolCondition(event.target.value);
    }

    const handleToolCalibarionStatusChange = (event) => {
        setToolCalibrationStatus(event.target.value);
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

    const handleToolOwnerSectionChange = (event) => {
        setToolOwnerSection(event.target.value);
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
           toolNextCheckDate: handleNextCheckDate(),
           toolUsagePeriod: toolUsagePeriod,
           toolRemainUsagePeriod: toolRemainUsagePeriod,
           toolCertificateNo: toolCertificateNo,
           toolCondition: toolCondition,
           toolCalibrationStatus: changeToolCalibrationStatus(),
           toolCurrentLocation: toolCurrentLocation,
           toolUsageLocation: toolUsageLocation,
           toolOwnerDept: toolOwnerDept,
           toolOwnerSection: toolOwnerSection,
           toolOwnerName: toolOwnerName,
           toolCheckCompany: toolCheckCompany,
           toolCheckCost: toolCheckCost,
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
            toolRemainUsagePeriod,
            toolCertificateNo,
            toolCondition,
            toolCalibrationStatus,
            toolCurrentLocation,
            toolUsageLocation,
            toolOwnerDept,
            toolOwnerSection,
            toolOwnerName,
            toolCheckCompany,
            toolCheckCost,
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
                toolRemainUsagePeriod,
                toolCertificateNo,
                toolCondition,
                toolCalibrationStatus,
                toolCurrentLocation,
                toolUsageLocation,
                toolOwnerDept,
                toolOwnerSection,
                toolOwnerName,
                toolCheckCompany,
                toolCheckCost,
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
        setToolRemainUsagePeriod('');
        setToolCertificateNo('');
        setToolCondition('');
        setToolCalibrationStatus('');
        setToolCurrentLocation();
        setToolUsageLocation('');
        setToolOwnerDept('');
        setToolOwnerSection('');
        setToolOwnerName('');
        setToolCheckCompany('');
        setToolCheckCost('');
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
                <label htmlFor='newcalibration_status' className="toolscreen__item">Статус поверки/калибровки</label>
                <select 
                    className="toolscreen__input"
                    id='newcalibration_status'
                    name='newcalibration_status'
                    value={toolCalibrationStatus}
                    onChange={handleToolCalibarionStatusChange}
                    required>
                        <option value="">-- Выберите статус --</option>
                        <option value="Годен">Годен</option>
                        <option value="Не годен">Не годен</option>
                </select>
                <label htmlFor='newCondition' className="toolscreen__item">Текущее состояние</label>
                <select 
                    className="toolscreen__input"
                    id='newCondition'
                    name='newCondition'
                    value={toolCondition}
                    onChange={handleToolConditionChange}
                    required>
                        <option value="">-- Выберите статус --</option>
                        <option value="Требуется регистрация">Требуется регистрация</option>
                        <option value="Используется">Используется</option>
                        <option value="На хранении">На хранении</option>
                        <option value="Утерян">Утерян</option>
                        <option value="Сломан">Сломан</option>
                        <option value="Утилизирован">Утилизирован</option>
                        <option value="На поверке">На поверке</option>
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
                <label htmlFor='newOwnerDept' className="toolscreen__item">Ответственный департамент/цех</label>
                <select 
                    className="toolscreen__input"
                    id='newOwnerDept'
                    name='newOwnerDept'
                    value={toolOwnerDept}
                    onChange={handleToolOwnerDeptChange}
                    required>
                        <option value="">-- Выберите из списка --</option>
                        <option value="QA">QA</option>
                        <option value="QC">QC</option>
                        <option value="Stamping">Stamping</option>
                        <option value="Welding">Welding</option>
                        <option value="Paint">Paint</option>
                        <option value="Assembly">Assembly</option>
                        <option value="PM">PM</option>
                        <option value="PE&S">PE&S</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="R&D">R&D</option>
                </select>
                <label htmlFor='newOwnerSection' className="toolscreen__item">Ответственный отдел</label>
                <select 
                    className="toolscreen__input"
                    id='newOwnerSection'
                    name='newOwnerSection'
                    value={toolOwnerSection}
                    onChange={handleToolOwnerSectionChange}
                    required>
                        <option value="">-- Выберите из списка --</option>
                        <option value="QA Information">QA Information</option>
                        <option value="QA Improvement">QA Improvement</option>
                        <option value="QA Test">QA Test</option>
                        <option value="QC Assembly">QC Assembly</option>
                        <option value="QC Welding">QC Welding</option>
                        <option value="QC Painting">QC Painting</option>
                        <option value="QC Parts">QC Parts</option>
                        <option value="QC Management">QC Management</option>
                        <option value="Stamping">Stamping</option>
                        <option value="Welding">Welding</option>
                        <option value="Paint">Paint</option>
                        <option value="Assembly">Assembly</option>
                        <option value="PM">PM</option>
                        <option value="PE&S Fire Safety">PE&S Fire Safety</option>
                        <option value="PE&S Utility">PE&S Utility</option>
                        <option value="PE&S Mechanical">PE&S Mechanical</option>
                        <option value="PE&S Construction">PE&S Construction</option>
                        <option value="PE&S Labor & Industrial Safety, Ecology">PE&S Labor & Industrial Safety, Ecology</option>
                        <option value="Maintenance Stamping">Maintenance Stamping</option>
                        <option value="Maintenance Welding">Maintenance Welding</option>
                        <option value="Maintenance Painting">Maintenance Painting</option>
                        <option value="Maintenance Assembly">Maintenance Assembly</option>
                        <option value="R&D">R&D</option>
                </select>
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
            <label htmlFor='newRemainUsagePeriod' className="toolscreen__item">Остаток дней до поверки/калибровки</label>
                <input 
                    id='newRemainUsagePeriod' 
                    name='newRemainUsagePeriod' 
                    className="toolscreen__input"
                    type="number"
                    value={toolRemainUsagePeriod}
                    onChange={handleToolRemainUsagePeriodChange}>
                </input>
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