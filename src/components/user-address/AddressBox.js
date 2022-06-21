import React, { useState } from "react";
import location from "../../assets/location.png";

import ChangeAddressModal from "./AddressModal";

export default function UserAddressUI({ address, saveAddress }) {
  const [showChangeAddressModal, setChangeAddressModal] = useState(false);
  return (
    <>
      <div className="wrapper-footer-ui">
        <>
          <h2 className="footer-heading-text">Add your address</h2>
          <div className="align-address-button">
            <div className="user-address-show">
              <img src={location} alt="Location" className="location-img" />
              <div>
                <div className="building-name">{address.buildingName}</div>
                <span>{address.houseNo}</span>
                <span>{address.colonyName}</span>
                <span>{address.landMark}</span>
                <span>{address.city}</span>
                <span>{address.pinCode}</span>
              </div>
            </div>
            <button
              className="change-address-button"
              onClick={() => setChangeAddressModal(true)}
            >
              Change
            </button>
          </div>
        </>
        <button
          className="confirm-location-button"
          onClick={() => console.log("confirm")}
        >
          Confirm location
        </button>
        <ChangeAddressModal
          setShow={setChangeAddressModal}
          show={showChangeAddressModal}
          saveAddress={saveAddress}
        />
      </div>
    </>
  );
}
