import React from "react";
import { useSelector, useDispatch } from "react-redux";

//UI
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { HiOutlineMail } from "react-icons/hi";

//State Management
import { resetPasswordModalActions } from "../../../../store/UI/ResetPasswordModal/ResetPasswordSlice";

const ResetModal = () => {
  const dispatch = useDispatch();

  const resetModalIsVisible = useSelector(
    (state) => state.resetUI.resetIsVisible
  );

  function closeReset() {
    dispatch(resetPasswordModalActions.closeResetModal());
  }


  return (
    <>
      <Modal closeButton blur open={resetModalIsVisible} onClose={closeReset}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Reset your password
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
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeReset}>
            Close
          </Button>
          <Button auto>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ResetModal;
