import React, { useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import "./style.css";

function AddressModal({ setShow, show, saveAddress }) {
  const initialFormData = {
    flatNo: "",
    landmark: "",
    addressType: "",
  };
  const handleClose = () => setShow(false);

  const [formData, updateFormData] = useState(initialFormData);

  const defaultAddressType = [
    {
      id: "home",
      title: "Home",
      value: "home",
    },
    {
      id: "office",
      value: "office",
      title: "Office",
    },
    {
      id: "other",
      value: "other",
      title: "Others",
    },
  ];
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    saveAddress(formData);
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Details</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="flatNo">
              <Form.Label>Flat No/ Wing</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="flatNo"
                type="number"
                placeholder="Enter flat no/wing"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="landmark">
              <Form.Label>Building / Landmark</Form.Label>
              <Form.Control
                onChange={handleChange}
                as="textarea"
                name="landmark"
                placeholder="Building/ Landmark"
              />
            </Form.Group>

            <div className="address-type-container">
              <Form.Label>Address Type</Form.Label>
              <div>
                {defaultAddressType.map((type, index) => (
                  <ButtonGroup key={index} className="mr-3" toggle>
                    <ToggleButton
                      key={index}
                      type="radio"
                      name="addressType"
                      value={type.value}
                      className="margin5"
                      variant={`${
                        formData.addressType === type.value
                          ? "primary"
                          : "outline-primary"
                      }`}
                      checked={formData.addressType === type.value}
                      onClick={() =>
                        updateFormData({ ...formData, addressType: type.value })
                      }
                    >
                      {type.title}
                    </ToggleButton>
                  </ButtonGroup>
                ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
export default AddressModal;
