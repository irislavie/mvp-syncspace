import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

var QuillEditor = () => {
  // const [value, setValue] = useState('');
  return (
    <ReactQuill theme="snow" />
  );
};

export default QuillEditor;
