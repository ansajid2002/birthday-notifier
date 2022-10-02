import React from "react";
import { app, storage, database } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import "../form.css"
const Update = () => {
  const [updateData, setupdateData] = React.useState({
    name: "",
    dob: "",
  });
  const [imgBox, setImgBox] = React.useState();

  const collectionRef = collection(database, "user");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setupdateData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    addDoc(collectionRef, {
      name: updateData.name,
      dob: updateData.dob,
    })
      .then(() => {
        
        setupdateData({ name: "", dob: "" });
      })
      .catch((err) => {
        alert(err.message);
      });

    const mountRef = ref(storage, `${updateData.name}/${imgBox.name}`);
    const uploadTask = uploadBytesResumable(mountRef, imgBox);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is" + progress + " % done");
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          alert("data sent Successfully");
          setImgBox("")
        });
      }
    );
  };

  return (
    <div className = "formBox">
    <div className = "formclass">
    <h1 className="heading up">Enter your Details </h1>
      <form onSubmit={handleUpdateSubmit}>
        <div className="labin">
          <label htmlFor="a" className = "labels">Enter Name</label>
          <input
          className="inputs"
            id="a"
            type="text"
            placeholder="Enter Name"
            name="name"
            value={updateData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="labin">
          <label htmlFor="b" className = "labels">Enter Date of Birth</label>
          <input
            className="inputs"
            id="b"
            type="date"
            placeholder="dob"
            name="dob"
            value={updateData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="labin">
          <label className = "labels">Select image</label>
          <input
          className="inputs"
            type="file"
            onChange={(event) => setImgBox(event.target.files[0])}
            required
          />
        </div>
        <button className="submitBtn" type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Update;
