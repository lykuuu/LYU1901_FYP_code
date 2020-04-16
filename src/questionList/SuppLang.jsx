import React from 'react';
import Form from 'react-bootstrap/Form'
import '../App.css';

class SuppLang extends React.Component {
    render() {
        return (
            <div className="mb-3">
                <Form.Check id="English" inline label="English" name="suppLang" type={'checkbox'} onChange={this.props.handleMChange} />
                <Form.Check id="Cantonese" inline label="Cantonese" name="suppLang" type={'checkbox'} onChange={this.props.handleMChange} />
                <Form.Check id="Putonghua" inline label="Putonghua" name="suppLang" type={'checkbox'} onChange={this.props.handleMChange} />
                <Form.Check id="Others" inline label="Others" name="suppLang" type={'checkbox'} onChange={this.props.handleMChange} />
                <Form.Check id="N/A" inline label="N/A" name="suppLang" type={'checkbox'} onChange={this.props.handleMChange} />
            </div>
        )

    }
}
export default SuppLang;