export default function Login() {
  return (
    <div className="login text-center bg-stone-900 h-lvh bg-cover bg-blend-overlay">
      <div className="grid place-items-center h-full">
        <div className="flex items-center mx-auto">
          <img src="./TuneStellar.png" className="w-80" alt="" />
          <h2 className="title-main text-8xl p-3 text-center">Tune Stellar</h2>
        </div>
        <div
          className="rounded-full text-xl relative bottom-36 p-5 bg-gradient-to-b from-green-500 to-emerald-900 cursor-pointer"
          onClick={() => {
            window.location.href = "https://tunestellar-api.onrender.com/login";
          }}
        >
          Please login with your Spotify account
        </div>
      </div>
    </div>
  );
}
