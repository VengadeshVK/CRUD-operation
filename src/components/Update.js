import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Checkbox, Button, Table } from "semantic-ui-react";
import { API_URL } from '../constants/url'
import { Navigate, useNavigate } from "react-router-dom";

const Update = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checked, setChecked] = useState(false)
    const [id, setId] = useState('')
    const Navigate = useNavigate();

    const updateUser = async () => {
        await axios.put(API_URL + id, {
            firstName,
            lastName,
            checked,
        });
        Navigate('/read')
    }

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setChecked(localStorage.getItem('checked'))
    }, [])

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
                <Button onClick={updateUser} >Submit</Button>
            </Form>
        </>
    )
}

export default Update