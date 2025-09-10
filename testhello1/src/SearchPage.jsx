import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {  
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name'); // "john"
  const age = searchParams.get('age');   // "25"
  return <div>搜索条件：{name}, {age}</div>;
}
export default  SearchPage;