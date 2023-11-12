import React from 'react';
import Header from '../Header/Header.js';
import Department from './../Department/Department.js';

function Status({ departments, isLoggedIn, onDepartmentClick, selectedDepartment }) {

   return (
      <>
         <Header
            isLoggedIn={isLoggedIn}
         />

         <main className="status">
            <h1 className='status__title'>Ключевые показатели подразделений</h1>
            {departments.map((department) => (
                  <Department
                     key={department._id}
                     department={department}
                     selectedDepartment={selectedDepartment}
                     onDepartmentClick={onDepartmentClick}
                  />
            ))}  
         </main >

      </>
   )
}

export default Status;