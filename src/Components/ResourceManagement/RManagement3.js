import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Table,
  Button,
  Modal,
  Form,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import { Delete, Edit, ViewAgenda } from '@material-ui/icons';
import { Share } from 'react-bootstrap-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResourceTable({ resources, handleEdit, handleDelete, handleShare, handleView }) {
  return (
    <div className="table-responsive">
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
              <Button variant="primary" onClick={() => handleEdit(resource)}>
                <Edit />
              </Button>
              &nbsp;
              <Button variant="danger" onClick={() => handleDelete(resource.id)}>
                <Delete />
              </Button>
              &nbsp;
              <Button variant="info" onClick={() => handleShare(resource.id)}>
                <Share />
              </Button>
              &nbsp;
              <Button variant="success" onClick={() => handleView(resource)}>
                <ViewAgenda />
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
  
  );
}

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
      setResources([
        ...resources,
        {
          id: Date.now(),
          type: resourceType,
          link: resourceLink,
          title: resourceTitle,
          dateUploaded: getCurrentDate(),
        },
      ]);
    } else if (resourceFile) {
      setResources([
        ...resources,
        {
          id: Date.now(),
          type: resourceType,
          file: resourceFile,
          title: resourceTitle,
          dateUploaded: getCurrentDate(),
        },
      ]);
    }
    // Reset form fields
    setResourceType('document');
    setResourceFile(null);
    setResourceLink('');
    setResourceTitle('');
  };

  // Filtering and searching state
  const [filter, setFilter] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Handle filtering by title
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Handle filtering by resource type
  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  // Filter and search resources
  const filteredResources = resources.filter((resource) => {
    const titleMatch = resource.title.toLowerCase().includes(filter.toLowerCase());
    const typeMatch = filterType === 'all' || resource.type === filterType;
    return titleMatch && typeMatch;
  });

  // Handle Edit, Delete, Share, and View functions
  const handleEdit = (resource) => {
    // Implement edit functionality here
  };

  const handleDelete = (resourceId) => {
    // Implement delete functionality here
  };

  const handleShare = (resourceId) => {
    // Implement share functionality here
  };

  const handleView = (resource) => {
    // Implement view functionality here
  };

  return (
    <div className="container-fluid mt-5">
   
      {/* Resource Upload */}
      <div className="card mt-4">
        <div className="card-header">
          <h4>Study material upload</h4>
        </div>
        <div className="card-body">
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

          <Button className="btn btn-primary" onClick={handleUpload}>Upload</Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="card mt-4">
        <div className="card-header">
          <h4>Study material</h4>
        </div>
        <div className="card-body">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search by title"
              aria-label="Search by title"
              aria-describedby="basic-addon2"
              value={filter}
              onChange={handleFilterChange}
            />
            <Form.Select
              aria-label="Select resource type"
              value={filterType}
              onChange={handleFilterTypeChange}
            >
              <option value="all">All Types</option>
              <option value="document">Document</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
              <option value="link">Link</option>
            </Form.Select>
          </InputGroup>

          <ResourceTable
        resources={filteredResources}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleShare={handleShare}
        handleView={handleView}
      />
        </div>
      </div>

      {/* Resource Management Table */}
   

      {/* Edit Modal */}
      <Modal>
        {/* Implement edit modal content */}
      </Modal>

      {/* Share Modal */}
      <Modal>
        {/* Implement share modal content */}
      </Modal>

      {/* View Modal */}
      <Modal>
        {/* Implement view modal content */}
      </Modal>

      {/* Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default ResourceManagementAndSharing;
