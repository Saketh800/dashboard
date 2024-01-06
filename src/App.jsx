import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <main className="w-full min-h-screen">
      <section className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col">
          <div>
            <Header />
          </div>
          <div>
            <Body />
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
