import Api from "./Api";

export default class Address extends Api {
  static saveAddress = async (params) => {
    // const postData = {};
    return Api.postRequest("/address-management-service/address", params);
  };

}

// current location, 
// goelocation

