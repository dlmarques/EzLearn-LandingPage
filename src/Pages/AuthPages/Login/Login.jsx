import React from "react";
import { useDispatch, useSelector } from "react-redux";


//UI Components
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import ResetModal from "./components/ResetModal";

//State management
import { loginModalActions } from "../../../store/UI/LoginModal/LoginUI";
import { resetPasswordModalActions } from "../../../store/UI/ResetPasswordModal/ResetPasswordSlice";

const Login = () => {
  const dispatch = useDispatch();

  const loginIsVisible = useSelector((state) => state.loginUI.loginIsVisible);

  function closeLoginModal() {
    dispatch(loginModalActions.closeLoginModal());
  }
  function openReset() {
    dispatch(resetPasswordModalActions.openResetModal());
  }

  return (
    <>
      <Modal closeButton open={loginIsVisible} onClose={closeLoginModal}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome back to <b>EzLearn</b>
          </Text>
        </Modal.Header>
        <Modal.Body>
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
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me?</Text>
            </Checkbox>
            <Text size={14} css={{ cursor: "pointer" }} onClick={openReset}>
              Forgot Pasword?
            </Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeLoginModal}>
            Close
          </Button>
          <Button auto>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
      <ResetModal />
    </>
  );
};

export default Login;
