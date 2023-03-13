import { useState } from "react";
import InputGenerator from "./components/generator";
import Header from "./components/Header";
import Home from "./pages/home";

function App() {
  const [openpop, setPop] = useState(false)


  const handleStart = () => {
    setPop(!openpop)
  }


  return (
    <div className="min-h-screen relative w-full bg-gray-900">
      <Header />
      
      <div className=" w-80% min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl font-mono font-bold italic mb-4">
          MOCK DATA
        </h1>
        <h3 className="text-neutral-300 text-center text-lg w-3/5 mb-4" >Sincerely hope this application will be of meaningful use to you and help you scale in your development and growth process! Gladly, Yemi.</h3>
        <Home start={handleStart} />
        {openpop && <InputGenerator close={handleStart} />}
      </div>
      <footer className="bg-gray-600 italic text-center text-white py-3">
        &copy; of Ibrahim Yemi 2023 <small className="underline text-slate-200"> v-1.0</small>
      </footer>
    </div>
  );
}

export default App;
