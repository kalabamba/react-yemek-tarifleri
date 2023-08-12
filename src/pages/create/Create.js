import { useEffect, useRef, useState, useContext }from 'react';
import './Create.css';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [howto, setHowto] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const ingredientsInput = useRef(null);
  const navigate = useNavigate();
	const { color, mode } = useContext(ThemeContext);
  const { data, isLoading, error, postData } = useFetch("http://localhost:3001/tarifler", 'POST');

  const handleAddIngredient = () => {
    const item = ingredient.trim();
    if (item && !ingredients.includes(item)) {
      setIngredients([...ingredients, item]);
      setIngredient('');
      ingredientsInput.current.focus();
      ingredientsInput.current.value = '';
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    postData({title, description,ingredients, howto, image, url});
  }
  useEffect(() => {
    if(data) {
      navigate('/')
    }
  }, [data, navigate])
  return (
    <>
			{ isLoading || error ?
				<>
					{isLoading && <Loading />}
					{error && <Error error={ error } />} 
				</> :
        <div className={`mt-3 text-${mode === "dark" ? "light":"dark"} border-${mode === "dark" ? "light": "dark"}`}>
          <form onSubmit={ handleSubmit }>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Tarif Başlığı</label>
              <input type="text" className="form-control" id="title" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Tarif Açıklaması</label>
              <textarea className="form-control" id="description" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="ingredients" className="form-label">Malzemeler <ul>{ingredients.map(item=> <li key={item}>{item}</li>)}</ul></label>
              <div className="input-group">
                <input type="text" ref={ingredientsInput} name="ingredient" className='form-control' onChange={(e)=> setIngredient(e.target.value)}/>
                <button className={`btn btn-${color}`} type='button' onClick={ handleAddIngredient }>+</button>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="howto" className="form-label">Hazırlanışı</label>
              <textarea className="form-control" id="howto" rows="3" onChange={(e) => setHowto(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Resim</label>
              <input type="text" className="form-control" id="image" onChange={(e) => setImage(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="url" className="form-label">Tarifin Yapıldığı Site</label>
              <input type="text" className="form-control" id="url" onChange={(e) => setUrl(e.target.value)}/>
            </div>
            <button type="submit" className={`btn btn-${color}`}>Kaydet</button>
          </form>
        </div>
			}
		</>
  );
}

export default Create