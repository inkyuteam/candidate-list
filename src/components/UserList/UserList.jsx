import React, { useEffect, useState } from "react";
import "./UserList.css";
import { UserListItem } from "../UserListItem/UserListItem";
import { UserFormModal } from "../UserFormModal/UserFormModal";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setUsers([
      {
        first: "James",
        second: "Edwards",
        mobile: "+18156805710",
        email: "jamesedwards@gmail.com",
      },
      {
        first: "Stefano",
        second: "Perfili",
        mobile: "+61112356",
        email: "stefanoperfili@gmail.com",
      },
      {
        first: "Eric",
        second: "Drummond",
        mobile: "+12777350664",
        email: "ericdrummond@gmail.com",
      },
      {
        first: "Sulayman",
        second: "Susso",
        mobile: "+883423644",
        email: "sulaymansusso@gmail.com",
      },
    ]);
  }, []);
  const deleteEvent = (email) => {
    const next = users.filter((item) => item.email !== email);
    if (next.length >= 1) {
      setUsers(next);
    } else {
      window.alert("List must contain at leat one candidate.");
    }
  };
  const modalClicked = () => {
    setModal(true);
  };
  const addUser = (values) => {
    if(users.filter((item) => item.email === values.email).length !== 0) {
      alert('Email is not unique. Please try again with another email address.');
      return;
    }
    setUsers([
      ...users,
      {
        first: values.firstName,
        second: values.lastName,
        mobile: values.phoneNumber,
        email: values.email,
      },
    ]);
    setModal(false);
  };
  return (
    <div className="user-list">
      {modal ? (
        <UserFormModal
          closeEvent={() => setModal(false)}
          addEvent={(values) => addUser(values)}
        />
      ) : (
        ""
      )}
      <div className="user-list-header">
        Candidate List
        <div className="plus" onClick={() => modalClicked()}>
          +
        </div>
      </div>
      <div className="user-list-body">
        {users.map((item) => {
          return (
            <UserListItem
              data={item}
              key={item.email}
              deleteEvent={(e) => {
                deleteEvent(e);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
