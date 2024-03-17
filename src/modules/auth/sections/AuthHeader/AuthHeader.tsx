import { useNavigate } from 'react-router-dom';
import './AuthHeader.scss'

export const AuthHeader = () => {

  const navigate = useNavigate();

  return (
    <header className='auth-header'>
        <div className='auth-header__logo' onClick={()=>navigate('/')}>
            <p>Logo</p>
        </div>
    </header>
  )
}
