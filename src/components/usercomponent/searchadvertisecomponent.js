import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import SearchAction from '../../actions/user_actions/searchaction'


const SearchAdvertise = (props) => {

    var pathVar = null;
    let advertise = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>SearchActionFunction(), [])
    const SearchActionFunction = () => {
            dispatcher(SearchAction(pathVar));
    }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("pathVariable").value;
        dispatcher(SearchAction(pathVar));
        renderData(advertise);
    }

    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Jumbotron style={{width: 700}}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Search by valid name/id</Form.Label>
                        <Form.Control id="pathVariable" type="text" placeholder="Name or Advertise ID" onBlur={validateName} />
                        <small id="namevalid" class="form-text text-danger invalid-feedback">
        Advertise name should only contain only characters
       </small>
                    </Form.Group>
                    <Button variant="success" type="button" call onClick={handleSubmit}>
                        Search
                    </Button>
                    <hr></hr>
                        {renderData(advertise)}
                </Form>
            </Jumbotron>
        </div>
    );

    //ALERT
    function AlertAdvertiseNotFound() {
        const [show, setShow] = useState(true);
        console.log(show, setShow);
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Advertise Not Found</Alert.Heading>
              <p>
                Advertise with the mentioned name or id was not found. Maybe you entered wrong name/id. Please check once!
              </p>
            </Alert>
          );
        }
        else{
            return (
                <div></div>
            );
        }
        
        
    }

    function validateName(event){

        const data = event.target.value;
        console.log("target",data);
       
        let regex = /[a-zA-Z]$/;
        let inputdata = data;
        let str = inputdata.trim();
        console.log(regex, str);
        if (regex.test(str) && str != "") {
      
          event.target.classList.remove('custom-invalid');
          event.target.classList.add('custom-valid');
      
        } else {
      
          event.target.classList.remove('custom-valid');
          event.target.classList.add('custom-invalid');
        }
    };

    function renderData(advertise) {   
        console.log("advertise dispatcher object returned from the server : ", advertise);
        if(advertise!==undefined && advertise!==null){
            return(
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>{advertise.data.advertiseid}</td>
                            <td>{advertise.data.title}</td> */}
                            <td>{advertise.advertiseid}</td>
                            <td>{advertise.title}</td>
                        </tr>
                    </tbody>
                </Table>
            );
        }
        if(advertise!==undefined && advertise===null){
            console.log("called the alert");
            return(<AlertAdvertiseNotFound show="true"/>);
        }
    }        
}


export default SearchAdvertise;