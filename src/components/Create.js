import React, { useState } from "react";
import { Form, Button, Checkbox } from 'semantic-ui-react'
import axios from 'axios'
import { API_URL } from '../constants/url.js'
import { useNavigate } from "react-router-dom";

function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const postData = async () => {
        await axios.post(API_URL, {
            firstName, lastName, checked
        })
        // .then(()=>{
        //     setFirstName('');
        //     setLastName('');
        //     setChecked(false) 
        // })
        navigate('/read');

    }

    return (
        <>
            <Form className="form" >
                <Form.Field>
                    <label>First Name </label>
                    <input value={firstName}
                        onChange={event => setFirstName(event.target.value)} placeholder="FirstName" />
                </Form.Field><br />
                <Form.Field>
                    <label>Last Name </label>
                    <input value={lastName}
                        onChange={event => setLastName(event.target.value)} placeholder="LastName" />
                </Form.Field><br />
                <Form.Field>
                    <Checkbox checked={checked}
                        onChange={() => setChecked(!checked)} label="Agree Terms and Conditions ?" />
                </Form.Field>
                <Button onClick={postData} >Submit</Button>
            </Form>
        </>
    )
}

export default Create