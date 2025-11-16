import { HashRouter, Route,Switch } from 'react-router-dom';
import { EntirePage } from './EntirePage/EntirePage';
import { ProfileOverview } from './profile/profile';
import { Teams } from './teams/Teams';
import { AllProjects } from './allProject/AllProject';
import { Reports } from './reports/report';
import { NewUser } from './newUser/NewUser';
import { Setting } from './setting/setting';
import { Billing } from './billing/billing';
import { Invoice } from './inVoice/Invoice';
import { Security } from './security/security';
import { General } from './general/general';
import { TimeLine } from './timeline/TimeLine';
import { NewProjects } from './newProject/NewProject';
import { PricingPage } from './pricingPage/PricingPage';
import { Charts } from './charts/Charts';
import { Notification } from './notification/Notification'
import { Chat } from './chat/Chat';
import './App.css';


function App() {

  return (
    <>
      
      <HashRouter>
         <Switch>
          <EntirePage />
          <Route path="/profile-overview" element={<ProfileOverview />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/all-project" element={<AllProjects />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/security" element={<Security />} />
          <Route path="/general" element={<General />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/new-projects" element={<NewProjects />} />
          <Route path="/pricing-page" element={<PricingPage />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/chat" element={<Chat />} />
          </Switch>
      </HashRouter>
    </>
  )
}

export default App