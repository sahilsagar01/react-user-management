import React, { useState } from "react";
import Modal from "../Modal/Modal";
import TitleIcon from "@mui/icons-material/Title";
import CloseIcon from "@mui/icons-material/Close";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import "./UserCard.css";
import { Button } from "@mui/material";

function UserCard(props) {
  console.log("line 9 usercard", props.cardInfo);
  const [userInfo, setUSerInfo] = useState({ ...props.cardInfo });
  console.log(userInfo);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const api = `https://jsonplaceholder.typicode.com/users${props.id}`;
      const updateUser = await axios.patch(api, userInfo);
    } catch (err) {
      if (err.code === "ERR_BAD_REQUEST") {
        setUSerInfo({
          name: "",
          email: "",
          phone: "",
        });
        const closeModal = () => {
          props.closeing();
        };
        closeModal();
        props.setAlertPrompt({
          condition: true,
          promptText: "User detail are successfully updated",
          severity: "success"
        })
      }
      console.log(err);
    }
  };

  return (
    <div>
      <Modal onClose={() => props.closeing()}>
        <form>
          <div className="usercard">
            <div className="heading">
              <h1 className=" font-bold text-lg text-gray-700">Edit</h1>
              <CloseIcon onClick={() => props.closeing()} />
            </div>
            <div className="usercard_box">
              <div className="usercard_box_title">
                <TitleIcon />
                Name
              </div>
              <div className="inputSection">
                <input
                  type="text"
                  text={userInfo.name || ""}
                  defaultValue={userInfo.name || ""}
                  placeholder="Enter Name"
                />
                <EditIcon />
              </div>
            </div>

            <div className="usercard_box">
              <div className="usercard_box_title">
                <AlternateEmailIcon />
                Email
              </div>
              <div className="inputSection">
                <input
                  type="text"
                  text={userInfo.email || ""}
                  defaultValue={userInfo.email || ""}
                  placeholder="Enter email"
                />
                <EditIcon />
              </div>
            </div>

            <div className="usercard_box">
              <div className="usercard_box_title">
                <ContactPhoneIcon />
                Phone
              </div>
              <div className="inputSection">
                <input
                  type="text"
                  text={userInfo.phone}
                  defaultValue={userInfo.phone}
                  placeholder="Enter phone number"
                />
                <EditIcon />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            onClick={handleUpdate}
            className="formSubmit"
            variant="contained"
            size="small"
          >
            {" "}
            Save{" "}
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default UserCard;
