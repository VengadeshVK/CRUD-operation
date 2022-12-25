import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import { API_URL } from '../constants/url'
import { useNavigate } from "react-router-dom";

const Read = () => {

    const [apiData, setApiData] = useState([]);
    const navigate = useNavigate();

    const updateUser = ({ id, firstName, lastName, checked }) => {
        localStorage.setItem('id', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('checked', checked)
        navigate('/update');
    }

    const deleteUser = async (id) => {
        await axios.delete(API_URL + id);
        console.log(id)
        callGetApi();
    }

    const callGetApi = async () => {
        await axios.get(API_URL).then((response) => {
            setApiData(response.data);

        });

    }

    useEffect(() => {
        callGetApi();
    }, []);

    return (
        <Table singleLine >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>FirstName</Table.HeaderCell>
                    <Table.HeaderCell>LasttName</Table.HeaderCell>
                    <Table.HeaderCell>Checked</Table.HeaderCell>
                    <Table.HeaderCell>Delete User</Table.HeaderCell>
                    <Table.HeaderCell>Update User</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    apiData.map(index => (
                        <Table.Row key={index.id} >
                            <Table.Cell>{index.firstName}</Table.Cell>
                            <Table.Cell>{index.lastName}</Table.Cell>
                            <Table.Cell>{index.checked ? 'Checked' : 'Unchecked'}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => deleteUser(index.id)} >Delete</Button>
                            </Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => updateUser(index)} >Update</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}

export default Read