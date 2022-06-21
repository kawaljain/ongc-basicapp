import React, { useReducer, useState } from "react";
import "./style.css";
import AddressBox from "./AddressBox";
import Address from "../../api/Address";
import MapUI from "./map-ui";
const updateAddress = (state, action) => {};

const UserAddress = () => {
  const initialState = {
    firstName: "Test",
    lastName: "User ",

    houseNo: "123",
    buildingName: "J Tower",
    colonyName: "Dlf Tower",
    landMark: "Near CTC Mall",
    city: "New Delhi",
    state: "Delhi",
    pinCode: "110015",
    address: "Dlf Capital Green",
    locality: "Moti nagar",
    email: "testi@gmail.com",
    mobileNum: "9999999999",
    latitude: "12.4535445",
    longitude: "77.9283792",
    addressId: "string",
    defaultAddress: false,
    userId: 1,
  };
  const [address, updateAddress] = useState(initialState);

  const [showChangeAddress, setChangeAddress] = useState(false);

  const onChangeAddress = () => {
    setChangeAddress(true);
  };

  const saveAddress = async (data) => {
    console.log("d");
    console.log(data);
    console.log(address);
    return;
    try {
      const requestResponse = await Address.saveAddress(initialState);

      console.log(requestResponse);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePositionChange = (lat, lng) => {
    console.log(lat, lng);
    // updateAddress({
    //   ...address,
    //   latitude:lat,
    //   longitude:lng
    // })
  };

  return (
    <>
      <MapUI savePosition={handlePositionChange} />
      <footer className="footer-wrapper">
        <section className="footer-inner-wrapper">
          <AddressBox
            address={address}
            onChangeAddress={onChangeAddress}
            saveAddress={saveAddress}
          />
        </section>
      </footer>
    </>
  );
};

export default UserAddress;
