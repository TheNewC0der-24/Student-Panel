import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
// import Interaction from './components/Interaction/Interaction';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Report from './components/Report/Report';
// import LeaderboardReport from './components/LeaderboardReport/LeaderboardReport';
import Form from './components/StudentInteractionForm/Form';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
// import ViewReports from './components/ViewReports/ViewReports';
import Certificate from './components/Certificate/Certificate';
// import ThankYou from './components/ThankYou/ThankYou';
import Profile from './components/Profile/Profile';
import Welcome from './components/Videos/Welcome';
import Work from './components/Videos/Work';
import Recording from './components/Videos/Recording';
import Start from './components/Videos/Start';
import Question from './components/Videos/Question';
import AudioRecording from './components/Audios/AudioRecording';
import Confirm from './components/Videos/Confirm';
import Trouble from './components/Videos/Trouble';
import Mcq from './components/MCQ/Mcq';
import Thanks from './components/Videos/ThankYou';
// import Responses from './components/Responses/Responses';
import Image from './components/ImageUpload/Image';
import Text from './components/Text/Text';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          {/* <Route exact path='/thankyou' element={<ThankYou />} /> */}
          {/* <Route exact path='/interaction' element={<Interaction />} /> */}
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path="/report" element={<Report />} />
          {/* <Route exact path="/leaderboardReport" element={<LeaderboardReport />} /> */}
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/resetPassword' element={<ForgetPassword />} />
          <Route exact path='/form' element={<Form />} />
          <Route exact path='/register' element={<SignUp />} />
          {/* <Route exact path='/viewReport' element={<ViewReports />} /> */}
          <Route exact path='/certificate' element={<Certificate />} />
          <Route exact path='/welcome' element={<Welcome />} />
          <Route exact path='/work' element={<Work />} />
          <Route exact path='/recording' element={<Recording />} />
          <Route exact path='/confirm' element={<Confirm />} />
          <Route exact path='/trouble' element={<Trouble />} />
          <Route exact path='/start' element={<Start />} />
          <Route exact path='/question' element={<Question />} />
          <Route exact path='/audiorecording' element={<AudioRecording />} />
          <Route exact path='/mcq' element={<Mcq />} />
          <Route exact path='/imageUpload' element={<Image />} />
          <Route exact path='/text' element={<Text />} />
          <Route exact path='/thanks' element={<Thanks />} />
          {/* <Route exact path='/response' element={<Responses />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
