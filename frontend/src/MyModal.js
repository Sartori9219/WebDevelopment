import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Button, Modal, Form, Image  } from 'react-bootstrap';
import { addAnimal } from './actions/animal';

function MyModal(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});
  const [imageSrc, setImageSrc] = useState(null);
  const [file, setFile] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const allData = new FormData();
    allData.append('file', file);
    allData.append('kind', formData.kind);
    allData.append('description', formData.description);
    if(file&&formData.kind&&formData.description){
      dispatch(addAnimal(allData));
      setFormData({});
      setFile(null);
      setImageSrc(null);
    }
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    if(event.target.name==='image'){
      const file = event.target.files[0];
      setImageSrc(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New Animal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Animal Information</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicKind">
              <Form.Label>Kind</Form.Label>
              <Form.Control type="text" name="kind" placeholder="Enter kind" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" placeholder="Enter Description" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formFile">
              <Form.Label>Upload Image</Form.Label>
              {imageSrc && (
                <Image src={imageSrc} alt="Preview" thumbnail />
              )}
              <Form.Control type="file" name='image' onChange={handleFileChange} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
            Create new Animal.
        </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
