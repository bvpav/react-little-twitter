import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <main
      className="text-center"
      style={{
        width: '100%',
        maxWidth: '330px',
        padding: '15px',
        margin: 'auto',
      }}
    >
      <LoginForm />
    </main>
  );
};

export default Login;
