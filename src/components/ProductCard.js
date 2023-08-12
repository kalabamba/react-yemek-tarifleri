import './ProductCard.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';


function ProductCard({ tarif }) {
	const { color, mode } = useContext(ThemeContext);
	return (
		<div className="col-3 mb-3">
			<div className={`card border-${mode === "dark" ? "light": "dark"}`}>
				<img src={`${tarif.image}`} alt={tarif.title} />
				<div className="card-body">
					<h5 className="card-title">{tarif.title}</h5>
					<p className="card-text">{tarif.description}</p>
					<Link to={`/tarifler/${tarif.id}`} className={`btn btn-outline-${color}`}>Tarifi İncele</Link>
				</div>
			</div>
		</div>)
}

export default ProductCard