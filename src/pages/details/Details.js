import './Details.css'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

function Details() {
  const { id } = useParams();
  const { data, isLoading, error} = useFetch(`http://localhost:3001/tarifler/${id}`);
	const { color, mode } = useContext(ThemeContext);
  return (
    <>
			{ isLoading || error ?
				<>
					{isLoading && <Loading />}
					{error && <div className='mt-5'><Error error={ error } /></div> } 
				</> :
        <div className={`text-${mode === "dark" ? "light": "dark"} border-${mode === "dark" ? "light": "dark" }`}>
          <div className="row mt-3">
          {data && (
            <>
              <div className="col-4">
                <img src={`${data.image}`} alt={data.title} className='img-fluid rounded'/>         
              </div>
              <div className="col-8">
                <h5>{data.title}</h5>
                <p>{data.description}</p>
                <ul>
                  {data.ingredients.map((malzeme, index) => (
                    <li key={index}>{malzeme}</li>
                    ))}
                </ul>
              </div>
              <div className="col-12 mt-3">
                <p>{ data.howto }</p>
                <a href={ data.url } className={`btn btn-${color}`}>Tarifi İncele</a>
              </div>
            </>
          )}
        </div>
      </div>
			}
		</>
  )
}

export default Details