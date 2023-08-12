import {useContext} from 'react';
import Navbar from '../components/Navbar';
import ThemeSelector from '../components/ThemeSelector';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import './MasterLayout.css';

function MasterLayout() {
	const { mode } = useContext(ThemeContext);

  	return (
		<div className={`main bg-${mode}`}> 
			<Navbar />
			<ThemeSelector />
			<div className="container">
				<Outlet />
			</div>
		</div>
  	)
}

export default MasterLayout