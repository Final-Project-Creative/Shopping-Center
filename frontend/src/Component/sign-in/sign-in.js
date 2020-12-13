import React from 'react';
import Form from '../form/form.js';
import Button from '../buttom/buttom.js';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
    componentDidMount() {
      // POST request using fetch with set headers
      const requestOptions = {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json',
              'Authorization': 'Bearer my-token',
              'My-Custom-Header': 'foobar'
          },
          // body: JSON.stringify({ title: 'React POST Request Example' })
          body: JSON.stringify(this.setState({ password:"",email:"" }))
      };
      fetch('http://127.0.0.1:8000/api/login/', requestOptions, { mode: 'no-cors' })
          .then(response => response.json())
          .then(data => {
            console.log('allpostdata',data)
           
            this.setState({ password:"",email:"" })
            // console.log(data)
            localStorage.setItem('auth',data.token)
        });
}

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    //console.log("a",value )

    this.setState({ [name]: value });

  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Form
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <Form
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
          <Button onClick={this.postdata} type='submit'> Sign in </Button>
          {/* <button onClick={this.postdata}>SignIn</button> */}
          <Button onClick={signInWithGoogle} isGoogleSignIn>
              {''}
               WITH Google{''}
               </Button>
               </div>
        </form>
      </div>
    );
  }
}

export default SignIn;


