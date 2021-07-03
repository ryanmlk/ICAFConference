import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './pages/Users';
import Login from './pages/Login';
import ResearchRegister from './pages/ResearchRegister';
import WorkshopRegister from './pages/WorkshopRegister';
import WorkshopManagement from './pages/WorkshopManagement';
import LandingPage from './pages/LandingPage';
import News from './pages/News';
import Workshops from './pages/Workshops';
import ResearchPaperTable from './components/researchPaper/ResearchPaperTable';
import Dashboard from './pages/Dashboard';
import WorkshopAdminTable from './components/workshop/WorkshopAdminTable';
import NewsTable from './components/news/NewsTable';
import ContactUs from './pages/ContactUs';
import CallForPapers from './pages/CallForPapers';
import ConferenceAdmin from './pages/ConferenceAdmin';
import KeynoteTable from './components/keynote/KeynoteTable';
import AttendeeRegister from './pages/AttendeeRegister';

function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/news" component={News} />
          <Route exact path="/workshops" component={Workshops} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path="/papers" component={CallForPapers} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/editor/workshops" component={WorkshopManagement} />
          <Route exact path="/editor/research" component={ResearchPaperTable} />
          <Route exact path="/editor/dashboard" component={Dashboard} />
          <Route exact path="/editor/workshopAdmin" component={WorkshopAdminTable} />
          <Route exact path="/editor/conference" component={ConferenceAdmin} />
          <Route exact path="/editor/NewsTable" component={NewsTable} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/researcher/register" component={ResearchRegister} />
          <Route exact path="/workshop/register" component={WorkshopRegister} />
          <Route exact path="/editor/keynote" component={KeynoteTable} />
          <Route exact path="/attendee/register" component={AttendeeRegister} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
