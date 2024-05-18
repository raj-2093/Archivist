import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "500px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
};

export default function ModalWizard({
  children,
  modalShowState,
  setModalShowState,
}) {
  const handleClose = () => setModalShowState(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>{openModalButtonLabel}</Button> */}
      <Modal
        open={modalShowState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
