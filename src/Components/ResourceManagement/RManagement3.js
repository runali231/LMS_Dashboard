import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { Delete, Edit, ViewAgenda } from '@material-ui/icons';
import { Share } from 'react-bootstrap-icons';

function ResourceManagementAndSharing() {
  const [resourceType, setResourceType] = useState('document');
  const [resourceFile, setResourceFile] = useState(null);
  const [resourceLink, setResourceLink] = useState('');
  const [resourceTitle, setResourceTitle] = useState('');
  const [resources, setResources] = useState([]);

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const day = `${now.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

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

  const handleTitleChange = (e) => {
    setResourceTitle(e.target.value);
  };

  const handleUpload = () => {
    if (resourceType === 'link') {
      setResources([...resources, { type: resourceType, link: resourceLink, title: resourceTitle, dateUploaded: getCurrentDate() }]);
    } else if (resourceFile) {
      setResources([...resources, { type: resourceType, file: resourceFile, title: resourceTitle, dateUploaded: getCurrentDate() }]);
    }
    // Reset form fields
    setResourceType('document');
    setResourceFile(null);
    setResourceLink('');
    setResourceTitle('');
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState({});
  const [newTitle, setNewTitle] = useState('');

  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [shareOption, setShareOption] = useState('entireClass');

  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedViewResource, setSelectedViewResource] = useState({});

  const openEditModal = (resource) => {
    setSelectedResource(resource);
    setNewTitle(resource.title);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedResource({});
    setNewTitle('');
  };

  const handleEdit = () => {
    const updatedResources = resources.map((resource) =>
      resource.id === selectedResource.id
        ? { ...resource, title: newTitle }
        : resource
    );
    setResources(updatedResources);
    closeEditModal();
  };

  const handleDelete = (resourceId) => {
    const updatedResources = resources.filter(
      (resource) => resource.id !== resourceId
    );
    setResources(updatedResources);
  };

  const handleShare = (resourceId) => {
    setSelectedResource(resources.find((resource) => resource.id === resourceId));
    setShowShareModal(true);
  };

  const closeShareModal = () => {
    setShowShareModal(false);
    setSelectedResource(null);
    setSelectedCourse('');
    setSelectedStudents([]);
    setShareOption('entireClass');
  };

  const handleResourceShare = () => {
    // Add your logic here to handle resource sharing with selected course/students
    console.log(
      'Sharing resource',
      selectedResource,
      'with course',
      selectedCourse,
      'and students',
      selectedStudents
    );
    closeShareModal();
  };

  const openViewModal = (resource) => {
    setSelectedViewResource(resource);
    setShowViewModal(true);
  };

  const closeViewModal = () => {
    setShowViewModal(false);
    setSelectedViewResource({});
  };

  return (
    <div className="container-fluid mt-5">
    

      {/* Resource Upload */}
      <div className='card'>
       <div className='card-header'>
       <h4>Resource Management</h4>
       </div>
       <div className='card-body'>
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

        {/* Title field */}
        <div className="mb-3">
          <label htmlFor="resourceTitle" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="resourceTitle"
            value={resourceTitle}
            onChange={handleTitleChange}
          />
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
      </div>

      {/* Resource Management Table */}
    
       </div>
       
<div className='card'>
  <div className='card-body'>
  <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Date Uploaded</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource, index) => (
            <tr key={index}>
              <td>{resource.title}</td>
              <td>{resource.type}</td>
              <td>{resource.dateUploaded}</td>
              <td>
                <Button variant="primary" onClick={() => openEditModal(resource)}>
                  {/* Edit */}
                  <Edit/>
                </Button>
                &nbsp;
                <Button variant="danger" onClick={() => handleDelete(resource.id)}>
                  {/* Delete */}
                 <Delete/>
                </Button>
                &nbsp;
                <Button variant="info" onClick={() => handleShare(resource.id)}>
                  {/* Share */}
                  <Share/>
                </Button>
                &nbsp;
                <Button variant="success" onClick={() => openViewModal(resource)}>
                  {/* View */}
                  {/* <ViewAgendaOutlined/> */}
                  <ViewAgenda/>
                </Button>
                {resource.sharedLink && (
                  <a href={resource.sharedLink} target="_blank" rel="noopener noreferrer">
                    Shared Link
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
  </div>
</div>
      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Resource</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="newTitle">New Title:</label>
          <input
            type="text"
            id="newTitle"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Share Modal */}
      <Modal show={showShareModal} onHide={closeShareModal}>
        <Modal.Header closeButton>
          <Modal.Title>Share Resource</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="selectCourse">
              <Form.Label>Select Course:</Form.Label>
              <Form.Control
                as="select"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="">Select a course</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="selectStudents">
              <Form.Label>Select Students:</Form.Label>
              <Form.Control
                as="select"
                multiple
                value={selectedStudents}
                onChange={(e) =>
                  setSelectedStudents(
                    Array.from(
                      e.target.selectedOptions,
                      (item) => item.value
                    )
                  )
                }
              >
                <option value="student1">Student 1</option>
                <option value="student2">Student 2</option>
                <option value="student3">Student 3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="shareOption">
              <Form.Label>Share Option:</Form.Label>
              <Form.Check
                type="radio"
                label="Share with entire class"
                name="shareOption"
                value="entireClass"
                checked={shareOption === 'entireClass'}
                onChange={() => setShareOption('entireClass')}
              />
              <Form.Check
                type="radio"
                label="Share with selected students"
                name="shareOption"
                value="selectedStudents"
                checked={shareOption === 'selectedStudents'}
                onChange={() => setShareOption('selectedStudents')}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeShareModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleResourceShare}>
            Share
          </Button>
        </Modal.Footer>
      </Modal>

      {/* View Modal */}
      <Modal show={showViewModal} onHide={closeViewModal}>
        <Modal.Header closeButton>
          <Modal.Title>View Resource</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Title: {selectedViewResource.title}</h5>
          <p>Type: {selectedViewResource.type}</p>
          <p>Date Uploaded: {selectedViewResource.dateUploaded}</p>
          {/* Add logic to display the resource content */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeViewModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* View Modal */}
<Modal show={showViewModal} onHide={closeViewModal}>
  <Modal.Header closeButton>
    <Modal.Title>View Resource</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {/* <h5>Title: {selectedViewResource.title}</h5>
    <p>Type: {selectedViewResource.type}</p>
    <p>Date Uploaded: {selectedViewResource.dateUploaded}</p> */}

    {/* Display the uploaded file content */}
    {selectedViewResource.type === 'document' && (
      <iframe
        title={selectedViewResource.title}
        src={URL.createObjectURL(selectedViewResource.file)}
        width="100%"
        height="500"
      ></iframe>
    )}
    {selectedViewResource.type === 'image' && (
      <img
        src={URL.createObjectURL(selectedViewResource.file)}
        alt={selectedViewResource.title}
        style={{ maxWidth: '100%', maxHeight: '500px' }}
      />
    )}
    {selectedViewResource.type === 'video' && (
      <video
        controls
        width="100%"
        height="auto"
      >
        <source src={URL.createObjectURL(selectedViewResource.file)} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={closeViewModal}>
      Close
    </Button>
  </Modal.Footer>
</Modal>

    </div>
  );
}

export default ResourceManagementAndSharing;
