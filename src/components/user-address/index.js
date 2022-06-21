import React, { useReducer, useState } from "react";
import "./style.css";
import UserAddressUI from "./AddressBox";
import Address from "../../api/Address";

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
    userId: 1
  };
  const [address, dispatchAddress] = useReducer(updateAddress, {
    ...initialState,
  });
  const [showChangeAddress, setChangeAddress] = useState(false);
  const onChangeAddress = () => {
    setChangeAddress(true);
  };
  const saveAddress =  async () => {
    try {
      const requestResponse = await Address.saveAddress(initialState);

      console.log(requestResponse);
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <footer className="footer-wrapper">
        <section className="footer-inner-wrapper">
          <UserAddressUI address={address} onChangeAddress={onChangeAddress} saveAddress={saveAddress} />
        </section>
      </footer>
    </>
  );
};

export default UserAddress;
