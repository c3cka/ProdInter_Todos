import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate, isAuthenticated } from 'utils/auth';

export default function IndexPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      authenticate();
    }

    navigate(isAuthenticated() ? '/todos' : '/login');
  })

  return <></>;
}
