
import Form from './Form';

const Registration = () => {
  return (
    <div className="bg-white flex flex-col lg:flex-row justify-center items-center min-h-screen p-4">
      {/* Image Section */}
      <div className="mb-4 lg:mb-0 lg:mr-6 hidden justify-center sm:flex">
        <img
          src="/public/img/Frame 1618868157.jpg"
          alt="Registration Illustration"
          className="w-[100%] max-w-[350px] lg:max-w-[350px] lg:w-auto lg:h-auto"
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md">
        <Form />
      </div>
    </div>
  );
};

export default Registration;
