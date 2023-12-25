import React from 'react';
import mainApi from '../../utils/MainApi.js';
import { useInput } from '../../utils/Validation.js';


function ToolScreen({ tool, onClose, isOpen, setTools, isToolInfoUpdated, setToolInfoUpdated, isToolInfoDeleted, setToolInfoDeleted, submitButtonActive, setSubmitDataActive, setToolDeleteConfirm, toolDeleteConfirm, personList, isError, setError, errorMessage, setErrorMessage, isSubmitting, setIsSubmitting }) {

    const [toolNameRU, setNameRU] = React.useState('');
    const [toolNameEN, setNameEN] = React.useState('');
    const [toolModel, setToolModel] = React.useState('');
    const [toolId, setToolId] = React.useState('');
    const [toolType, setToolType] = React.useState('');
    const [toolManufacturer, setToolManufacturer] = React.useState('');
    const [toolSerialNo, setToolSerialNo] = React.useState('');
    const [toolRegisterNo, setToolRegisterNo] = React.useState('');
    const [toolParameters, setToolParameters] = React.useState('');
    const [toolCheckDate, setToolCheckDate] = React.useState(Date);
    const [toolCategory, setToolCategory] = React.useState('');
    const [toolNextCheckDate, setToolNextCheckDate] = React.useState(Date);
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

    React.useEffect(() => {
        if (tool) {
            setNameRU(tool.toolNameRU);
            setNameEN(tool.toolNameEN);
            setToolModel(tool.toolModel);
            setToolId(tool.toolId);
            setToolType(tool.toolType);
            setToolManufacturer(tool.toolManufacturer);
            setToolSerialNo(tool.toolSerialNo);
            setToolRegisterNo(tool.toolRegisterNo);
            setToolParameters(tool.toolParameters);
            setToolCheckDate(tool.toolCheckDate.slice(0, 10));
            setToolCategory(tool.toolCategory);
            setToolNextCheckDate(tool.toolNextCheckDate.slice(0, 10));
            setToolUsagePeriod(tool.toolUsagePeriod);
            setToolRemainUsagePeriod(checkDayDifference());
            setToolCertificateNo(tool.toolCertificateNo);
            setToolCondition(tool.toolCondition);
            setToolCalibrationStatus(changeToolCalibrationStatus());
            setToolCurrentLocation(tool.toolCurrentLocation);
            setToolUsageLocation(tool.toolUsageLocation);
            setToolInstalledLocation(tool.toolInstalledLocation);
            setToolOwnerDept(tool.toolOwnerDept);
            setToolOwnerSection(tool.toolOwnerSection);
            setToolOwnerName(tool.toolOwnerName);
            setToolCheckCompany(tool.toolCheckCompany);
            setComment(tool.comment);
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [tool, isOpen, onClose, setToolInfoUpdated, setToolInfoDeleted]);

    // Валидация

    const toolNameRUValid = useInput(toolNameRU, { isEmpty: true, minLength: 2 });
    const toolNameENValid = useInput(toolNameEN, { isEmpty: true, minLength: 2 });
    const toolIdValid = useInput(toolId, { isEmpty: true, minLength: 5 });
    const toolConditionValid = useInput(toolCondition, { isEmpty: true });
    const toolTypeValid = useInput(toolType, { isEmpty: true });
    const toolCheckDateValid = useInput(toolCheckDate, { isEmpty: true });
    const toolCategoryValid = useInput(toolCategory, { isEmpty: true });
    const toolUsagePeriodValid = useInput(toolUsagePeriod, { isEmpty: true });
    const toolOwnerDeptValid = useInput(toolOwnerDept, { isEmpty: true });
    const toolOwnerSectionValid = useInput(toolOwnerSection, { isEmpty: true });
    const toolOwnerNameValid = useInput(toolOwnerName, { isEmpty: true, minLength: 2 });
    const toolUsageLocationValid = useInput(toolUsageLocation, { isEmpty: true, minLength: 2 });
    const toolCurrentLocationValid = useInput(toolCurrentLocation, { isEmpty: true, minLength: 2 });
    const toolInstalledLocationValid = useInput(toolInstalledLocation, { isEmpty: true, minLength: 2 });

    function onToolDataChange() {
        setSubmitDataActive(true)
     }

    // Расчёт следующей даты калибровки

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
    
    function handleErrorMessage() {
        setError(true);
    }

    function handleNameAutocomplete(searchValue) {
        setToolOwnerName(searchValue);
    }

    const handleDeleteConfirmation = () => {
        setToolDeleteConfirm(true);
    }

    const handleToolModelChange = (event) => {
        setToolModel(event.target.value);
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

    const handleToolNextCheckDateChange = (event) => {
        setToolNextCheckDate(event.target.value);
    }

    const handleToolRemainUsagePeriodChange = (event) => {
        setToolRemainUsagePeriod(event.target.value);
    }

    const handleToolCertificateNoChange = (event) => {
        setToolCertificateNo(event.target.value);
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

    function handleToolUpdate(event) {
        setIsSubmitting(true);
        event.preventDefault();
  
        handleToolScreenUpdate({
           _id: tool._id,
           toolNameRU: toolNameRUValid.value,
           toolNameEN: toolNameENValid.value,
           toolModel: toolModel,
           toolId: toolIdValid.value,
           toolType: toolTypeValid.value,
           toolManufacturer: toolManufacturer,
           toolSerialNo: toolSerialNo,
           toolRegisterNo: toolRegisterNo,
           toolParameters: toolParameters,
           toolCheckDate: toolCheckDateValid.value,
           toolCategory: toolCategoryValid.value,
           toolNextCheckDate: handleNextCheckDate(),
           toolUsagePeriod: toolUsagePeriodValid.value,
           toolRemainUsagePeriod: checkDayDifference(),
           toolCertificateNo: toolCertificateNo,
           toolCondition: toolConditionValid.value,
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

    function handleToolScreenUpdate(tool) {
        mainApi.editToolCard(tool)
         .then((data) => {
            console.log(data);
            setToolInfoUpdated(true);
            setSubmitDataActive(false);
            setIsSubmitting(false);
         })
         .catch((err) => {
            handleErrorMessage();
            console.error(`Ошибка обновления данных карточки СИ: ${err}`);
            setIsSubmitting(false);
            setErrorMessage({
               message: err
            })
         });
    }

    function handleToolDuplicate(event) {
        setIsSubmitting(true);
        event.preventDefault();
  
        handleToolScreenDuplicate({
           toolNameRU: toolNameRU,
           toolNameEN: toolNameEN,
           toolModel: toolModel,
           toolId: `ДУБЛИКАТ ${toolId}`,
           toolType: toolType,
           toolManufacturer: toolManufacturer,
           toolSerialNo: toolSerialNo,
           toolRegisterNo: toolRegisterNo,
           toolParameters: toolParameters,
           toolCheckDate: toolCheckDate,
           toolCategory: toolCategory,
           toolNextCheckDate: handleNextCheckDate(),
           toolUsagePeriod: toolUsagePeriod,
           toolRemainUsagePeriod: checkDayDifference(),
           toolCertificateNo: toolCertificateNo,
           toolCondition: 'Требуется регистрация',
           toolCalibrationStatus: changeToolCalibrationStatus(),
           toolCurrentLocation: toolCurrentLocation,
           toolUsageLocation: toolUsageLocation,
           toolInstalledLocation: toolInstalledLocation,
           toolOwnerDept: toolOwnerDept,
           toolOwnerSection: toolOwnerSection,
           toolOwnerName: toolOwnerName,
           toolCheckCompany: toolCheckCompany,
           comment: comment,
        });
    }

    function handleToolScreenDuplicate(tool) {
        mainApi.addTool(tool)
         .then((data) => {
            setToolInfoUpdated(true);
            setIsSubmitting(false);
         })
         .catch((err) => {
            handleErrorMessage();
            console.error(`Ошибка создания дубликата карточки СИ: ${err}`);
            setIsSubmitting(false);
            setErrorMessage({
               message: err
            })
         });
    }

    function handleToolDelete(tool) {
        mainApi.deleteTool(tool._id).then(() => {
          setTools((data) =>
            data.filter((item) => item._id !== tool._id));
            setToolInfoDeleted(true);
        })
          .catch((err) => {
            console.error(`Ошибка загрузки списка СИ: ${err}`);
          });
    }

   return (
    <main className={`toolscreen ${tool && isOpen ? 'toolscreen_opened' : ''}`}>
         <h1 className="toolscreen__title">Карточка средства измерения</h1>
         <form id='toolForm' className="toolscreen__form" onSubmit={handleToolUpdate}>
            <fieldset className='toolscreen__block'>
                <label htmlFor='nameRU' className="toolscreen__item">Название RU*</label>
                <textarea 
                    id='nameRU' 
                    name='nameRU'
                    className="toolscreen__input toolscreen__input_textarea"
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
                <label htmlFor='nameEN' className="toolscreen__item">Название EN*</label>
                <input 
                    id='nameEN'
                    name='nameEN'
                    className="toolscreen__input"
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
                <label htmlFor='model' className="toolscreen__item">Модель СИ</label>
                <input 
                    id='model'
                    name='model'
                    className="toolscreen__input"
                    type="text"
                    value={toolModel}
                    placeholder="Например: ДМ2005Ф"
                    minLength={2}
                    maxLength={100}
                    onChange={handleToolModelChange}>
                </input>
                <label htmlFor='idNo' className="toolscreen__item">Идентификационный номер*</label>
                <input 
                    className="toolscreen__input"
                    id='idNo'
                    name='idNo'
                    type="text"
                    value={toolIdValid.value}
                    placeholder="Например: 450701-0013"
                    minLength={2}
                    maxLength={40}
                    onChange={(e) => toolIdValid.onChange(e)}
                    onBlur={(e) => toolIdValid.onBlur(e)}>
                </input>
                {(toolIdValid.isDirty && toolIdValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                {(toolIdValid.isDirty && toolIdValid.minLengthError) && <span className="toolscreen__input-error">Не менее 5-ти символов</span>}
                <label htmlFor='regNo' className="toolscreen__item">Регистрационный номер типа СИ</label>
                <input 
                    className="toolscreen__input"
                    id='regNo'
                    name='regNo'
                    type="text"
                    value={toolRegisterNo}
                    placeholder="Регистрационный номер типа СИ"
                    minLength={2}
                    maxLength={40}
                    onChange={handleToolRegisterNoChange}>
                </input>
                <label htmlFor='serialNo' className="toolscreen__item">Серийный номер</label>
                <input 
                    className="toolscreen__input"
                    id='serialNo'
                    name='serialNo'
                    type="text"
                    value={toolSerialNo}
                    placeholder="Серийный номер от производителя"
                    minLength={2}
                    maxLength={80}
                    onChange={handleToolSerialNoChange}
                    >
                </input>
                <label htmlFor='parameters' className="toolscreen__item">Параметры</label>
                <textarea 
                    className="toolscreen__input toolscreen__input_textarea"
                    id='parameters'
                    name='parameters'
                    type="text"
                    value={toolParameters}
                    placeholder="Например: Класс точности, Диапазон измерений, Тип присоединения, Диаметр корпуса"
                    onChange={handleToolParametersChange}
                    minLength={2}
                    maxLength={600}>
                </textarea>
                <label htmlFor='calibration_status' className="toolscreen__item">Статус поверки/калибровки*</label>
                <select 
                    className="toolscreen__input"
                    id='calibration_status'
                    name='calibration_status'
                    type="text"
                    value={toolCalibrationStatus}
                    onChange={handleToolCalibrationStatusChange}
                    required>
                        <option value="">-- Выберите статус --</option>
                        <option value="Годен">Годен</option>
                        <option value="Не годен">Не годен</option>
                </select>
                <label htmlFor='condition' className="toolscreen__item">Текущее состояние*</label>
                <select 
                    className="toolscreen__input"
                    id='condition'
                    name='condition'
                    type="text"
                    value={toolConditionValid.value}
                    onChange={(e) => toolConditionValid.onChange(e)}
                    onBlur={(e) => toolConditionValid.onBlur(e)}
                    required>
                        <option value="">-- Выберите состояние --</option>
                        <option value="Требуется регистрация">Требуется регистрация</option>
                        <option value="Используется">Используется</option>
                        <option value="Выдан">Выдан</option>
                        <option value="На хранении">На хранении</option>
                        <option value="Утерян">Утерян</option>
                        <option value="Сломан">Сломан</option>
                        <option value="Утилизирован">Утилизирован</option>
                        <option value="Поверка/калибровка">Поверка/калибровка</option>
                </select>
                {(toolConditionValid.isDirty && toolConditionValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
            </fieldset>

            <fieldset className='toolscreen__block'>
                <label htmlFor='type' className="toolscreen__item">Тип СИ*</label>
                <select 
                    id='type' 
                    name='type' 
                    className="toolscreen__input"
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
                <label htmlFor='category' className="toolscreen__item">Категория*</label>
                <select 
                    id='category' 
                    name='category' 
                    className="toolscreen__input"
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
                <label htmlFor='checkDate' className="toolscreen__item">Дата поверки/калибровки*</label>
                <input 
                    id='checkDate' 
                    name='checkDate' 
                    className="toolscreen__input"
                    type="date"
                    value={toolCheckDateValid.value}
                    onChange={(e) => toolCheckDateValid.onChange(e)}
                    onBlur={(e) => toolCheckDateValid.onBlur(e)}>
                </input>
                {(toolCheckDateValid.isDirty && toolCheckDateValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                <label htmlFor='usagePeriod' className="toolscreen__item">Межповерочный интервал* (МПИ)</label>
                <input 
                    className="toolscreen__input"
                    id='usagePeriod'
                    name='usagePeriod'
                    type="text"
                    value={toolUsagePeriodValid.value}
                    onChange={(e) => toolUsagePeriodValid.onChange(e)}
                    onBlur={(e) => toolUsagePeriodValid.onBlur(e)}
                    placeholder="Количество дней, например: 365"
                    minLength={2}
                    maxLength={5}>
                </input>
                {(toolUsagePeriodValid.isDirty && toolUsagePeriodValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                <label htmlFor='certificateNo' className="toolscreen__item">Номер сертификата</label>
                <input 
                    className="toolscreen__input"
                    id='certificateNo'
                    name='certificateNo'
                    type="text"
                    value={toolCertificateNo}
                    onChange={handleToolCertificateNoChange}
                    placeholder="Например: С-ЕВЧ/14-02-2023/223467711"
                    minLength={2}
                    maxLength={100}>
                </input>
                <label htmlFor='nextCheckDate' className="toolscreen__item">Дата следующей поверки/калибровки</label>
                <input 
                    id='nextCheckDate' 
                    name='nextCheckDate' 
                    className="toolscreen__input"
                    type="date"
                    value={toolNextCheckDate}
                    onChange={handleToolNextCheckDateChange}>
                </input>
                <label htmlFor='remainUsagePeriod' className="toolscreen__item">Остаток дней до поверки/калибровки</label>
                <input 
                    id='remainUsagePeriod' 
                    name='remainUsagePeriod' 
                    className="toolscreen__input"
                    type="number"
                    value={toolRemainUsagePeriod}
                    onChange={handleToolRemainUsagePeriodChange}>
                </input>
                <label htmlFor='ownerDept' className="toolscreen__item">Ответственный департамент/цех*</label>
                <select 
                    className="toolscreen__input"
                    id='ownerDept'
                    name='ownerDept'
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
                <label htmlFor='ownerSection' className="toolscreen__item">Ответственный отдел*</label>
                <select 
                    className="toolscreen__input"
                    id='ownerSection'
                    name='ownerSection'
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
                <label htmlFor='ownerName' className="toolscreen__item">ФИО ответственного сотрудника*</label>
                <input 
                    className="toolscreen__input"
                    id='ownerName'
                    name='ownerName'
                    type="text"
                    value={toolOwnerNameValid.value}
                    onChange={(e) => toolOwnerNameValid.onChange(e)}
                    onBlur={(e) => toolOwnerNameValid.onBlur(e)}
                    placeholder="Например: Пушкин Александр"
                    minLength={2}
                    maxLength={40}
                    required>
                </input>
                <div className='toolscreen__input-autocomplete'>
                    {personList
                    .filter(item => {
                        const searchValue = toolOwnerNameValid.value.toLowerCase();
                        const personName = item.toLowerCase();
                        return searchValue && personName.startsWith(searchValue) && personName !== searchValue;
                    })
                    .slice(0, 5)
                    .map((item) => (
                        <div className='toolscreen__input-row' onClick={() => handleNameAutocomplete(item)} key={item}>{item}</div>
                    ))}
                </div>
                {(toolOwnerNameValid.isDirty && toolOwnerNameValid.isEmpty) && <span className="toolscreen__input-error">Поле не может быть пустым</span>}
                {(toolOwnerNameValid.isDirty && toolOwnerNameValid.minLengthError) && <span className="toolscreen__input-error">Не менее 2-х символов</span>}
            </fieldset>

            <fieldset className='toolscreen__block'>
                <label htmlFor='usageLocation' className="toolscreen__item">Место нахождения*</label>
                <textarea 
                    className="toolscreen__input toolscreen__input_textarea"
                    id='usageLocation'
                    name='usageLocation'
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
                <label htmlFor='currentLocation' className="toolscreen__item">Место расположения*</label>
                <textarea
                    id='currentLocation' 
                    name='currentLocation' 
                    className="toolscreen__input toolscreen__input_textarea"
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
                <label htmlFor='installLocation' className="toolscreen__item">Место установки*</label>
                <textarea
                    id='installLocation' 
                    name='installLocation' 
                    className="toolscreen__input toolscreen__input_textarea"
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
                {(toolInstalledLocationValid.isDirty && toolInstalledLocationValid.minLengthError) && <span className="toolscreen__input-error">Не менее 2-х символов</span>}
                <label htmlFor='manufacturer' className="toolscreen__item">Производитель</label>
                <input 
                    className="toolscreen__input"
                    id='manufacturer'
                    name='manufacturer'
                    type="text"
                    value={toolManufacturer}
                    placeholder="Например: ЗАО Эталон"
                    minLength={2}
                    maxLength={100}
                    onChange={handleToolManufacturerChange}>
                </input>
                <label htmlFor='checkCompany' className="toolscreen__item">Поверитель</label>
                <input 
                    id='checkCompany'
                    name='checkCompany'
                    className="toolscreen__input"
                    type="text"
                    value={toolCheckCompany}
                    onChange={handleToolCheckCompanyChange}
                    placeholder="Например: РМЦ Калиброн"
                    minLength={2}
                    maxLength={80}>
                </input>
                <label htmlFor='comment' className="toolscreen__item">Комментарий</label>
                <textarea 
                    className="toolscreen__input toolscreen__input_textarea"
                    id='comment'
                    name='comment'
                    form='toolForm'
                    type="textarea"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Добавьте ваш комментарий"
                    minLength={2}
                    maxLength={600}>
                </textarea>
                <p className='toolscreen__comment'>* обязательное поле</p>
                {isToolInfoUpdated && <span className='toolscreen__infotooltip'>Данные успешно обновлены</span>}
                {isToolInfoDeleted && <span className='toolscreen__infotooltip'>Данные успешно удалены</span>}
                {isError && <span className="form__input-error form__input-error_main">Произошла ошибка на сервере: {errorMessage.message}</span>}  
            </fieldset>
            <button type="button" className="toolscreen__close" onClick={onClose} />
            {!submitButtonActive && <button type="button" className="toolscreen__button" onClick={onToolDataChange}>Редактировать</button>}
            {submitButtonActive && <button disabled={
                !toolNameRUValid.inputValid || 
                !toolNameENValid.inputValid ||
                !toolIdValid.inputValid ||
                !toolConditionValid.inputValid ||
                !toolTypeValid.inputValid ||
                !toolCheckDateValid.inputValid ||
                !toolCategoryValid.inputValid ||
                !toolUsagePeriodValid.inputValid ||
                !toolOwnerDeptValid.inputValid ||
                !toolOwnerSectionValid.inputValid ||
                !toolOwnerNameValid.inputValid ||
                !toolCurrentLocationValid.inputValid ||
                !toolUsageLocationValid.inputValid ||
                !toolInstalledLocationValid.inputValid ||
                isSubmitting } 
                type="submit" className="toolscreen__button toolscreen__button_save">Сохранить</button>}
            {!toolDeleteConfirm && <button type="button" className="toolscreen__button toolscreen__button_delete" onClick={handleDeleteConfirmation}>Удалить</button>}
            {toolDeleteConfirm && <button type="button" className="toolscreen__button toolscreen__button_delete-confirm" onClick={() => handleToolDelete(tool)}>Подтвердить удаление</button>}
            <button disabled={isSubmitting} type="button" className="toolscreen__button toolscreen__button_copy" onClick={handleToolDuplicate}>Сделать копию</button>
         </form>
      </main >
   )
}

export default ToolScreen;