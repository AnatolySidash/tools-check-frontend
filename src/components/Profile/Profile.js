import React from 'react';
import Header from './../Header/Header.js';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { useInput } from '../../utils/Validation.js';
import mainApi from '../../utils/MainApi.js';

function Profile({ isLoggedIn, onLogout, setCurrentUser, isError, setError, errorMessage, setErrorMessage, isSubmitting, setIsSubmitting }) {

   const currentUser = React.useContext(CurrentUserContext);

   const [submitButtonActive, setSubmitDataActive] = React.useState(false);
   const [isSuccessProfileUpdate, setSuccessProfileUpdate] = React.useState(false);
   const [isProfileDataChanged, setProfileDataChanged] = React.useState(false);

   const name = useInput(currentUser.name, { isEmpty: true, minLength: 2, isUserName: true });
   const id = useInput(currentUser.id, { isEmpty: true, minLength: 7});

   function handleErrorMessage() {
      setError(true);
   }

   function onUserDataChange() {
      setSubmitDataActive(true)
   }

   function handleSubmit(event) {
      setIsSubmitting(true);
      setError(false);
      event.preventDefault();

      if (currentUser.name !== name.value || currentUser.id !== id.value) {
         handleUpdateUser({
            name: name.value,
            id: id.value
         });
         setProfileDataChanged(true);
         setSuccessProfileUpdate(true);
      }
      setIsSubmitting(false);
   }

   function handleUpdateUser({ name, id }) {
      mainApi.editProfile({ name: name, id: id })
         .then((data) => {
            setCurrentUser(data.data);
         })
         .catch((err) => {
            handleErrorMessage();
            console.error(`Ошибка получения данных профиля: ${err}`);
            setErrorMessage({
               message: err
            })
         });
   }

   async function userInfoUpdate() {
      try {
         const userInfo = await mainApi.getUserInfo();
         setCurrentUser(userInfo.data);
      } catch (err) {
         console.error(`Ошибка получения данных профиля: ${err}`);
      }
   }

   React.useEffect(() => {
      userInfoUpdate();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <Header
            isLoggedIn={isLoggedIn}
         />
         <main className="profile">
            <h1 className="profile__greeting">Привет, {currentUser.name}</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
               <label className="profile__item">Имя
                  <input
                     type="text"
                     placeholder="Имя"
                     className="profile__input"
                     value={name.value}
                     minLength={2}
                     maxLength={40}
                     onChange={(e) => name.onChange(e)}
                     onBlur={(e) => name.onBlur(e)}
                     required>
                  </input>
               </label>
               <label className="profile__item">ID номер
                  <input
                     type="text"
                     placeholder="в формате 33100777"
                     className="profile__input"
                     value={id.value}
                     minLength={8}
                     maxLength={8}
                     onChange={(e) => id.onChange(e)}
                     onBlur={(e) => id.onBlur(e)}
                     required>
                  </input>
               </label>
               {(name.isDirty && name.isEmpty) && <span className="form__input-error">Поле не может быть пустым</span>}
               {(name.isDirty && name.minLengthError) && <span className="form__input-error">Не менее 2-х символов</span>}
               {(name.isDirty && name.userNameError) && <span className="form__input-error">Неверный формат имени пользователя</span>}
               {(id.isDirty && id.isEmpty) && <span className="form__input-error">Поле не может быть пустым</span>}
               {(id.isDirty && id.minLengthError) && <span className="form__input-error">В ID номере должно быть 8 символов</span>}
               {(id.isDirty && id.emailError) && <span className="form__input-error">Неверный формат электронной почты</span>}
               {!submitButtonActive && <button type="button" onClick={onUserDataChange} className="profile__button">Редактировать</button>}
               {(!isError && isSuccessProfileUpdate && isProfileDataChanged) && <span className="form__submit-error">Данные пользователя успешно обновлены</span>}
               {isError && <span className="form__input-error form__input-error_main">Произошла ошибка на сервере:{errorMessage.message}</span>}
               {submitButtonActive && <button disabled={!name.inputValid || !id.inputValid || (currentUser.name === name.value && currentUser.id === id.value) || isSubmitting} type="submit" className="form__button">Сохранить</button>}
            </form>
            <Link to="/">
               {!submitButtonActive && <button type="button" onClick={onLogout} className="profile__exit-button">Выйти из аккаунта</button>}
            </Link>
         </main >
      </>
   )
}

export default Profile;