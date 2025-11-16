import { Route } from "react-router-dom";
import { SideBar } from "../sidebar/SideBar";
import { ProfileOverview } from "../profile/profile";
import { NewProjects } from '../newProject/NewProject';
import { Billing } from "../billing/billing";
import { TimeLine } from "../timeline/TimeLine";
import { Notification } from "../notification/Notification";
import { PricingPage } from "../pricingPage/PricingPage";
import { Security } from "../security/Security";
import { AllProjects } from '../allProject/AllProject'
import { Teams } from "../teams/Teams";
import { Setting } from "../setting/setting";
import { Charts } from "../charts/Charts";
import { NewUser } from "../newUser/NewUser";
import { Invoice } from "../inVoice/Invoice";
import { Chat } from "../chat/Chat";
import { Reports } from "../reports/report";

export function EntirePage() {
  console.log("EntirePage component rendered");

  return (
    <>
      <SideBar />
      <Route path="/profile-overview" component={ProfileOverview} />
      <Route path="/all-projects" component={AllProjects} />
      <Route path="/billing" component={Billing} />
      <Route path="/timeline" component={TimeLine} />
      <Route path="/notification" component={Notification} />
      <Route path="/pricing-page" component={PricingPage} />
      <Route path="/security" component={Security} />
      <Route path="/new-projects" component={NewProjects} />
      <Route path="/teams" component={Teams} />
      <Route path="/setting" component={Setting} />
      <Route path="/charts" component={Charts} />
      <Route path="/new-user" component={NewUser} />
      <Route path="/invoice" component={Invoice} />
      <Route path="/chat" component={Chat} />
      <Route path="/reports" component={Reports} />
    </>
  );
} 



