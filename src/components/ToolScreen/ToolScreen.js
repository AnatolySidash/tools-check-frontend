import React from 'react';
import mainApi from '../../utils/MainApi.js';
// import moment from 'moment';


function ToolScreen({ tool, onClose, isOpen, setTools, isToolInfoUpdated, setToolInfoUpdated, isToolInfoDeleted, setToolInfoDeleted }) {

    const [toolNameRU, setNameRU] = React.useState('');
    const [toolNameEN, setNameEN] = React.useState('');
    const [toolId, setToolId] = React.useState('');
    const [toolManufacturer, setToolManufacturer] = React.useState('');
    const [toolSerialNo, setToolSerialNo] = React.useState('');
    const [toolRegisterNo, setToolRegisterNo] = React.useState('');
    const [toolParameters, setToolParameters] = React.useState('');
    const [toolReceiveDate, setToolReceiveDate] = React.useState(Date);
    const [toolCheckDate, setToolCheckDate] = React.useState(Date);
    const [toolReadyDate, setToolReadyDate] = React.useState(Date);
    const [toolReleaseDate, setToolReleaseDate] = React.useState('');
    const [toolNextCheckDate, setToolNextCheckDate] = React.useState(Date);
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

    React.useEffect(() => {
        if (tool) {
            setNameRU(tool.toolNameRU);
            setNameEN(tool.toolNameEN);
            setToolId(tool.toolId);
            setToolManufacturer(tool.toolManufacturer);
            setToolSerialNo(tool.toolSerialNo);
            setToolRegisterNo(tool.toolRegisterNo);
            setToolParameters(tool.toolParameters);
            setToolReceiveDate(tool.toolReceiveDate.slice(0, 10));
            setToolCheckDate(tool.toolCheckDate.slice(0, 10));
            setToolReadyDate(tool.toolReadyDate.slice(0, 10));
            setToolReleaseDate(tool.toolReleaseDate.slice(0, 10));
            setToolNextCheckDate(tool.toolNextCheckDate.slice(0, 10));
            setToolUsagePeriod(tool.toolUsagePeriod);
            setToolCertificateNo(tool.toolCertificateNo);
            setToolCondition(tool.toolCondition);
            setToolCurrentLocation(tool.toolCurrentLocation);
            setToolUsageLocation(tool.toolUsageLocation);
            setToolOwnerDept(tool.toolOwnerDept);
            setToolOwnerName(tool.toolOwnerName);
            setToolCheckCompany(tool.toolCheckCompany);
            setToolCheckCost(tool.toolCheckCost);
            setToolAvailability(tool.toolAvailability);
            setToolWorkability(tool.toolWorkability);
            setToolDocAvailability(tool.toolDocAvailability);
            setComment(tool.comment);
        }
     }, [tool, isOpen]);

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

    function handleToolUpdate(event) {
        event.preventDefault();
  
        // Передаём значения управляемых компонентов во внешний обработчик
        handleToolScreenUpdate({
           _id: tool._id,
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

    function handleToolScreenUpdate(tool) {
        mainApi.editToolCard(tool)
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

    function handleToolDuplicate(event) {
        event.preventDefault();
  
        // Передаём значения управляемых компонентов во внешний обработчик
        handleToolScreenDuplicate({
           toolNameRU: toolNameRU,
           toolNameEN: toolNameEN,
           toolId: `ДУБЛИКАТ ${toolId}`,
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
        console.log(tool);
        mainApi.deleteTool(tool._id).then(() => {
          setTools((state) =>
            state.filter((item) => item._id !== tool._id));
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
                <label htmlFor='nameRU' className="toolscreen__item">Название RU</label>
                <textarea 
                    id='nameRU' 
                    name='nameRU'
                    className="toolscreen__input toolscreen__input_textarea"
                    type="text"
                    value={toolNameRU}
                    placeholder="Название на русском языке"
                    minLength={2}
                    maxLength={80}
                    onChange={handleNameRuChange}
                    required>
                </textarea>
                <label htmlFor='nameEN' className="toolscreen__item">Название EN</label>
                <input 
                    id='nameEN'
                    name='nameEN'
                    className="toolscreen__input"
                    type="text"
                    value={toolNameEN}
                    placeholder="Название на английском языке"
                    minLength={2}
                    maxLength={40}
                    onChange={handleNameEnChange}
                    required>
                </input>
                <label htmlFor='idNo' className="toolscreen__item">Идентификационный номер</label>
                <input 
                    className="toolscreen__input"
                    id='idNo'
                    name='idNo'
                    type="text"
                    value={toolId}
                    placeholder="Например такой: 450701-0013"
                    minLength={2}
                    maxLength={20}
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
                    placeholder="Регистрационный номер"
                    minLength={2}
                    maxLength={20}
                    onChange={handleToolRegisterNoChange}
                    required>
                </input>
                <label htmlFor='serialNo' className="toolscreen__item">Серийный номер</label>
                <input 
                    className="toolscreen__input"
                    id='serialNo'
                    name='serialNo'
                    type="text"
                    value={toolSerialNo}
                    placeholder="Серийный номер"
                    minLength={2}
                    maxLength={20}
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
                    maxLength={400}>
                </textarea>
                <label htmlFor='certificateNo' className="toolscreen__item">Номер сертификата</label>
                <input 
                    className="toolscreen__input"
                    id='certificateNo'
                    name='certificateNo'
                    type="text"
                    value={toolCertificateNo}
                    onChange={handleToolCertificateNoChange}
                    placeholder="Номер сертификата"
                    minLength={2}
                    maxLength={40}>
                </input>
                <label htmlFor='condition' className="toolscreen__item">Текущее состояние</label>
                <select 
                    className="toolscreen__input"
                    id='condition'
                    name='condition'
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
                <label htmlFor='receiveDate' className="toolscreen__item">Дата приёмки</label>
                <input 
                    id='receiveDate' 
                    name='receiveDate' 
                    className="toolscreen__input"
                    type="date"
                    value={toolReceiveDate}
                    onChange={handleToolReceiveDateChange}
                    required>
                </input>
                <label htmlFor='checkDate' className="toolscreen__item">Дата поверки/калибровки</label>
                <input 
                    id='checkDate' 
                    name='checkDate' 
                    className="toolscreen__input"
                    type="date"
                    value={toolCheckDate}
                    onChange={handleToolCheckDateChange}
                    required>
                </input>
                <label htmlFor='readyDate' className="toolscreen__item">Дата готовности</label>
                <input 
                    className="toolscreen__input"
                    id='readyDate'
                    name='readyDate'
                    type="date"
                    value={toolReadyDate}
                    onChange={handleToolReadyDateChange}
                    required>
                </input>
                <label htmlFor='releaseDate' className="toolscreen__item">Дата выдачи</label>
                <input 
                    className="toolscreen__input"
                    id='releaseDate'
                    name='releaseDate'
                    type="text"
                    value={toolReleaseDate}
                    onChange={handleToolReleaseDateChange}
                    placeholder="Дата выдачи"
                    minLength={2}
                    maxLength={20}>
                </input>
                <label htmlFor='nextCheckDate' className="toolscreen__item">Дата следующей поверки/калибровки</label>
                <input 
                    id='nextCheckDate' 
                    name='nextCheckDate' 
                    className="toolscreen__input"
                    type="date"
                    value={toolNextCheckDate}
                    onChange={handleToolNextCheckDateChange}
                    required>
                </input>
                <label htmlFor='usagePeriod' className="toolscreen__item">Межповерочный интервал (МПИ)</label>
                <input 
                    className="toolscreen__input"
                    id='usagePeriod'
                    name='usagePeriod'
                    type="text"
                    value={toolUsagePeriod}
                    onChange={handleToolUsagePeriodChange}
                    placeholder="Количество дней"
                    required>
                </input>
                <label htmlFor='ownerDept' className="toolscreen__item">Ответственный департамент/цех</label>
                <input 
                    className="toolscreen__input"
                    id='ownerDept'
                    name='ownerDept'
                    type="text"
                    value={toolOwnerDept}
                    onChange={handleToolOwnerDeptChange}
                    placeholder="Например: Цех окраски"
                    minLength={2}
                    maxLength={40}
                    required>
                </input>
                <label htmlFor='ownerName' className="toolscreen__item">ФИО ответственного сотрудника</label>
                <input 
                    className="toolscreen__input"
                    id='ownerName'
                    name='ownerName'
                    type="text"
                    value={toolOwnerName}
                    onChange={handleToolOwnerNameChange}
                    placeholder="Например: Пригожин Евгений"
                    minLength={2}
                    maxLength={40}
                    required>
                </input>
                <label htmlFor='usageLocation' className="toolscreen__item">Место использования</label>
                <textarea 
                    className="toolscreen__input toolscreen__input_textarea"
                    id='usageLocation'
                    name='usageLocation'
                    type="text"
                    value={toolUsageLocation}
                    placeholder="Укажите где установлено данное оборудование"
                    onChange={handleToolUsageLocationChange}
                    minLength={2}
                    maxLength={400}>
                </textarea>
            </fieldset>

            <fieldset className='toolscreen__block toolscreen__block_checkbox'>
                <label htmlFor='currentLocation' className="toolscreen__item">Текущее местонахождение</label>
                <input 
                    id='currentLocation' 
                    name='currentLocation' 
                    className="toolscreen__input"
                    type="text"
                    value={toolCurrentLocation}
                    onChange={handleToolCurrentLocationChange}
                    placeholder="Где сейчас оборудование? На поверке? В запасе?"
                    minLength={2}
                    maxLength={40}>
                </input>
                <label htmlFor='manufacturer' className="toolscreen__item">Производитель</label>
                <input 
                    className="toolscreen__input"
                    id='manufacturer'
                    name='manufacturer'
                    type="text"
                    value={toolManufacturer}
                    placeholder="Название компании-производителя"
                    minLength={2}
                    maxLength={40}
                    onChange={handleToolManufacturerChange}
                    required>
                </input>
                <label htmlFor='checkCompany' className="toolscreen__item">Поверитель</label>
                <input 
                    id='checkCompany'
                    name='checkCompany'
                    className="toolscreen__input"
                    type="text"
                    value={toolCheckCompany}
                    onChange={handleToolCheckCompanyChange}
                    placeholder="Название компании-поверителя"
                    minLength={2}
                    maxLength={40}>
                </input>
                <label htmlFor='checkCost' className="toolscreen__item">Стоимость поверки/калибровки</label>
                <input 
                    className="toolscreen__input"
                    id='checkCost'
                    name='checkCost'
                    type="text"
                    value={toolCheckCost}
                    onChange={handleToolCheckCostChange}
                    placeholder="Стоимость в рублях">
                </input>
                <label htmlFor='availability' className="toolscreen__item toolscreen__item_checkbox">Есть в наличии?</label>
                <input 
                    className="toolscreen__input toolscreen__input_checkbox-avail"
                    id='availability'
                    name='availability'
                    value={toolAvailability}
                    onChange={handleToolAvailabilityChange}
                    type="checkbox">
                </input>
                <label htmlFor='workability' className="toolscreen__item toolscreen__item_checkbox">Установлено и исправно работает?</label>
                <input 
                    id='workability'
                    name='workability'
                    className="toolscreen__input toolscreen__input_checkbox-work"
                    value={toolWorkability}
                    onChange={handleToolWorkabilityChange}
                    type="checkbox">
                </input>
                <label htmlFor='document' className="toolscreen__item toolscreen__item_checkbox">Документы в порядке?</label>
                <input 
                    className="toolscreen__input toolscreen__input_checkbox-doc"
                    id='document'
                    name='document'
                    value={toolDocAvailability}
                    onChange={handleToolDocAvailabilityChange}
                    type="checkbox">
                </input>
                <label htmlFor='comment' className="toolscreen__item toolscreen__item_comment">Комментарий</label>
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
                    maxLength={400}>
                </textarea>
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