import { useParams } from 'react-router-dom';

const User = () => {  
  const { id } = useParams(); // id = "789"
  return <div>用户ID: {id}</div>;
}

export default  User;