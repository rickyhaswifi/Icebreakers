import React, { Component } from 'react';
import {Form, Button} from 'semantic-ui-react';
import {SubjectConsumer} from '../../providers/SubjectProvider';

class SubjectForm extends Component {
state = { name: '', image: '' }

componentDidMount() {
    if (this.props.id) {
        this.setState({ name: this.props.name, image: this.props.image,})
    }
}

handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

handleSubmit = (e) => {
  const { history } = this.props
    e.preventDefault();
    if (this.props.id) {
        this.props.updateSubject(this.props.id, this.state)
        this.props.toggleEdit()
    } else {
      this.props.addSubject(this.state)
      history.push("/")
    }
    this.setState( {name: '', image: ''})
}

render() {
    const { name, image } = this.state
    return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Input
            onChange={this.handleChange}
            required
            placeholder='Add Subject'
            name='name'
            value={name}
            />

            <Form.Input 
            onChange={this.handleChange} 
            name='image' 
            placeholder='image link' 
            value={image} 
            required 
            />

            <Form.Button type="submit">Submit</Form.Button>
        </Form>
        )
    }
}

const ConnectedSubjectForm = (props) => {
    return (
      <SubjectConsumer>
        { value => (
          <SubjectForm
            { ...props }
            { ...value }
            addSubject={value.addSubject}
          />
        )}
      </SubjectConsumer>
    )
  }

export default ConnectedSubjectForm;
