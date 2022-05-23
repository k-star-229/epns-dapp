import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./segments/Header";
import Notice from "./components/notice";
import SendNotice from "./components/notice/SendNotice";
import Channel from "./components/channel";
import Channels from "./components/channel/Channels";

import "./App.scss";

const App = () => {

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/notice" element={<Notice />} />
          <Route path="/sendnotice" element={<SendNotice />} />

          <Route path="/channels/mine" element={<Channel />} />
          <Route path="/channels/all" element={<Channels />} />
        </Routes>
      </Router>
  );
}

export default App;
