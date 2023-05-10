import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const ProductEdit = () => {
  const [value, setValue] = useState('');

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div>
      <ReactQuill theme='snow' value={value} onChange={setValue} />
    </div>
  );
};

export default ProductEdit;
