import { PropTypes } from "prop-types";
import { createPortal } from "react-dom";

import { Button } from "components/UI/Button/Button";
import icon from "images/icons-sprite.svg";
import {
  Backdrop,
  Modal,
  ButtonClose,
  Text,
  ButtonWrapper,
} from "./ConfirmModal.styled";


const ConfirmModal = ({text}) => {

  return createPortal(
    <Backdrop>
      <Modal>
        <ButtonClose>
          <svg>
            <use href={`${icon}#icon-close`}></use>
          </svg>
        </ButtonClose>
        <div>
          <Text>{text}</Text>
          <ButtonWrapper>
            <Button
              type={"button"}
              color={"accent"}
              design={"modal"}
            >
              YES
            </Button>
            <Button
              type={"button"}
              color={"white"}
              design={"modal"}>
              NO
            </Button>
          </ButtonWrapper>
        </div>
      </Modal>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
};

export default ConfirmModal;

ConfirmModal.propTypes = {
  text: PropTypes.string.isRequired,
}