import { Dispatch, FC, SetStateAction } from "react";
import {
  TimeLineSection,
  LandingHeader,
  LandingFeedback,
  Footer,
  StatisticLanding,
} from "../../components";

const LandingPage: FC<{ setIsGotten: Dispatch<SetStateAction<boolean>> }> = ({
  setIsGotten,
}) => (
  <>
    <LandingHeader setIsGotten={setIsGotten} />
    <TimeLineSection />
    <LandingFeedback />
    <StatisticLanding />

    <Footer />
  </>
);

export default LandingPage;
