import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetuo";
import Favourite from "./pages/Favourites";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetup />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
