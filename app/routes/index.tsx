import { Link, LinksFunction } from 'remix';
import stylesUrl from '../styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>Kino</h1>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/browse">Browse Movies</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
