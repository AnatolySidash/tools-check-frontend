import React from 'react';
import mainApi from '../../utils/MainApi.js';
import { useInput } from '../../utils/Validation.js';

function NewToolScreen({ onClose, isOpen, setSelectedTool, isNewToolAdded, setNewToolAdded }) {

    const [toolNameRU, setNameRU] = React.useState('');
    const [toolNameEN, setNameEN] = React.useState('');
    const [toolModel, setToolModel] = React.useState('');
    const [toolId, setToolId] = React.useState('');
    const [toolType, setToolType] = React.useState('');
    const [toolManufacturer, setToolManufacturer] = React.useState('');
    const [toolSerialNo, setToolSerialNo] = React.useState('');
    const [toolRegisterNo, setToolRegisterNo] = React.useState('');
    const [toolParameters, setToolParameters] = React.useState('');
    const [toolCheckDate, setToolCheckDate] = React.useState('');
    const [toolCategory, setToolCategory] = React.useState('');
    const [toolNextCheckDate, setToolNextCheckDate] = React.useState('');
    const [toolUsagePeriod, setToolUsagePeriod] = React.useState('');
    const [toolRemainUsagePeriod, setToolRemainUsagePeriod] = React.useState('');
    const [toolCertificateNo, setToolCertificateNo] = React.useState('');
    const [toolCondition, setToolCondition] = React.useState('');
    const [toolCalibrationStatus, setToolCalibrationStatus] = React.useState('');
    const [toolCurrentLocation, setToolCurrentLocation] = React.useState('');
    const [toolUsageLocation, setToolUsageLocation] = React.useState('');
    const [toolInstalledLocation, setToolInstalledLocation] = React.useState('');
    const [toolOwnerDept, setToolOwnerDept] = React.useState('');
    const [toolOwnerSection, setToolOwnerSection] = React.useState('');
    const [toolOwnerName, setToolOwnerName] = React.useState('');
    const [toolCheckCompany, setToolCheckCompany] = React.useState('');
    const [comment, setComment] = React.useState('');

    // Валидация

    const toolNameRUValid = useInput(toolNameRU, { isEmpty: true, minLength: 2 });
    const toolNameENValid = useInput(toolNameEN, { isEmpty: true, minLength: 2 });
    const toolTypeValid = useInput(toolType, { isEmpty: true });
    const toolCategoryValid = useInput(toolCategory, { isEmpty: true });
    const toolOwnerDeptValid = useInput(toolOwnerDept, { isEmpty: true });
    const toolOwnerSectionValid = useInput(toolOwnerSection, { isEmpty: true });
    const toolOwnerNameValid = useInput(toolOwnerName, { isEmpty: true, minLength: 2 });
    const toolUsageLocationValid = useInput(toolUsageLocation, { isEmpty: true, minLength: 2 });
    const toolCurrentLocationValid = useInput(toolCurrentLocation, { isEmpty: true, minLength: 2 });
    const toolInstalledLocationValid = useInput(toolInstalledLocation, { isEmpty: true, minLength: 2 });

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

    function handleToolUsagePeriod() {
        if(toolUsagePeriod) {
            setToolUsagePeriod(toolUsagePeriod);
        } else {
            setToolUsagePeriod(365);
        }
    }

    function handleToolCheckDate() {
        if(toolCheckDate) {
            setToolCheckDate(toolCheckDate);
        } else {
            setToolCheckDate(new Date().toISOString().slice(0, 10));
        }
    }

    const handleToolModelChange = (event) => {
        setToolModel(event.target.value);
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

    const handleToolCheckDateChange = (event) => {
        setToolCheckDate(event.target.value);
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

    const handleToolCalibrationStatusChange = (event) => {
        setToolCalibrationStatus(event.target.value);
    }

    const handleToolCheckCompanyChange = (event) => {
        setToolCheckCompany(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    function handleNewToolAdd(event) {
        event.preventDefault();
  
        handleToolScreenUpdate({
           toolNameRU: toolNameRUValid.value,
           toolNameEN: toolNameENValid.value,
           toolModel: toolModel,
           toolId: toolId,
           toolType: toolTypeValid.value,
           toolManufacturer: toolManufacturer,
           toolSerialNo: toolSerialNo,
           toolRegisterNo: toolRegisterNo,
           toolParameters: toolParameters,
           toolCheckDate: handleToolCheckDate(),
           toolCategory: toolCategoryValid.value,
           toolNextCheckDate: handleNextCheckDate(),
           toolUsagePeriod: handleToolUsagePeriod(),
           toolRemainUsagePeriod: toolRemainUsagePeriod,
           toolCertificateNo: toolCertificateNo,
           toolCondition: toolCondition,
           toolCalibrationStatus: changeToolCalibrationStatus(),
           toolCurrentLocation: toolCurrentLocationValid.value,
           toolUsageLocation: toolUsageLocationValid.value,
           toolInstalledLocation: toolInstalledLocationValid.value,
           toolOwnerDept: toolOwnerDeptValid.value,
           toolOwnerSection: toolOwnerSectionValid.value,
           toolOwnerName: toolOwnerNameValid.value,
           toolCheckCompany: toolCheckCompany,
           comment: comment,
        });
    }

    function handleToolScreenUpdate(
        {
            toolNameRU,
            toolNameEN,
            toolModel,
            toolId,
            toolType,
            toolManufacturer,
            toolSerialNo,
            toolRegisterNo,
            toolParameters,
            toolCheckDate,
            toolCategory,
            toolNextCheckDate,
            toolUsagePeriod,
            toolRemainUsagePeriod,
            toolCertificateNo,
            toolCondition,
            toolCalibrationStatus,
            toolCurrentLocation,
            toolUsageLocation,
            toolInstalledLocation,
            toolOwnerDept,
            toolOwnerSection,
            toolOwnerName,
            toolCheckCompany,
            comment,
        }) {
            const tool = {
                toolNameRU,
                toolNameEN,
                toolModel,
                toolId,
                toolType,
                toolManufacturer,
                toolSerialNo,
                toolRegisterNo,
                toolParameters,
                toolCheckDate,
                toolCategory,
                toolNextCheckDate,
                toolUsagePeriod,
                toolRemainUsagePeriod,
                toolCertificateNo,
                toolCondition,
                toolCalibrationStatus,
                toolCurrentLocation,
                toolUsageLocation,
                toolInstalledLocation,
                toolOwnerDept,
                toolOwnerSection,
                toolOwnerName,
                toolCheckCompany,
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

    //   function handleFormClear() {
    //     setNameRU('');
    //     setNameEN('');
    //     setToolModel('')
    //     setToolId('');
    //     setToolType('');
    //     setToolManufacturer('');
    //     setToolSerialNo('');
    //     setToolRegisterNo('');
    //     setToolParameters('');
    //     setToolCheckDate('');
    //     setToolCategory('');
    //     setToolNextCheckDate('');
    //     setToolUsagePeriod('');
    //     setToolRemainUsagePeriod('');
    //     setToolCertificateNo('');
    //     setToolCondition('');
    //     setToolCalibrationStatus('');
    //     setToolCurrentLocation();
    //     setToolUsageLocation('');
    //     setToolInstalledLocation('');
    //     setToolOwnerDept('');
    //     setToolOwnerSection('');
    //     setToolOwnerName('');
    //     setToolCheckCompany('');
    //     setComment('');
    //   }

   return (
    <main className={`toolscreen ${isOpen ? 'toolscreen_opened' : ''}`}>
         <h1 className="toolscreen__title">Карточка средства измерения</h1>
         <form id='newToolForm' className="toolscreen__form" onSubmit={handleNewToolAdd}>
            <fieldset className='toolscreen__block'>
                <label htmlFor='newNameRU' className="toolscreen__item">Название RU*</label>
                <textarea 
                    id='newNameRU' 
                    name='newNameRU'
                    className="toolscreen__input toolscreen__input_user toolscreen__input_textarea"
                    type="text"
                    value={toolNameRUValid.value}
                    placeholder="Название на русском языке"
                    minLength={2}
                    maxLength={150}
                    onChange={(e) => toolNameRUValid.onChange(e)}
                    onBlur={(e) => toolNameRUValid.onBlur(e)}
                    required>
                </textarea>
                {(toolNameRUValid.isDirty && toolNameRUValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                {(toolNameRUValid.isDirty && toolNameRUValid.minLengthError) && <span className="toolscreen__input-error">Не менее 2-х символов</span>}
                <label htmlFor='newNameEN' className="toolscreen__item">Название EN*</label>
                <input 
                    id='newNameEN'
                    name='newNameEN'
                    className="toolscreen__input toolscreen__input_user"
                    type="text"
                    value={toolNameENValid.value}
                    placeholder="Название на английском языке"
                    minLength={2}
                    maxLength={100}
                    onChange={(e) => toolNameENValid.onChange(e)}
                    onBlur={(e) => toolNameENValid.onBlur(e)}
                    required>
                </input>
                {(toolNameENValid.isDirty && toolNameENValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                {(toolNameENValid.isDirty && toolNameENValid.minLengthError) && <span className="toolscreen__input-error">Не менее 2-х символов</span>}
                <label htmlFor='newModel' className="toolscreen__item">Модель СИ</label>
                <input 
                    id='newModel'
                    name='newModel'
                    className="toolscreen__input toolscreen__input_user"
                    type="text"
                    value={toolModel}
                    placeholder="Например: ДМ2005Ф"
                    minLength={2}
                    maxLength={100}
                    onChange={handleToolModelChange}>
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
                    maxLength={40}
                    onChange={handleToolIdChange}
                    >
                </input>
                <label htmlFor='newRegNo' className="toolscreen__item">Регистрационный номер типа СИ</label>
                <input 
                    className="toolscreen__input"
                    id='newRegNo'
                    name='newRegNo'
                    type="text"
                    value={toolRegisterNo}
                    placeholder="Регистрационный номер типа СИ"
                    minLength={2}
                    maxLength={40}
                    onChange={handleToolRegisterNoChange}
                    >
                </input>
                <label htmlFor='newSerialNo' className="toolscreen__item">Серийный номер</label>
                <input 
                    className="toolscreen__input toolscreen__input_user"
                    id='newSerialNo'
                    name='newSerialNo'
                    type="text"
                    value={toolSerialNo}
                    placeholder="Серийный номер от производителя"
                    minLength={2}
                    maxLength={80}
                    onChange={handleToolSerialNoChange}
                    >
                </input>
                <label htmlFor='newParameters' className="toolscreen__item">Параметры</label>
                <textarea 
                    className="toolscreen__input toolscreen__input_user toolscreen__input_textarea"
                    id='newParameters'
                    name='newParameters'
                    type="text"
                    value={toolParameters}
                    placeholder="Например: Класс точности, Диапазон измерений, Тип присоединения, Диаметр корпуса"
                    onChange={handleToolParametersChange}
                    minLength={2}
                    maxLength={600}>
                </textarea>
                <label htmlFor='newcalibration_status' className="toolscreen__item">Статус поверки/калибровки</label>
                <select 
                    className="toolscreen__input"
                    id='newcalibration_status'
                    name='newcalibration_status'
                    type="text"
                    value={toolCalibrationStatus}
                    onChange={handleToolCalibrationStatusChange}
                    >
                        <option value="">-- Выберите статус --</option>
                        <option value="Годен">Годен</option>
                        <option value="Не годен">Не годен</option>
                </select>
                <label htmlFor='newCondition' className="toolscreen__item">Текущее состояние*</label>
                <select 
                    className="toolscreen__input"
                    id='newCondition'
                    name='newCondition'
                    type="text"
                    value={toolCondition}
                    onChange={handleToolConditionChange}
                    required>
                        <option value="">-- Выберите состояние --</option>
                        <option value="Требуется регистрация">Требуется регистрация</option>
                </select>
            </fieldset>

            <fieldset className='toolscreen__block'>
            <label htmlFor='newType' className="toolscreen__item">Тип СИ*</label>
                <select 
                    id='newType' 
                    name='newType' 
                    className="toolscreen__input toolscreen__input_user"
                    type="text"
                    value={toolTypeValid.value}
                    onChange={(e) => toolTypeValid.onChange(e)}
                    onBlur={(e) => toolTypeValid.onBlur(e)}
                    required>
                        <option value="">-- Выберите тип СИ --</option>
                        <option value="Переносной">Переносной</option>
                        <option value="Стационарный">Стационарный</option>
                </select>
                {(toolTypeValid.isDirty && toolTypeValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                <label htmlFor='newCategory' className="toolscreen__item">Категория*</label>
                <select 
                    id='newCategory' 
                    name='newCategory' 
                    className="toolscreen__input toolscreen__input_user"
                    type="text"
                    value={toolCategoryValid.value}
                    onChange={(e) => toolCategoryValid.onChange(e)}
                    onBlur={(e) => toolCategoryValid.onBlur(e)}
                    required>
                        <option value="">-- Выберите категорию --</option>
                        <option value="Газоанализаторы">Газоанализаторы</option>
                        <option value="Манометры">Манометры</option>
                        <option value="Термометры">Термометры</option>
                        <option value="Приборы">Приборы</option>
                        <option value="Инструменты">Инструменты</option>
                        <option value="Другое оборудование">Другое оборудование</option>
                </select>
                {(toolCategoryValid.isDirty && toolCategoryValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                <label htmlFor='newCheckDate' className="toolscreen__item">Дата поверки/калибровки</label>
                <input 
                    id='newCheckDate' 
                    name='newCheckDate' 
                    className="toolscreen__input"
                    type="date"
                    value={toolCheckDate}
                    onChange={handleToolCheckDateChange}>
                </input>
                <label htmlFor='newUsagePeriod' className="toolscreen__item">Межповерочный интервал (МПИ)</label>
                <input 
                    className="toolscreen__input"
                    id='newUsagePeriod'
                    name='newUsagePeriod'
                    type="text"
                    value={toolUsagePeriod}
                    onChange={handleToolUsagePeriodChange}
                    placeholder="Количество дней, например: 365"
                    minLength={2}
                    maxLength={5}>
                </input>
                <label htmlFor='newCertificateNo' className="toolscreen__item">Номер сертификата</label>
                <input 
                    className="toolscreen__input"
                    id='newCertificateNo'
                    name='newCertificateNo'
                    type="text"
                    value={toolCertificateNo}
                    onChange={handleToolCertificateNoChange}
                    placeholder="Например: С-ЕВЧ/14-02-2023/223467711"
                    minLength={2}
                    maxLength={100}>
                </input>
                <label htmlFor='newNextCheckDate' className="toolscreen__item">Дата следующей поверки/калибровки</label>
                <input 
                    id='newNextCheckDate' 
                    name='newNextCheckDate' 
                    className="toolscreen__input"
                    type="date"
                    value={toolNextCheckDate}
                    onChange={handleToolNextCheckDateChange}
                    >
                </input>
                <label htmlFor='newRemainUsagePeriod' className="toolscreen__item">Остаток дней до поверки/калибровки</label>
                <input 
                    id='newRemainUsagePeriod' 
                    name='newRemainUsagePeriod' 
                    className="toolscreen__input"
                    type="number"
                    value={toolRemainUsagePeriod}
                    onChange={handleToolRemainUsagePeriodChange}>
                </input>
                <label htmlFor='newOwnerDept' className="toolscreen__item">Ответственный департамент/цех*</label>
                <select 
                    className="toolscreen__input toolscreen__input_user"
                    id='newOwnerDept'
                    name='newOwnerDept'
                    value={toolOwnerDeptValid.value}
                    onChange={(e) => toolOwnerDeptValid.onChange(e)}
                    onBlur={(e) => toolOwnerDeptValid.onBlur(e)}
                    required>
                        <option value="">-- Выберите из списка --</option>
                        <option value="QA">QA</option>
                        <option value="QC">QC</option>
                        <option value="Stamping shop">Stamping shop</option>
                        <option value="Welding shop">Welding shop</option>
                        <option value="Paint shop">Paint shop</option>
                        <option value="Assembly shop">Assembly shop</option>
                        <option value="PM">PM</option>
                        <option value="PE&S">PE&S</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="R&D">R&D</option>
                </select>
                {(toolOwnerDeptValid.isDirty && toolOwnerDeptValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                <label htmlFor='newOwnerSection' className="toolscreen__item">Ответственный отдел*</label>
                <select 
                    className="toolscreen__input toolscreen__input_user"
                    id='newOwnerSection'
                    name='newOwnerSection'
                    value={toolOwnerSectionValid.value}
                    onChange={(e) => toolOwnerSectionValid.onChange(e)}
                    onBlur={(e) => toolOwnerSectionValid.onBlur(e)}
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
                        <option value="Stamping shop">Stamping shop</option>
                        <option value="Welding shop">Welding shop</option>
                        <option value="Paint shop">Paint shop</option>
                        <option value="Assembly shop">Assembly shop</option>
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
                {(toolOwnerSectionValid.isDirty && toolOwnerSectionValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                <label htmlFor='newOwnerName' className="toolscreen__item">ФИО ответственного сотрудника*</label>
                <input 
                    className="toolscreen__input toolscreen__input_user"
                    id='newOwnerName'
                    name='newOwnerName'
                    type="text"
                    value={toolOwnerNameValid.value}
                    onChange={(e) => toolOwnerNameValid.onChange(e)}
                    onBlur={(e) => toolOwnerNameValid.onBlur(e)}
                    placeholder="Например: Пушкин Александр"
                    minLength={2}
                    maxLength={40}
                    required>
                </input>
                {(toolOwnerNameValid.isDirty && toolOwnerNameValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                {(toolOwnerNameValid.isDirty && toolOwnerNameValid.minLengthError) && <span className="toolscreen__input-error">Не менее 2-х символов</span>}
            </fieldset>

            <fieldset className='toolscreen__block toolscreen__block_checkbox'>
                <label htmlFor='newUsageLocation' className="toolscreen__item">Место нахождения*</label>
                <textarea 
                    className="toolscreen__input toolscreen__input_user toolscreen__input_textarea"
                    id='newUsageLocation'
                    name='newUsageLocation'
                    type="text"
                    value={toolUsageLocationValid.value}
                    placeholder="Укажите цех/департамент/линию, где находится данное средство измерения"
                    onChange={(e) => toolUsageLocationValid.onChange(e)}
                    onBlur={(e) => toolUsageLocationValid.onBlur(e)}
                    minLength={2}
                    maxLength={100}
                    required>
                </textarea>
                {(toolUsageLocationValid.isDirty && toolUsageLocationValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                {(toolUsageLocationValid.isDirty && toolUsageLocationValid.minLengthError) && <span className="toolscreen__input-error">Не менее 2-х символов</span>}
                <label htmlFor='newCurrentLocation' className="toolscreen__item">Место расположения*</label>
                <textarea 
                    id='newCurrentLocation' 
                    name='newCurrentLocation' 
                    className="toolscreen__input toolscreen__input_user toolscreen__input_textarea"
                    type="text"
                    value={toolCurrentLocationValid.value}
                    onChange={(e) => toolCurrentLocationValid.onChange(e)}
                    onBlur={(e) => toolCurrentLocationValid.onBlur(e)}
                    placeholder="Укажите участок/станцию/помещение, где находится данное средство измерения"
                    minLength={2}
                    maxLength={100}
                    required>
                </textarea>
                {(toolCurrentLocationValid.isDirty && toolCurrentLocationValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                {(toolCurrentLocationValid.isDirty && toolCurrentLocationValid.minLengthError) && <span className="toolscreen__input-error">Не менее 2-х символов</span>}
                <label htmlFor='newInstallLocation' className="toolscreen__item">Место установки*</label>
                <textarea
                    id='newInstallLocation' 
                    name='newInstallLocation' 
                    className="toolscreen__input toolscreen__input_user toolscreen__input_textarea"
                    type="text"
                    value={toolInstalledLocationValid.value}
                    onChange={(e) => toolInstalledLocationValid.onChange(e)}
                    onBlur={(e) => toolInstalledLocationValid.onBlur(e)}
                    placeholder="Укажите оборудование, на котором установлено данное средство измерения"
                    minLength={2}
                    maxLength={100}
                    required>
                </textarea>
                {(toolInstalledLocationValid.isDirty && toolInstalledLocationValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                <label htmlFor='newManufacturer' className="toolscreen__item">Производитель</label>
                <input 
                    className="toolscreen__input toolscreen__input_user"
                    id='newManufacturer'
                    name='newManufacturer'
                    type="text"
                    value={toolManufacturer}
                    placeholder="Например: ЗАО Эталон"
                    minLength={2}
                    maxLength={100}
                    onChange={handleToolManufacturerChange}
                    >
                </input>
                <label htmlFor='newCheckCompany' className="toolscreen__item">Поверитель</label>
                <input 
                    id='newCheckCompany'
                    name='newCheckCompany'
                    className="toolscreen__input"
                    type="text"
                    value={toolCheckCompany}
                    onChange={handleToolCheckCompanyChange}
                    placeholder="Например: РМЦ Калиброн"
                    minLength={2}
                    maxLength={80}>
                </input>
                <label htmlFor='newComment' className="toolscreen__item toolscreen__item_comment">Комментарий</label>
                <textarea 
                    className="toolscreen__input toolscreen__input_user toolscreen__input_textarea"
                    id='newComment'
                    name='newComment'
                    form='toolForm'
                    type="textarea"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Добавьте ваш комментарий"
                    minLength={2}
                    maxLength={600}>
                </textarea>
                <p className='toolscreen__comment'>* обязательное поле</p>
                {isNewToolAdded && <span className='toolscreen__infotooltip'>Новое СИ успешно добавлено</span>}
            </fieldset>
            <button type="button" className="toolscreen__close" onClick={onClose} />
            <button type="submit" className="toolscreen__button">Сохранить</button>
            {/* <button type="button" className="toolscreen__button toolscreen__button_clear" onClick={handleFormClear}>Очистить форму</button> */}
         </form>
      </main >
   )
}

export default NewToolScreen;