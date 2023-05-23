// api
import { getData } from "../../api/request";

// components
import { Navbar, Table, Loading, Input, Refresh, Error } from "../../components";

// u,s
import { useEffect, useState } from 'react';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./scrollbar.css";

// ::
const Home = () => {
  const [coins, setCoins] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getData();
      setCoins(data);
      setIsDataLoaded(true);
    } catch (error) {
      console.error(error);
      setHasError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handlePopstate = () => {
      window.history.go(1);
    };
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleClick = async () => {
    await fetchData();
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      toast.success('Successfully Updated', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'bg-zinc-700 text-white',
        theme: "dark"
      });
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 180000);
    }
  };

  if (isLoading) {
    return <Loading />;
  };

  if (hasError) {
    return <Error />;
  };

  return (
    <div className="styles.scrollbar">
      <div className={`min-h-screen flex ${isDarkMode ? "bg-zinc-800" : "bg-white"} transition-colors`}>
        <div className="flex flex-col w-full">
          <div>
            <Navbar darkMode={isDarkMode} onDarkModeToggle={handleThemeToggle} />
          </div>
          <div className="flex items-center justify-center mt-5 mb-7">
            <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
            <Refresh onClick={handleClick} disabled={isButtonDisabled} className={`text-3xl py-4 px-4 rounded-md ${isButtonDisabled ? 'text-gray-500 cursor-not-allowed' : 'text-red-500 cursor-pointer'}`} />
          </div>
          {isDataLoaded && (
            <div className="flex items-center justify-center text-white">
              <Table coins={coins} search={search} darkMode={isDarkMode} />
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Home;