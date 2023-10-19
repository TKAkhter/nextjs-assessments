import Login from '../../components/login';

export const LoginPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          NextJs Assessment
        </a>
        <Login />
      </div>
    </section >
  );
}

export default LoginPage;