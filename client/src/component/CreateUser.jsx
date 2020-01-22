import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $favoriteGenre: String! ) {
    createUser(input: { name: $name, email: $email, favoriteGenre: $favoriteGenre }){
      user {
        id
        name
        email
        favoriteGenre
        booksCount
      }
      errors
    }
  }
`;


class CreateUser extends Component {
  state = {
    name: '',
    email: '',
    favoriteGenre: '',
  }

  onSubmit = (e, createUser) => {
    e.preventDefault();
    createUser({ variables: this.state });
    this.setState({  name: '', email: '', favoriteGenre: ''})

  }

  render() {
    return(
      <Mutation
        mutation={CREATE_USER}
        update={this.props.onCreateUser} >
          {createUserMutation => (
            <div className="lg:fixed bottom-o left-o w-full bg-white border-t border-gray-300">
              <form onSubmit={e => this.onSubmit(e, createUserMutation)} className="lg:px-8 pt-2 pb-2">
                <div className="lg:flex flex-wrap flex-between items-center justify-center lg:p-0 p-6">
                  <h4 className='font-bold lg:pr-4 md-2'>Create new user</h4>
                  <div className='lg:pr-4 mb-2'>
                    <input
                      className='border rounded w-full py-2 px-3'
                      type='text'
                      value={this.state.name}
                      placeholder='Name'
                      onChange={e => this.setState({ name: e.target.value })}
                      />
                  </div>
                  <div className='lg:pr-4 mb-2'>    
                    <input
                      className='border rounded w-full py-2 px-3'
                      type='email'
                      value={this.state.email}
                      placeholder='Email'
                      onChange={e => this.setState({ email: e.target.value })}
                      />
                  </div>
                  <div className='lg:pr-4 mb-2'>    
                    <input
                      className='border rounded w-full py-2 px-3'
                      type='text'
                      value={this.state.favoriteGenre}
                      placeholder='Favorite Genre'
                      onChange={e => this.setState({ favoriteGenre: e.target.value })}
                      />
                  </div>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded' type='submit'>
                    Create User
                  </button>
                </div>
              </form>
            </div>
          )}
          </Mutation>
    )
  }
}

export default CreateUser;