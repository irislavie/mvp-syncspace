import React, {useEffect, useState} from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {io} from 'socket.io-client';
import QuillCursors from 'quill-cursors';

var QuillEditor = () => {
  const [value, setValue] = useState('');
  const [socket, setSocket] = useState(null);
  const [cursor, setCursor] =useState(null);

  var modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['image']
    ]
  };

  var formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'image'
  ];

  useEffect(() => {
    var socketIO = io('http://localhost:3001');
    setSocket(socketIO);
    return () => {
      socketIO.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket !== null && socket !== undefined) {
      socket.on('receive', (response) => {
        setValue(response);
      })
    }
  });

  var handleChange = (content, delta, source, editor) => {
    if (socket === undefined || socket === null) {
      return ;
    }
    const updates = editor.getContents().ops;
    socket.emit('send', updates);
  }

  return (
    <ReactQuill theme="snow" modules={modules} formats={formats} value={value} onChange={handleChange}/>
  );
};

export default QuillEditor;
