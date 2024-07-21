import React from "react";
import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title or Caption"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a Category</option>
            <option value="adventure">Adventure</option>
            <option value="culture">Culture</option>
            <option value="relaxation">Relaxation</option>
            <option value="wildlife">Wildlife</option>
            <option value="urban">Urban</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type='file' accept="image/*"/>
          <Button type="button" className="bg-purple-500" size='sm'>Upload Image</Button>
        </div>
        <ReactQuill required theme="snow" placeholder="Write about your Memory..." className="h-72 mb-12" />
        <Button type="submit" className="bg-purple-500">Post</Button>
      </form>
    </div>
  );
};

export default CreatePost;
