import Link from 'next/link';

const freeTrial = () => {
  return (
    <section className="bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">
            Start your free trial today
          </h2>
          <p className="mb-6 font-light text-gray-400 md:text-lg">
            Try Landwind Platform for 30 days. No credit card required.
          </p>
          <Link
            href="#"
            className="text-white s  focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-purple-600 hover:bg-purple-700  "
          >
            Free trial for 30 days
          </Link>
        </div>
      </div>
    </section>
  );
};

export default freeTrial;
