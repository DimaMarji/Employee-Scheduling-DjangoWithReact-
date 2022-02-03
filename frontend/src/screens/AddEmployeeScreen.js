import React from 'react'

function AddEmployeeScreen() {
    return (
        <FormContainer>
        <h1>Create Employee</h1>
        <Form onSubmit={submitHandler}>

            <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    required
                    type='name'
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    required
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='phone'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    required
                    type='phone'
                    placeholder='Enter Phone Number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
                Register
            </Button>

        </Form>
    </FormContainer >
    )
}

export default AddEmployeeScreen
