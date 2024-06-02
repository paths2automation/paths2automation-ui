import React,{useState} from 'react';
import '../css/FileUploadForm.css'; // Import CSS file

function FileUploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
      setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      if (file) {
          console.log('Uploading:', file);
          alert('File submitted! Check the console for details.');
      }
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>
        Upload File:
        <input type="file" onChange={handleFileChange} />
    </label>
    <button type="submit">Upload</button>
</form>
  );
};

export default FileUploadForm;
