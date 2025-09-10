import { useLocation } from 'react-router-dom';

const Details = () => {   
    alert('dd33');
  const location = useLocation();
  const { from, data } = location.state || {};
  return <div>来自：{from}, 数据ID：{data?.id}</div>;
}
export default  Details;