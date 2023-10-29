const baseUrl = "http://localhost:3000";

function getResponseData(res) {
   if (!res.ok) {
      return res.json().then((err) => {
         return Promise.reject(err.message);
      })
   }
   return res.json();
}

export const register = (name, id, password) => {
   return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ name, id, password })
   })
      .then(getResponseData);
};

export const login = (id, password) => {
   return fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ id, password })
   })
      .then(getResponseData);
};

export const clearCookie = () => {
   return fetch(`${baseUrl}/signout`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      credentials: "include",
   })
      .then(getResponseData);
}

export const checkToken = () => {
   return fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
   })
      .then(getResponseData);
};