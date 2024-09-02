import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

function Header() {
  return (
    <header className="todo-header">
      <svg className="todo-icon" width="24" height="24" viewBox="0 0 24 24" >
        <FontAwesomeIcon icon={faSquareCheck} className="todo-icon" />  
        <path d="" /> 
      </svg>
      
      <h1>TODO</h1>
    </header>
  );
}

export default Header;