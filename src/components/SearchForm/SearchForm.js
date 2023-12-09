import React from 'react';
import FileSaver from '../../utils/FileSaver.js';
import * as XLSX from 'xlsx';
import { EXCEL_TYPE, EXCEL_EXTENSION } from '../../utils/Constants.js';

function SearchForm({ tools, setTools, localDB }) {

   const [inputValue, setInputValue] = React.useState('');
   const [isInputEmpty, setInputEmpty] = React.useState(false);
   const [isSearchMade, setSearchMade] = React.useState(false);
   const [isOkCheckboxChecked, setOkCheckboxChecked] = React.useState(false);
   const [isNotOkCheckboxChecked, setNotOkCheckboxChecked] = React.useState(false);
   const [notFirstRender, setNotFirstRender] = React.useState(false);

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

   React.useEffect(() => {
      async function getData() {
         setTools(await localDB.tools.toArray());
      }
      getData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   React.useEffect(() => {
      setTimeout(() => {
         setNotFirstRender(true);
      }, 100);
   }, []);

   async function removeFilter() {
      setInputValue('');
      setTools(await localDB.tools.toArray());
      setOkCheckboxChecked(false);
      setNotOkCheckboxChecked(false)
   }

   async function handleSearchToolsSubmit(event) {
      event.preventDefault();

      try {

         if (inputValue) {
            let allTools = await localDB.tools.toArray();
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

            await localDB.filteredTools.clear();
            await localDB.filteredTools.bulkPut(filteredTools);
            localStorage.setItem('inputValue', inputValue);
            setSearchMade(true);

            if (filteredTools.length > 0) {
               setTools(filteredTools);
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
         async function getData() {
            let allTools = await localDB.tools.toArray();
            const filteredTools = allTools.filter((tool) => {
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
            await localDB.filteredTools.clear();
            await localDB.filteredTools.bulkPut(filteredTools);
            localStorage.setItem('inputValue', inputValue);
            localStorage.setItem('okcheckboxState', isOkCheckboxChecked);
   
            if (filteredTools.length > 0) {
               setTools(filteredTools);
            } else {
               setTools([]);
            }
         }
         getData();
      }
      //eslint-disable-next-line
   }, [isOkCheckboxChecked]);

   React.useEffect(() => {
      if (notFirstRender) {
         async function getData() {
            const allTools = await localDB.tools.toArray();
            const filteredTools = allTools.filter((tool) => {
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
            await localDB.filteredTools.clear();
            await localDB.filteredTools.bulkPut(filteredTools);
            localStorage.setItem('inputValue', inputValue);
            localStorage.setItem('notokcheckboxState', isNotOkCheckboxChecked);
   
            if (filteredTools.length > 0) {
               setTools(filteredTools);
            } else {
               setTools([]);
            }
         }
         getData();
      }
      //eslint-disable-next-line
   }, [isNotOkCheckboxChecked]);

   // Выгрузка в Эксель

   async function getDataForDownload() {
      const toolList = await localDB.filteredTools.toArray();
      return toolList;
   }

   async function downloadAsExcel() {
      const worksheet = XLSX.utils.json_to_sheet(await getDataForDownload());
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
                  id='okcheckbox__id'
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
                  id='notokcheckbox__id'
                  className='searchform__label'>Не годные</label>
               <button type='button' className='searchform__clear-button' onClick={removeFilter}>Снять все фильтры</button>
            </fieldset>
            {isInputEmpty && <span className="searchform__input-error">Нужно ввести ключевое слово</span>}
         </form >
      </section>
   )
}

export default SearchForm;