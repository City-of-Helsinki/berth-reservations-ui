import classNames from 'classnames';
import { Tab, TabList, TabPanel, Tabs as HDSTabs } from 'hds-react';

import { TabModule } from './types';
import './tabs.scss';

export interface TabsProps {
  tabModules: TabModule[];
}

const Tabs = ({ tabModules }: TabsProps) => (
  <HDSTabs>
    <TabList className="vene-tabs__tablist">
      {tabModules.map((module) => (
        <Tab
          className={classNames('vene-tabs__tab', {
            'vene-tabs__tab--with-badge': module.showBadge,
          })}
        >
          {module.title}
        </Tab>
      ))}
    </TabList>
    {tabModules.map((module) => (
      <TabPanel key={module.id}>{module.component}</TabPanel>
    ))}
  </HDSTabs>
);

export default Tabs;
