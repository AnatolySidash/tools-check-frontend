import React from 'react';
import FileSaver from '../../utils/FileSaver.js';
import * as XLSX from 'xlsx';
import { EXCEL_TYPE, EXCEL_EXTENSION } from '../../utils/Constants.js'
// import Localbase from 'localbase';

function SearchForm({ tools, setTools }) {

   const [inputValue, setInputValue] = React.useState('');
   const [isInputEmpty, setInputEmpty] = React.useState(false);
   const [isSearchMade, setSearchMade] = React.useState(false);
   const [isOkCheckboxChecked, setOkCheckboxChecked] = React.useState(false);
   const [isNotOkCheckboxChecked, setNotOkCheckboxChecked] = React.useState(false);
   const [notFirstRender, setNotFirstRender] = React.useState(false);
   const toolList = JSON.parse(localStorage.getItem('filteredTools'))

   function handleInputValueChange(event) {
      setInputValue(event.target.value);
   }

   function handleOkCheckboxChange(event) {
      setOkCheckboxChecked(event.target.checked);
   }

   function handleNotOkCheckboxChange(event) {
      setNotOkCheckboxChecked(event.target.checked);
   }

   React.useEffect(() => {
      localStorage.setItem('allTools', JSON.stringify(tools));
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   React.useEffect(() => {
      if (localStorage.getItem('inputValue')) {
         setInputValue(localStorage.getItem('inputValue'));
      } else {
         setInputValue('');
      }
   }, []);

   React.useEffect(() => {
      if (localStorage.getItem('okcheckboxState')) {
         setOkCheckboxChecked(localStorage.getItem('okcheckboxState'));
      } else {
         setOkCheckboxChecked(false);
      }
   }, []);

   React.useEffect(() => {
      if (localStorage.getItem('notokcheckboxState')) {
         setNotOkCheckboxChecked(localStorage.getItem('notokcheckboxState'));
      } else {
         setNotOkCheckboxChecked(false);
      }
   }, []);

   // React.useEffect(() => {
   //    if (localStorage.getItem('filteredTools')) {
   //       setTools(JSON.parse(localStorage.getItem('filteredTools')));
   //    } else {
   //       setTools([]);
   //    }
   // // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, []);

   React.useEffect(() => {
      setTimeout(() => {
         setNotFirstRender(true);
      }, 100);
   }, []);

   async function handleSearchToolsSubmit(event) {
      event.preventDefault();

      try {
            localStorage.setItem('allTools', JSON.stringify(tools));
         if (inputValue) {
            const allTools = JSON.parse(localStorage.getItem('allTools'));
            const filteredTools = allTools.filter((tool) => {
               return (
                  tool.toolId.toLowerCase().includes(inputValue.toLowerCase()) || 
                  tool.toolNameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
                  tool.toolCalibrationStatus.toLowerCase().includes(inputValue.toLowerCase()) ||
                  tool.toolCondition.toLowerCase().includes(inputValue.toLowerCase()) ||
                  tool.toolOwnerDept.toLowerCase().includes(inputValue.toLowerCase()) ||
                  tool.toolOwnerName.toLowerCase().includes(inputValue.toLowerCase())
               );
            })

            localStorage.setItem('filteredTools', JSON.stringify(filteredTools));
            localStorage.setItem('inputValue', inputValue);
            setSearchMade(true);

            if (filteredTools.length > 0) {
               setTools(JSON.parse(localStorage.getItem('filteredTools')));
            } else {
               setTools([]);
            }
            setInputEmpty(false);
         } else {
            setInputEmpty(true);
         }
      } catch (err) {
         console.error(`Ошибка загрузки списка средств измерения: ${err}`);
      }
   }

   React.useEffect(() => {
      if (notFirstRender) {
         const tools = JSON.parse(localStorage.getItem('allTools'));
         const filteredTools = tools.filter((tool) => {
            if (isOkCheckboxChecked) {
               return (
                  (tool.toolCalibrationStatus === 'Годен') &&
                  (tool.toolId.toLowerCase().includes(inputValue.toLowerCase()) || 
                     tool.toolNameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
                     tool.toolOwnerDept.toLowerCase().includes(inputValue.toLowerCase()) ||
                     tool.toolOwnerName.toLowerCase().includes(inputValue.toLowerCase()))
               );
            } else {
               return (
                  tool.toolId.toLowerCase().includes(inputValue.toLowerCase()) || 
                  tool.toolNameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
                  tool.toolCalibrationStatus.toLowerCase().includes(inputValue.toLowerCase()) ||
                  tool.toolOwnerDept.toLowerCase().includes(inputValue.toLowerCase()) ||
                  tool.toolOwnerName.toLowerCase().includes(inputValue.toLowerCase())
               );
            }
         })
         localStorage.setItem('filteredTools', JSON.stringify(filteredTools));
         localStorage.setItem('inputValue', inputValue);
         localStorage.setItem('okcheckboxState', isOkCheckboxChecked);

         if (filteredTools.length > 0) {
            setTools(filteredTools);
         } else {
            setTools([]);
         }
      }
      //eslint-disable-next-line
   }, [isOkCheckboxChecked]);

   React.useEffect(() => {
      if (notFirstRender) {
         const tools = JSON.parse(localStorage.getItem('allTools'));
         const filteredTools = tools.filter((tool) => {
            if (isNotOkCheckboxChecked) {
               return (
                  (tool.toolCalibrationStatus === 'Не годен') &&
                  (tool.toolId.toLowerCase().includes(inputValue.toLowerCase()) || 
                     tool.toolNameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
                     tool.toolOwnerDept.toLowerCase().includes(inputValue.toLowerCase()) ||
                     tool.toolOwnerName.toLowerCase().includes(inputValue.toLowerCase()))
               );
            } else {
               return (
                  tool.toolId.toLowerCase().includes(inputValue.toLowerCase()) || 
                  tool.toolNameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
                  tool.toolCalibrationStatus.toLowerCase().includes(inputValue.toLowerCase()) ||
                  tool.toolOwnerDept.toLowerCase().includes(inputValue.toLowerCase()) ||
                  tool.toolOwnerName.toLowerCase().includes(inputValue.toLowerCase())
               );
            }
         })
         localStorage.setItem('filteredTools', JSON.stringify(filteredTools));
         localStorage.setItem('inputValue', inputValue);
         localStorage.setItem('notokcheckboxState', isNotOkCheckboxChecked);

         if (filteredTools.length > 0) {
            setTools(filteredTools);
         } else {
            setTools([]);
         }
      }
      //eslint-disable-next-line
   }, [isNotOkCheckboxChecked]);

   // Выгрузка в Эксель

   function downloadAsExcel() {
      const worksheet = XLSX.utils.json_to_sheet(toolList);
      const workbook = {
          Sheets: {
              'data' : worksheet
          },
          SheetNames: ['data']
      };
      const excelBuffer = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
      saveAsExcel(excelBuffer, 'список_СИ');
  }
  
  function saveAsExcel(buffer, filename){
      const data = new Blob([buffer], {type: EXCEL_TYPE});
      FileSaver.saveAs(data, filename+EXCEL_EXTENSION);
  }

   return (
      <section className="search">
         <h2 className='search__title'>Поиск</h2>
         <form className="searchform" noValidate onSubmit={handleSearchToolsSubmit}>
            <fieldset className='searchform__fieldset'>
               <input
                  className="searchform__input"
                  id="name__input"
                  value={inputValue}
                  type="search"
                  placeholder="Введите запрос"
                  onChange={handleInputValueChange}
                  required>
               </input>
               <button type="submit" className="searchform__button">Найти</button>
               <button type="button" disabled={!isSearchMade} className="searchform__button" onClick={downloadAsExcel}>Скачать Excel</button>
            </fieldset>
            <fieldset className='searchform__fieldset'>
               {isOkCheckboxChecked === 'true' ?
                  <input
                     className="searchform__checkbox"
                     id="okcheckbox__input"
                     onChange={handleOkCheckboxChange}
                     type="checkbox"
                     checked>
                  </input> :
                  <input
                     className="searchform__checkbox"
                     id="okcheckbox__input"
                     onChange={handleOkCheckboxChange}
                     type="checkbox">
                  </input>
               }
               <label
                  htmlFor="okcheckbox__input"
                  className='searchform__label'>Годные</label>
               {isNotOkCheckboxChecked === 'true' ?
               <input
                  className="searchform__checkbox"
                  id="notokcheckbox__input"
                  onChange={handleNotOkCheckboxChange}
                  type="checkbox"
                  checked>
               </input> :
               <input
                  className="searchform__checkbox"
                  id="notokcheckbox__input"
                  onChange={handleNotOkCheckboxChange}
                  type="checkbox">
               </input>
               }
               <label
                  htmlFor="notokcheckbox__input"
                  className='searchform__label'>Не годные</label>
            </fieldset>
            {isInputEmpty && <span className="searchform__input-error">Нужно ввести ключевое слово</span>}
         </form >
      </section>
   )
}

export default SearchForm;