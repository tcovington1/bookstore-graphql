import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import UserAvatar from './UserAvatar';
import Books from './Books';

const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      books {
        id
        title
        genre
      }
    }
  }
`;

function User({ user, selectUser }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: user.id }
  });

  if (loading) return 'Loading...';
  if (error) return `Error ${error.message}`;
 
  return(
    <>
      <div className="flex flex-wrap my-4">
        <button onClick={selectUser.bind(this, null)} className='bg-gray-200 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded'>
          Back
        </button>
      </div>
      <div className="flex flex-wrap items-start mb-4">
        <div className='lg:w-1/4 w-full rounded text-center'>
          <UserAvatar user={user} />
        </div>
        <div className="pox-4 flex-1 w-full">
          <Books books={data.user.books} user={user} />
        </div>
      </div>
    </>
  )
}

export default User;