import './App.css';
import {useState, useRef, useCallback} from 'react';
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
  LoginSocialLinkedin,
  IResolveParams,
  TypeCrossFunction
} from 'reactjs-social-login'

function App() {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState<any>({});
  const googleRef = useRef();
  const facebookRef = useRef();
  const linkedinRef = useRef();

  const onLoginStart = useCallback(() => {
    alert('login start')
  }, [])

  const onLogoutFailure = useCallback(() => {
    alert('logout fail')
  }, [])

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, [])
  const onLogout = useCallback(() => {
    switch (provider) {
      case 'facebook':
        facebookRef.current?.onLogout()
        break
      case 'google':
        googleRef.current?.onLogout()
        break
      case 'linkedin':
        linkedinRef.current?.onLogout()
        break
      default:
        break
    }
  }, [provider])
  return (
    <div className="App">
      <LoginSocialFacebook
          ref={facebookRef}
          appId={process.env.REACT_APP_FB_APP_ID || ''}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }: IResolveParams) => {
            setProvider(provider)
            setProfile(data)
          }}
          onReject={(err) => {
            console.log(err)
          }}
        >
          <button>Facebook</button>
        </LoginSocialFacebook>
    </div>
  );
}

export default App;
