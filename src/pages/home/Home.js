import './Home.css'
import ProductCard from '../../components/ProductCard'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Home() {
	const { data, isLoading, error } = useFetch('http://localhost:3001/tarifler');
	return (
		<>
			{ isLoading || error ?
				<>
					{isLoading && <Loading />}
					{error && <div className='mt-3'><Error error={ error } /></div>} 
				</> :
				<div className="row mt-3">
					{data && data.map((tarif, index) => (
						<ProductCard tarif={tarif} key={index} />
					))}				
				</div>
			}
		</>
  	)}

export default Home