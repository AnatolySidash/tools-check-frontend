class MainApi {
   constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
   }

   _checkResponse(res) {
      if (!res.ok) {
         return res.json().then((err) => {
            return Promise.reject(err.message);
         })
      }
      return res.json();
   }

   getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
         headers: this._headers,
         credentials: "include",
      })
         .then(this._checkResponse);
   }

   addTool(tool) {
      return fetch(`${this._baseUrl}/tools`, {
         method: "POST",
         headers: this._headers,
         credentials: "include",
         body: JSON.stringify({
            "toolId": tool.toolId,
            "toolNameRU": tool.toolNameRU,
            "toolNameEN": tool.toolNameEN,
            "toolManufacturer": tool.toolManufacturer,
            "toolSerialNo": tool.toolSerialNo,
            "toolRegisterNo": tool.toolRegisterNo,
            "toolParameters": tool.toolParameters,
            "toolCheckDate": tool.toolCheckDate,
            "toolUsagePeriod": tool.toolUsagePeriod,
            "toolNextCheckDate": tool.toolNextCheckDate,
            "toolRemainUsagePeriod": tool.toolRemainUsagePeriod,
            "toolCertificateNo": tool.toolCertificateNo,
            "toolCondition": tool.toolCondition,
            "toolCalibrationStatus": tool.toolCalibrationStatus,
            "toolCurrentLocation": tool.toolCurrentLocation,
            "toolUsageLocation": tool.toolUsageLocation,
            "toolOwnerDept": tool.toolOwnerDept,
            "toolOwnerSection": tool.toolOwnerSection,
            "toolOwnerName": tool.toolOwnerName,
            "toolCheckCompany": tool.toolCheckCompany,
            "toolModel": tool.toolModel,
            "toolInstalledLocation": tool.toolInstalledLocation,
            "toolType": tool.toolType,
            "toolCategory": tool.toolCategory,
            "comment": tool.comment,
         })
      })
         .then(this._checkResponse);
   }

   getTools() {
      return fetch(`${this._baseUrl}/tools`, {
         headers: this._headers,
         credentials: "include",
      })
         .then(this._checkResponse);
   }

   deleteTool(id) {
      return fetch(`${this._baseUrl}/tools/${id}`, {
         method: "DELETE",
         headers: this._headers,
         body: JSON.stringify({
            "id": id,
         }),
         credentials: "include",
      })
         .then(this._checkResponse);
   }

   editToolCard(tool) {
      return fetch(`${this._baseUrl}/tools/${tool._id}`, {
         method: "PATCH",
         headers: this._headers,
         body: JSON.stringify({
            "toolId": tool.toolId,
            "toolNameRU": tool.toolNameRU,
            "toolNameEN": tool.toolNameEN,
            "toolManufacturer": tool.toolManufacturer,
            "toolSerialNo": tool.toolSerialNo,
            "toolRegisterNo": tool.toolRegisterNo,
            "toolParameters": tool.toolParameters,
            "toolCheckDate": tool.toolCheckDate,
            "toolUsagePeriod": tool.toolUsagePeriod,
            "toolNextCheckDate": tool.toolNextCheckDate,
            "toolRemainUsagePeriod": tool.toolRemainUsagePeriod,
            "toolCertificateNo": tool.toolCertificateNo,
            "toolCondition": tool.toolCondition,
            "toolCalibrationStatus": tool.toolCalibrationStatus,
            "toolCurrentLocation": tool.toolCurrentLocation,
            "toolUsageLocation": tool.toolUsageLocation,
            "toolOwnerDept": tool.toolOwnerDept,
            "toolOwnerSection": tool.toolOwnerSection,
            "toolOwnerName": tool.toolOwnerName,
            "toolCheckCompany": tool.toolCheckCompany,
            "toolModel": tool.toolModel,
            "toolInstalledLocation": tool.toolInstalledLocation,
            "toolType": tool.toolType,
            "toolCategory": tool.toolCategory,
            "comment": tool.comment,
         }),
         credentials: "include",
      })
         .then(this._checkResponse);
   }

   editProfile({ name, id }) {
      return fetch(`${this._baseUrl}/users/me`, {
         method: "PATCH",
         headers: this._headers,
         body: JSON.stringify({
            "name": name,
            "id": id
         }),
         credentials: "include",
      })
         .then(this._checkResponse);
   }
}

const mainApi = new MainApi({
   baseUrl: 'http://localhost:3000',
   headers: {
      'Content-Type': 'application/json'
   }
});

export default mainApi;