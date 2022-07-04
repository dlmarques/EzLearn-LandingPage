import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import "./Register.scss"

//UI Components
import { Modal, Button, Text, Input, Row } from "@nextui-org/react";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi";

//state management
import { registerModalActions } from "../../../store/UI/RegisterModal/RegisterUI";


const Register = () => {
  const dispatch = useDispatch();


  //states

  const registerIsVisible = useSelector((state) => state.registerUI.registerIsVisible)
  const closeRegisterModal = () => dispatch(registerModalActions.closeRegisterModal())



  return (
    <>
      <Modal closeButton open={registerIsVisible} onClose={closeRegisterModal}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to <b>EzLearn</b>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Row css={{gap: "10px"}}>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="First Name"
            type="text"
            aria-label="username"
            contentLeft={<HiOutlineUser />}
          />
           <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Last Name"
            type="text"
            aria-label="username"
            contentLeft={<HiOutlineUser />}
          />
          </Row>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            type="text"
            aria-label="username"
            contentLeft={<HiOutlineUser />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            type="email"
            aria-label="email"
            contentLeft={<HiOutlineMail />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            type="password"
            aria-label="password"
            contentLeft={<HiOutlineLockClosed />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Confirm Password"
            type="password"
            aria-label="password"
            contentLeft={<HiOutlineLockClosed />}
          />
          <select name="" id="select">
            <option hidden selected>Choose your role</option>
            <option value="Seller">Seller</option>
            <option value="Student">Student</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeRegisterModal}>
            Close
          </Button>
          <Button auto>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
};

export default Register;
