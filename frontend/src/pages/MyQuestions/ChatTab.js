import React from 'react';
import { Link } from 'react-router-dom';

const ChatTab = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/my-questions/ongoing">
              On Going
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/my-questions/history">
              History
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ChatTab;

// componentWillMount() {
// 	const id = this.props.match.params.location;
// 	console.log('idididididi');
// 	console.log(id);
// }
