import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetuo";
import Favourite from "./pages/Favourites";

import MainNavigation from "./components/layout/MainNavigation";


function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
