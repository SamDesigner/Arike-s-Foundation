import React, { useState, useRef } from "react";
import { db, storage } from "../Config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Dashboard from "../components/Dashboard/Dashboard";
import MobileDashboard from "../components/Dashboard/MobileDashboard";

const AddBlog = () => {
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [imageUpload, setImageUpload] = useState(null); // State for image upload
  const [loading, setLoading] = useState(false); // State for loading

  const fileInputRef = useRef(null); // Reference for the file input field

  const blogCollectionRef = collection(db, "blogs");

  const submitBlog = async () => {
    // Check if all fields are filled
    if (!newBlogTitle || !authorName || !blogContent || !imageUpload) {
      alert("Please fill all the fields before submitting.");
      return;
    }

    setLoading(true);

    if (imageUpload) {
      const imageRef = ref(storage, `images/${imageUpload.name}`);
      await uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
          try {
            await addDoc(blogCollectionRef, {
              Author: authorName,
              Body: blogContent,
              Title: newBlogTitle,
              ImageURL: url,
            });
            setAuthorName("");
            setNewBlogTitle("");
            setBlogContent("");
            setImageUpload(null);
            if (fileInputRef.current) {
              fileInputRef.current.value = ""; // Reset the file input field
            }
          } catch (err) {
            console.error(err);
          } finally {
            setLoading(false);
          }
        });
      });
    } else {
      try {
        await addDoc(blogCollectionRef, {
          Author: authorName,
          Body: blogContent,
          Title: newBlogTitle,
        });
        setAuthorName("");
        setNewBlogTitle("");
        setBlogContent("");
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Reset the file input field
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-200">
      <div className="w-[25%] hidden md:block">
        <Dashboard />
      </div>
      <div>
        <MobileDashboard />
      </div>
      <div className="w-[100%] px-[16px] lg:px-[0px] md:w-[75%] overflow-y-scroll">
        <div className="flex flex-col  lg:w-[80%] mx-auto mt-[20vh] gap-[20px]">
          <input
            placeholder="Topic"
            type="text"
            className="border p-2"
            value={newBlogTitle}
            onChange={(e) => setNewBlogTitle(e.target.value)}
            required
          />
          <input
            placeholder="Author"
            type="text"
            className="border p-2"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
          />
          <textarea
            className="border p-2"
            placeholder="Input Content"
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            required
          ></textarea>
          <input
            type="file"
            className="border p-2 bg-white cursor-pointer"
            onChange={(e) => setImageUpload(e.target.files[0])}
            ref={fileInputRef} // Assign the reference to the file input field
            required // Update state with selected file
          />
          <button
            onClick={submitBlog}
            className="bg-dashboardBg text-white p-2"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Posting..." : "Post"}
          </button>
          {loading && <div className="loader"></div>} {/* Loader component */}
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
