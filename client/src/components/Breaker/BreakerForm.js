import React, { Component } from 'react';
import {Form, Checkbox} from 'semantic-ui-react';
import {BreakerConsumer} from '../../providers/BreakersProvider';

class BreakerForm extends Component {
state = { name: '', image: '', description: '', rating: false }

componentDidMount() {
  if (this.props.id) {
      this.setState({ 
        name: this.props.name, image: this.props.image,
      description: this.props.description, rating: this.props.rating,})
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
      this.props.updateBreaker(this.props.id, this.state)
      this.props.toggleEdit()
  } else {
    this.props.addBreaker(this.state)
    history.push("/")
  }
  this.setState( {name: '', image: '', description: '', rating: false})
}

render() {
  const { name, image, description, rating } = this.state
  return (
  <Form onSubmit={this.handleSubmit}>
      <Form.Input
      onChange={this.handleChange}
      required
      placeholder='Add Breaker'
      name='name'
      value={name}
      />

      <Form.Input
      onChange={this.handleChange}
      required
      placeholder='Add Description'
      name='description'
      value={description}
      />

      <Form.Input 
      onChange={this.handleChange} 
      name='image' 
      placeholder='image link' 
      value={image} required 
      />

    <Form.Field
    onChange={this.handleChange} 
    name='rating' 
    placeholder='image link' 
    value={rating} required 
    >
      <Checkbox slider label='Favorite' />
    </Form.Field>

    <Form.Button type="submit">Submit</Form.Button>
  </Form>
    )
  }
}

const ConnectedBreakerForm = (props) => {
    return (
      <BreakerConsumer>
        { value => (
          <BreakerForm
            { ...props }
            { ...value }
            addBreaker={value.addBreaker}
          />
        )}
      </BreakerConsumer>
    )
  }

export default ConnectedBreakerForm;
