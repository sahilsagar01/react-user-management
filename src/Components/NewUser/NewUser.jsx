import React, { useState } from "react";
import Modal from "../Modal/Modal";
import TitleIcon from "@mui/icons-material/Title";
import CloseIcon from "@mui/icons-material/Close";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EditIcon from "@mui/icons-material/Edit";
import "./NewUser.css";
import { Button } from "@mui/material";
import axios from "axios";

function NewUser(props) {
  console.log("line 9 usercard", props.cardInfo);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((pV) => {
      return {
        ...pV,
        [name]: value,
      };
    });
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const api = "https://jsonplaceholder.typicode.com/users";
      const postUser = await axios.post(api);
      props.setNewUser((pV) => {
        return [...pV, newUser];
      });
      setNewUser({
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
        promptText: "New user added.",
        severity: "success"
      })
    } catch (err) {
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
                  name="name"
                  placeholder="Enter Name"
                  onChange={handleChange}
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
                  name="email"
                  onChange={handleChange}
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
                  name="phone"
                  placeholder="Enter phone number"
                  onChange={handleChange}
                />
                <EditIcon />
              </div>
            </div>
          </div>
          <Button
            onClick={handlePost}
            type="submit"
            className="formSubmit"
            variant="contained"
            size="small"
          >
            {" "}
            Create{" "}
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default NewUser;
