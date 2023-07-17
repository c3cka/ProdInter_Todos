import Container from 'components/Container/Container';
import { useNavigate } from 'react-router-dom';
import { clearAuthentication } from 'utils/auth';
import './Appbar.css';

export default function Appbar() {
  const navigate = useNavigate();

  return (
    <header className="appbar-root">
      <Container className="appbar-container">
        <h1 className="appbar-title">
          To do or not to do
        </h1>

        <button
          type="button"
          className="appbar-logout"
          onClick={() => {
            clearAuthentication();
            navigate('login');
          }}
        >
          Logout
        </button>
      </Container>
    </header>
  )
}
