import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react';

export default function Search() {
    return (
        <>

            <InputGroup className="mb-3">
                <DropdownButton
                    variant="outline-secondary"
                    title="State"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" />
                <Button>Search</Button>
            </InputGroup>
        </>
    )
}