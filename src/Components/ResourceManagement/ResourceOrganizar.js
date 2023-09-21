import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ResourceOrganizer() {
  const [categories, setCategories] = useState([]);
  const [resources, setResources] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [newResource, setNewResource] = useState('');

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim() !== '') {
      setCategories([...categories, { name: newCategory, id: Date.now() }]);
      setNewCategory('');
    }
  };

  const handleResourceSubmit = (e) => {
    e.preventDefault();
    if (newResource.trim() !== '') {
      setResources([...resources, { name: newResource, id: Date.now() }]);
      setNewResource('');
    }
  };

  const handleResourceDrag = (e, resource) => {
    e.preventDefault();
    const updatedResources = resources.filter((r) => r.id !== resource.id);
    setResources(updatedResources);
  };

  const handleCategoryDrop = (e, category) => {
    e.preventDefault();
    const resourceId = e.dataTransfer.getData('resourceId');
    const resource = resources.find((r) => r.id.toString() === resourceId);
    if (resource) {
      const updatedResource = { ...resource, categoryId: category.id };
      setResources([...resources, updatedResource]);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Categories</h2>
          <Form onSubmit={handleCategorySubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="New Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Add Category</Button>
          </Form>
          <ul
            className="list-group"
            onDrop={(e) => handleCategoryDrop(e, { id: 'uncategorized' })}
            onDragOver={(e) => e.preventDefault()}
          >
            {categories.map((category) => (
              <li
                key={category.id}
                className="list-group-item"
                onDrop={(e) => handleCategoryDrop(e, category)}
                onDragOver={(e) => e.preventDefault()}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </Col>
        <Col>
          <h2>Resources</h2>
          <Form onSubmit={handleResourceSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="New Resource"
                value={newResource}
                onChange={(e) => setNewResource(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Add Resource</Button>
          </Form>
          <ul className="list-group">
            {resources.map((resource) => (
              <li
                key={resource.id}
                className="list-group-item"
                draggable
                onDragStart={(e) => e.dataTransfer.setData('resourceId', resource.id)}
                onDrag={(e) => handleResourceDrag(e, resource)}
              >
                {resource.name}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ResourceOrganizer;
