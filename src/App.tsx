import { Box, Tab } from "@components/index";
import {
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import { useState } from "react";
import { FirstFormPage } from "./pages/first-form/first-form.page";
import { SecondFormPage } from "./pages/second-form/second-form.page";
import { ThirdFormPage } from "./pages/third-form/third-form.page";

const tabs = ["Step 1", "Step 2", "Step 3"];
const tabPanels = [<FirstFormPage />, <SecondFormPage />, <ThirdFormPage />];

export const App = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box className="bg-gradient-full-size">
      <Box className="bg-main-card">
        <TabGroup selectedIndex={tabIndex} onChange={setTabIndex}>
          <TabList className="flex rounded-xl justify-between">
            {tabs.map((tab, index) => (
              <Tab key={index} title={tab} selected={tabIndex === index} />
            ))}
          </TabList>
          <TabPanels>
            {tabPanels.map((panel, index) => (
              <TabPanel key={index}>
                <Transition
                  as="div"
                  appear
                  show={tabIndex === index}
                  enter="transition-opacity duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  {panel}
                </Transition>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Box>
    </Box>
  );
};

export default App;
