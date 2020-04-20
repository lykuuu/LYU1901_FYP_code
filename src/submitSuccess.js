import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class SubmitSuccess extends React.Component {
    render() {
        return (
            <Card className="text-center" style={{marginTop: 25+'vh'}}>
                <Card.Header> </Card.Header>
                <Card.Body>
                    <Card.Title>Submit Successful</Card.Title>
                    <Card.Text>
                        Thank you for your participation.
                    </Card.Text>
                    <Button variant="primary" href="/">Back to Home</Button>
                </Card.Body>
                <Card.Footer className="text-muted"> </Card.Footer>
            </Card>
        );
    }
}

export default SubmitSuccess