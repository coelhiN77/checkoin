// style
import "./style.css"

// ::
const Loading = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center space-x-3 bg-zinc-800">
      <div className="w-10 h-10 rounded-full bg-red-500 animate-bounce-ball1"></div>
      <div className="w-10 h-10 rounded-full bg-red-500 animate-bounce-ball2"></div>
      <div className="w-10 h-10 rounded-full bg-red-500 animate-bounce-ball3"></div>
    </div>
  );
};

export default Loading;