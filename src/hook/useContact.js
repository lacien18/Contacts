import { useState, useEffect } from "react";

const useContacts = (_) => {
  const keyStore = "contacts";
  const contact = {
    name: "",
    lastname: "",
    phone: "",
    address: "",
  };

  const [listContacts, setListContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContacts();
  }, []);

  const sendToStorage = (listData) => {
    window.localStorage.setItem(keyStore, JSON.stringify(listData));
  };

  const addContact = (_) => {
      const listData = [...listContacts, contact];

      setListContacts(listData);

      sendToStorage(listData);
   
  };

  const deleteContact = (deleteValue) => {
    const list = [...listContacts];

    list.splice(deleteValue, 1);

    setListContacts(list);

    sendToStorage(list);
    //window.localStorage.removeItem(keyStore);
  };

  const updateContact = () => {};

  const getContacts = (_) => {
    setTimeout(() => {
      const contactsStorage = JSON.parse(window.localStorage.getItem(keyStore));

      setListContacts(contactsStorage ?? []);

      setLoading(false);
    }, 1000);
  };

  return {
    contact,
    loading,
    setListContacts,
    listContacts,
    addContact,
    updateContact,
    deleteContact,
  };
};

export default useContacts;
