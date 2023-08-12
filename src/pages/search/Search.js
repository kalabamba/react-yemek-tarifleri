import { useContext } from 'react';
import './Search.css';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import ProductCard from '../../components/ProductCard';
import { ThemeContext } from '../../contexts/ThemeContext';


function Search() {
  	const [searchParams] = useSearchParams();
  	const keyword = searchParams.get("q");
  	const {data, isLoading, error} = useFetch(`http://localhost:3001/tarifler?q=${keyword}`);
	const { mode } = useContext(ThemeContext);
  	return (
    	<>
			{ isLoading || error ?
				<>
					{isLoading && <Loading />}
					{error && <div className='mt-5'><Error error={ error } /></div>} 
				</> :
				<div className="row mt-5">
          {data && data.length !== 0 && <h4 className={`text-center mb-5 text-${mode === "dark" ? "light": "dark"}`}>"{keyword}" için arama sonuçları</h4>}
					{data && data.map((tarif, index) => (
						<ProductCard tarif={tarif} key={index} />
					))}
          {data && data.length === 0 && <Error error="Aradığınız kelimeye uygun tarif bulunamadı." type={"warning"} />}
				</div>
			}
		</>
  	)
}

export default Search