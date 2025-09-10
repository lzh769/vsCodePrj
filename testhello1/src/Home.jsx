import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LinkTest = () => { 
// npm install react-router-dom
// npm install @reduxjs/toolkit react-redux
      const navigate = useNavigate();
  return (
    <div>
      <Link to="/user/123">跳转到用户123</Link>
      <Link to="/search?name=john&age=44">搜索John</Link>
      <Link to="/search?name=Janice&age=25">搜索Janice</Link>
      <Link to="/details" state={{ from: 'home', data: { id: 1 } }}>详情</Link>
      <button onClick={() =>  navigate('/search?name=Janice&age=55')}>
         搜索Janice啦
      </button>
      <button onClick={() => navigate('/user/456')}>
         跳转到用户456
      </button>
    </div>
  );
}
 export default  LinkTest;