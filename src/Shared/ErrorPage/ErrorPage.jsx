import { Link } from "react-router-dom";
import { useHayc } from "../../hayc/config-context";

const ErrorPage = () => {
  const { t, config, cp } = useHayc();
  const e = config.errorPageConfig;

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 {...cp('errorPageConfig.errorCode')} className="text-8xl sm:text-9xl font-extrabold text-white tracking-widest">
        {t(e.errorCode)}
      </h1>
      <div {...cp('errorPageConfig.errorTitle')} className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        {t(e.errorTitle)}
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/" {...cp('errorPageConfig.goHomeButton')}>{t(e.goHomeButton)}</Link>
          </span>
        </a>
      </button>
    </main>
  );
};

export default ErrorPage;
