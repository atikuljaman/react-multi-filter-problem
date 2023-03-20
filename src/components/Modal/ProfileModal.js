import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import user_avatar from "../../assets/img/user_avatar.jpg";
import "./ProfileModal.css";

const ProfileModal = ({ show, handleClose }) => {
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="modal_wrapper"
      >
        <Modal.Body className="modal_container">
          <div className="modal_container_top">
            <div>
              <img
                src={user_avatar}
                alt="user_profile"
                className="img-fluid user_avatar"
              />
            </div>
            <p className="user_name">Atikul Jaman</p>
          </div>
          <div className="modal_container_center">
            <div className="button_container">
              <div className="notification_btn_container">
                <label>Notification sound</label>
                <button
                  className={
                    soundOn
                      ? "notification_sound_btn active"
                      : "notification_sound_btn"
                  }
                  onClick={toggleSound}
                >
                  <div className="circle"></div>
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileModal;
