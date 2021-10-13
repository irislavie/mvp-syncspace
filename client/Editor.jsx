import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {io} from 'socket.io-client';
const socket = io('http://localhost:3001');

var QuillEditor = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIO = io('http://localhost:3001');
    setSocket(socketIO);
    return () => {
      socketIO.disconnect();
    };
  }, []);

  return (
    <ReactQuill theme="snow" />
  );
};

export default QuillEditor;
