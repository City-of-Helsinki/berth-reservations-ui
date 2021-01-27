import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container } from 'reactstrap';

import InvalidSelection from '../invalidSelection/InvalidSelection';

import './tabSelector.scss';

interface Props {
  children: React.ReactNode;
  progress: Function;
  selectedCount: number;
  invalidSelection?: string;
  tabMessage: React.ReactNode;
}

const TabSelector = ({ tabMessage, children, progress, selectedCount, invalidSelection }: Props) => {
  const [tab, selectTab] = useState(0);

  const getActiveTab = () => {
    return React.Children.toArray(children)[tab];
  };
  const { t } = useTranslation();
  const headers = React.Children.map(children, (c) => {
    if (c && typeof c === 'object' && 'props' in c) {
      return c.props.TabHeader;
    }
    return '';
  });

  return (
    <div className="vene-tab-selector">
      <div className="vene-tab-selector__header">
        <Container>
          {headers &&
            headers.map((TabComponent, i) => (
              <Button
                role="tab"
                aria-selected={i === tab}
                className="vene-tab-selector__tab-button"
                key={i}
                onClick={() => selectTab(i)}
                active={i === tab}
              >
                <TabComponent />
              </Button>
            ))}
        </Container>
      </div>
      <div className="vene-tab-selector__tabs">
        <Container>{getActiveTab()}</Container>
      </div>
      <div className="vene-tab-selector__application-prompt">
        <Container>
          <div className="vene-tab-selector__application-prompt__wrapper">
            {tabMessage}
            {invalidSelection && <InvalidSelection id="invalid-selection" msg={invalidSelection} />}
            <Button
              className="vene-tab-selector__progress-button"
              onClick={() => progress()}
              disabled={selectedCount === 0}
            >
              {t('site.buttons.next')}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TabSelector;
