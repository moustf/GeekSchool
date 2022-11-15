import { FC } from "react";
import {
  TimeLineSection,
  LandingHeader,
  LandingFeedback,
  Footer,
  StatisticLanding,
} from "../../components";

const LandingPage: FC = () => (
  <>
    <LandingHeader />
    <TimeLineSection />
    <LandingFeedback />
    <StatisticLanding />
    <Footer />
  </>
);

export default LandingPage;
