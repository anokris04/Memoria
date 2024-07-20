import { Alert, Button, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getStorage, ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage";
import { app } from '../firebase.js'

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(0);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const filePickerRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError("Could not upload the photo , check size and format");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center text-2xl font-bold">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          ref={filePickerRef}
          type="file"
          accept="images/*"
          hidden
          onChange={handleImageChange}
        />
        <div
          onClick={() => filePickerRef.current.click()}
          className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
        >
          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-full border-4 border-gray-300"
          />
        </div>
        {imageFileUploadError && 
                <Alert color='failure'>{imageFileUploadError}</Alert>  
        }
        <TextInput
          className="mt-5"
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="Email"
          defaultValue={currentUser.email}
        />
        <TextInput type="password" id="password" placeholder="Password" />
        <Button type="submit" className="bg-purple-500">
          Update
        </Button>
      </form>
      <div className="mt-1 flex justify-between mx-2">
        <span className="text-red-600 font-semibold cursor-pointer">
          Delete Account
        </span>
        <span className="font-semibold text-red-600 cursor-pointer">
          Log Out
        </span>
      </div>
    </div>
  );
};

export default DashProfile;
