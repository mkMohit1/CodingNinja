import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

function Home() {
  console.log("home")
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
