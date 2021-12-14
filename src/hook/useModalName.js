import { useState, useEffect } from "react";

const UseModalName = () => {
 
  const keyStore = "name";
  const [nameProfile, setNameProfile] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getName();
  }, []);

  const sendNameToStorage = (name) => {
    window.localStorage.setItem(keyStore, JSON.stringify(nameProfile));
  };

  const addName = () => {
    setNameProfile(nameProfile);
    sendNameToStorage();
    setOpenModal(false);
  };

  const getName = () => {
    const nameStorage = JSON.parse(window.localStorage.getItem(keyStore));
    if (nameStorage !== null && nameStorage !== "") {
      setNameProfile(nameStorage);
    } else {
      setOpenModal(true);
    }
  };

  return {
    addName,
    openModal,
    setOpenModal,
    nameProfile,
    setNameProfile,
  };
};

export default UseModalName;
