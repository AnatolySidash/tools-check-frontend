import React from 'react';
import mainApi from '../../utils/MainApi.js';


function ToolScreen({ tool, onClose, isOpen, setTools, isToolInfoUpdated, setToolInfoUpdated, isToolInfoDeleted, setToolInfoDeleted }) {

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
            setToolCalibrationStatus(tool.toolCalibrationStatus);
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

    const handleToolModelChange = (event) => {
        setToolModel(event.target.value);
    }

    const handleToolIdChange = (event) => {
        setToolId(event.target.value);
    }

    const handleToolTypeChange = (event) => {
        setToolType(event.target.value);
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

    const handleToolCategoryChange = (event) => {
        setToolCategory(event.target.value);
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

    const handleToolCurrentLocationChange = (event) => {
        setToolCurrentLocation(event.target.value);
    }

    const handleToolUsageLocationChange = (event) => {
        setToolUsageLocation(event.target.value);
    }

    const handleToolInstalledLocationChange = (event) => {
        setToolInstalledLocation(event.target.value);
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

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    function handleToolUpdate(event) {
        event.preventDefault();
  
        // Передаём значения управляемых компонентов во внешний обработчик
        handleToolScreenUpdate({
           _id: tool._id,
           toolNameRU: toolNameRU,
           toolNameEN: toolNameEN,
           toolModel: toolModel,
           toolId: toolId,
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
           toolCondition: toolCondition,
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

    function handleToolScreenUpdate(tool) {
        mainApi.editToolCard(tool)
         .then((data) => {
            console.log(data);
            setToolInfoUpdated(true);
         })
         .catch((err) => {
            // handleErrorMessage();
            console.error(`Ошибка получения данных профиля: ${err}`);
            // setErrorMessage({
            //    message: err
            // })
         });
    }

    function handleToolDuplicate(event) {
        event.preventDefault();
  
        // Передаём значения управляемых компонентов во внешний обработчик
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
           toolCondition: toolCondition,
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
         })
         .catch((err) => {
            // handleErrorMessage();
            console.error(`Ошибка получения данных профиля: ${err}`);
            // setErrorMessage({
            //    message: err
            // })
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
                    value={toolNameRU}
                    placeholder="Название на русском языке"
                    minLength={2}
                    maxLength={150}
                    onChange={handleNameRuChange}
                    required>
                </textarea>
                <label htmlFor='nameEN' className="toolscreen__item">Название EN*</label>
                <input 
                    id='nameEN'
                    name='nameEN'
                    className="toolscreen__input"
                    type="text"
                    value={toolNameEN}
                    placeholder="Название на английском языке"
                    minLength={2}
                    maxLength={80}
                    onChange={handleNameEnChange}
                    required>
                </input>
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
                    value={toolId}
                    placeholder="Например: 450701-0013"
                    minLength={2}
                    maxLength={30}
                    onChange={handleToolIdChange}
                    required>
                </input>
                <label htmlFor='regNo' className="toolscreen__item">Регистрационный номер типа СИ</label>
                <input 
                    className="toolscreen__input"
                    id='regNo'
                    name='regNo'
                    type="text"
                    value={toolRegisterNo}
                    placeholder="Например: 17424-09"
                    minLength={2}
                    maxLength={40}
                    onChange={handleToolRegisterNoChange}>
                </input>
                <label htmlFor='serialNo' className="toolscreen__item">Серийный номер*</label>
                <input 
                    className="toolscreen__input"
                    id='serialNo'
                    name='serialNo'
                    type="text"
                    value={toolSerialNo}
                    placeholder="Например: АН434007"
                    minLength={2}
                    maxLength={80}
                    onChange={handleToolSerialNoChange}
                    required>
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
                    maxLength={550}>
                </textarea>
                <label htmlFor='calibration_status' className="toolscreen__item">Статус поверки/калибровки*</label>
                <input 
                    className="toolscreen__input"
                    id='calibration_status'
                    name='calibration_status'
                    value={toolCalibrationStatus}
                    onChange={handleToolCalibrationStatusChange}
                    required>
                </input>
                <label htmlFor='condition' className="toolscreen__item">Текущее состояние*</label>
                <select 
                    className="toolscreen__input"
                    id='condition'
                    name='condition'
                    value={toolCondition}
                    onChange={handleToolConditionChange}
                    required>
                        <option value="">-- Выберите статус --</option>
                        <option value="Требуется регистрация">Требуется регистрация</option>
                        <option value="Используется">Используется</option>
                        <option value="Выдан">Выдан</option>
                        <option value="На хранении">На хранении</option>
                        <option value="Утерян">Утерян</option>
                        <option value="Сломан">Сломан</option>
                        <option value="Утилизирован">Утилизирован</option>
                        <option value="Поверка/калибровка">Поверка/калибровка</option>
                </select>
            </fieldset>

            <fieldset className='toolscreen__block'>
                <label htmlFor='type' className="toolscreen__item">Тип СИ*</label>
                <select 
                    id='type' 
                    name='type' 
                    className="toolscreen__input"
                    type="text"
                    value={toolType}
                    onChange={handleToolTypeChange}
                    required>
                        <option value="">-- Выберите тип СИ --</option>
                        <option value="Переносной">Переносной</option>
                        <option value="Стационарный">Стационарный</option>
                </select>
                <label htmlFor='category' className="toolscreen__item">Категория*</label>
                <select 
                    id='category' 
                    name='category' 
                    className="toolscreen__input"
                    type="text"
                    value={toolCategory}
                    onChange={handleToolCategoryChange}
                    required>
                        <option value="">-- Выберите категорию --</option>
                        <option value="Газоанализаторы">Газоанализаторы</option>
                        <option value="Манометры">Манометры</option>
                        <option value="Термометры">Термометры</option>
                        <option value="Приборы">Приборы</option>
                        <option value="Инструменты">Инструменты</option>
                        <option value="Другое оборудование">Другое оборудование</option>
                </select>
                <label htmlFor='checkDate' className="toolscreen__item">Дата поверки/калибровки</label>
                <input 
                    id='checkDate' 
                    name='checkDate' 
                    className="toolscreen__input"
                    type="date"
                    value={toolCheckDate}
                    onChange={handleToolCheckDateChange}>
                </input>
                <label htmlFor='usagePeriod' className="toolscreen__item">Межповерочный интервал (МПИ)</label>
                <input 
                    className="toolscreen__input"
                    id='usagePeriod'
                    name='usagePeriod'
                    type="text"
                    value={toolUsagePeriod}
                    onChange={handleToolUsagePeriodChange}
                    placeholder="Количество дней, например: 365">
                </input>
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
                    value={toolOwnerDept}
                    onChange={handleToolOwnerDeptChange}
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
                <label htmlFor='ownerSection' className="toolscreen__item">Ответственный отдел*</label>
                <select 
                    className="toolscreen__input"
                    id='ownerSection'
                    name='ownerSection'
                    type="text"
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
                <label htmlFor='ownerName' className="toolscreen__item">ФИО ответственного сотрудника*</label>
                <input 
                    className="toolscreen__input"
                    id='ownerName'
                    name='ownerName'
                    type="text"
                    value={toolOwnerName}
                    onChange={handleToolOwnerNameChange}
                    placeholder="Например: Пушкин Александр"
                    minLength={2}
                    maxLength={40}
                    required>
                </input>
            </fieldset>

            <fieldset className='toolscreen__block'>
                <label htmlFor='usageLocation' className="toolscreen__item">Место нахождения</label>
                <textarea 
                    className="toolscreen__input toolscreen__input_textarea"
                    id='usageLocation'
                    name='usageLocation'
                    type="text"
                    value={toolUsageLocation}
                    placeholder="Укажите цех/департамент/линию, где находится данное средство измерения"
                    onChange={handleToolUsageLocationChange}
                    minLength={2}
                    maxLength={100}>
                </textarea>
                <label htmlFor='currentLocation' className="toolscreen__item">Место расположения</label>
                <textarea
                    id='currentLocation' 
                    name='currentLocation' 
                    className="toolscreen__input toolscreen__input_textarea"
                    type="text"
                    value={toolCurrentLocation}
                    onChange={handleToolCurrentLocationChange}
                    placeholder="Укажите участок/станцию/помещение, где находится данное средство измерения"
                    minLength={2}
                    maxLength={100}>
                </textarea>
                <label htmlFor='installLocation' className="toolscreen__item">Место установки</label>
                <textarea
                    id='installLocation' 
                    name='installLocation' 
                    className="toolscreen__input toolscreen__input_textarea"
                    type="text"
                    value={toolInstalledLocation}
                    onChange={handleToolInstalledLocationChange}
                    placeholder="Укажите оборудование, на котором установлено данное средство измерения"
                    minLength={2}
                    maxLength={100}>
                </textarea>
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
                    maxLength={550}>
                </textarea>
                <p className='toolscreen__comment'>* обязательное поле</p>
                { isToolInfoUpdated && <span className='toolscreen__infotooltip'>Данные успешно обновлены</span>}
                { isToolInfoDeleted && <span className='toolscreen__infotooltip'>Данные успешно удалены</span>}
            </fieldset>
            <button type="button" className="toolscreen__close" onClick={onClose} />
            <button type="submit" className="toolscreen__button">Редактировать</button>
            <button type="button" className="toolscreen__button toolscreen__button_delete" onClick={() => handleToolDelete(tool)}>Удалить</button>
            <button type="button" className="toolscreen__button toolscreen__button_copy" onClick={handleToolDuplicate}>Сделать копию</button>
         </form>
      </main >
   )
}

export default ToolScreen;