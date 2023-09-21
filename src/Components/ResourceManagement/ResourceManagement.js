import React, { useState } from 'react';


function ResourceManagement
() {
  const [resourceType, setResourceType] = useState('document');
  const [resourceFile, setResourceFile] = useState(null);
  const [resourceLink, setResourceLink] = useState('');
  const [resources, setResources] = useState([]);

  const handleResourceTypeChange = (e) => {
    setResourceType(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResourceFile(file);
  };

  const handleLinkChange = (e) => {
    setResourceLink(e.target.value);
  };

  const handleUpload = () => {
    if (resourceType === 'link') {
      setResources([...resources, { type: resourceType, link: resourceLink }]);
    } else if (resourceFile) {
      setResources([...resources, { type: resourceType, file: resourceFile }]);
    }
    // Reset form fields
    setResourceType('document');
    setResourceFile(null);
    setResourceLink('');
  };

  return (
    <div className="container mt-5">
      <h2>Resource Upload</h2>
      <div className="mb-3">
        <label htmlFor="resourceType" className="form-label">Select Resource Type</label>
        <select
          id="resourceType"
          className="form-select"
          value={resourceType}
          onChange={handleResourceTypeChange}
        >
          <option value="document">Document</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
          <option value="link">Link</option>
        </select>
      </div>
      {resourceType === 'link' ? (
        <div className="mb-3">
          <label htmlFor="resourceLink" className="form-label">Enter Link</label>
          <input
            type="text"
            className="form-control"
            id="resourceLink"
            value={resourceLink}
            onChange={handleLinkChange}
          />
        </div>
      ) : (
        <div className="mb-3">
          <label htmlFor="resourceFile" className="form-label">Upload File</label>
          <input
            type="file"
            className="form-control"
            id="resourceFile"
            onChange={handleFileChange}
          />
        </div>
      )}
      <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
      <hr />
      <h3>Uploaded Resources</h3>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            {resource.type === 'link' ? (
              <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.link}</a>
            ) : (
              <div>
                {resource.type === 'document' && (
                  <a href={URL.createObjectURL(resource.file)} target="_blank" rel="noopener noreferrer">View Document</a>
                )}
                {resource.type === 'image' && <span>Uploaded Image File</span>}
                {resource.type === 'video' && <span>Uploaded Video File</span>}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceManagement
;
