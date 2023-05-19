import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Clipboard2X } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { getAnimals, delAnimal } from './actions/animal';
import MyModal from './MyModal';
import im from './assets/images/dog.png'
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);
  const animals = useSelector(state => state);

  const delSelAnimal = id => {
    dispatch(delAnimal(id));
  }
  return (
    <>
      <br/>
      <div className="container mt-3">
        <h1 className='text-center'>Animal List</h1>
        <MyModal />
        <br/>
        <br/>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th><b>No</b></th>
              <th><b>Kind</b></th>
              <th><b>Description</b></th>
              <th><b>Delete</b></th>
            </tr>
          </thead>
          <tbody>
            {
              animals.map((animal, index) => (
                <tr key={animal._id}>
                  <td>{index+1}</td>
                  <td>{animal.kind}</td>
                  <td>{animal.description}</td>
                  <td>
                    <button
                    className='btn btn-danger' 
                    onClick={() => delSelAnimal(animal._id)} 
                    > 
                      <Clipboard2X /> Delete 
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <br />
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <div className="card" style={{ textAlign:'center', width:'100%' }}>
              <img src={im} alt='dog' />
              <h4 className="card-title">Dog</h4>
              <p className="card-text">Dog is human's friend.</p>
            </div>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default App;