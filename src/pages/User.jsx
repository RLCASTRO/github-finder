import { useEffect, useContext } from 'react';
import { GithubContext } from '../context/github/GithubContext';

const User = ({ match }) => {
  const { getUser, user} = useContext(GithubContext);

  useEffect(() => {
    getUser(match.params.login);
  
  }, [])
  

  return <div> {user.login} </div>;
};

export default User;
