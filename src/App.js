import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./routes";

import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat/Chat";
import ChatList from "./pages/Chat/ChatList";
import House from "./pages/House/HouseDetail";
import HouseList from "./pages/House/HouseList";
import Layout from "./components/Layout";
import SignUpSuceess from "./pages/SignUp/SignUpSuccess";
import KakaoConfirm from "./pages/SignUp/KakakoConfirm";
import NaverConfirm from "./pages/SignUp/NaverConfirm";
import HouseSell from "./pages/House/HouseSell";
import MyInfo from "./pages/Profile/MyInfo";
import WishList from "./pages/Profile/WishList";
import RecentView from "./pages/Profile/RecentView";
import SellHistory from "./pages/Profile/SellHistory";
import HouseEdit from "./pages/House/HouseEdit";
import SellAll from "./pages/Profile/SellAll";
import NotSell from "./pages/Profile/NotSell";
import Sell from "./pages/Profile/Sell";
import NotFound from "./pages/NotFound";
import Find from "./pages/Find/Find";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="profile/:userName" element={<Profile />}>
            <Route path="" element={<MyInfo />} />
            <Route path="wishList" element={<WishList />} />
            <Route path="recentView" element={<RecentView />} />
            <Route path="sellHistory" element={<SellHistory />}>
              <Route path="" element={<SellAll />} />
              <Route path="sell" element={<Sell />} />
              <Route path="notsell" element={<NotSell />} />
            </Route>
          </Route>
          <Route path="chatlist" element={<ChatList />}>
            <Route path=":chatRoomPk" element={<Chat />} />
          </Route>
          <Route path={routes.house} element={<House />} />
          <Route path={routes.houseList} element={<HouseList />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signUpSuccess" element={<SignUpSuceess />} />
          <Route path="social">
            <Route path="kakao" element={<KakaoConfirm />} />
            <Route path="naver" element={<NaverConfirm />} />
          </Route>
          <Route path="sell" element={<HouseSell />} />
          <Route path="edit/:id" element={<HouseEdit />} />
          <Route path="find/:type" element={<Find />} />
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
