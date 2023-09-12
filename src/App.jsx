import Navbar from "./Components/Navbar";
import Main from "./Components/Blog/Main";

function App() {
  return (
    <>
      <div className="px-8 md:px-16 lg:px-36">
        <Navbar></Navbar>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
