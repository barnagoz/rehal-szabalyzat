import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className="w-screen lg:min-h-screen min-h-full flex justify-center p-2 font-poppins">
    <div className="w-full lg:w-5/12 border-8 border-black rounded-lg min-h-full p-2 shadow-3xl">
      <Component {...pageProps} />
    </div>
  </div>
  );
}

export default MyApp
