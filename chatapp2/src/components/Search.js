import React, { useContext, useEffect, useState } from 'react';
// import myimg from '../images/myimg.jpg';
import { collection, query, where, getDocs, setDoc, updateDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from '../context/AuthContext';

const Search = () => {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const [alluser, setAlluser] = useState(null);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersData = [];
      querySnapshot.forEach((doc) => {
        // Check if the user is not the current user
        if (doc.id !== currentUser.uid) {
          usersData.push({ id: doc.id, ...doc.data() });
        }
      });
      setAlluser(usersData);
    };

    fetchUsers();
  }, [currentUser]);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });

    } catch (err) {
      setErr(true)
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create

    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create users chat
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) { }

    setUser(null);
    setUsername("");

  };

  return (
    <>
      <div className='search'>
        <div className="searchForm">
          <input type="text"
            placeholder='Find users...'
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        {err && <span>User not found!</span>}
        {user && (<div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="myimg" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>)}
      </div>
      <hr style={{ "border": "3px solid lightgray" }} />
    </>
  )
}

export default Search