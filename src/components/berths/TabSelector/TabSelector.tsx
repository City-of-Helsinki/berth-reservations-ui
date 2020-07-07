import React from 'react';
import { Button, Container } from 'reactstrap';
import IntlComponent from '../../common/IntlComponent';
import InvalidSelection from '../InvalidSelection';

import './TabSelector.scss';

interface Props {
  children: React.ReactNode;
  progress: Function;
  selectedCount: number;
  validSelection: boolean;
  tabMessage: React.ReactNode;
}

interface State {
  tab: number;
}

class TabSelector extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      tab: 0
    };
  }

  selectTab = (tab: number) => {
    this.setState(() => ({ tab }));
  };

  getActiveTab = () => {
    const { children } = this.props;
    const { tab } = this.state;
    return React.Children.toArray(children)[tab];
  };

  render() {
    const { tab } = this.state;
    const { tabMessage, children, progress, selectedCount, validSelection } = this.props;

    const headers = React.Children.map(children, c => {
      if (c && typeof c === 'object' && 'props' in c) {
        return c.props.TabHeader;
      }
      return '';
    });
    return (
      <div className="vene-berth__tab-selector">
        <div className="vene-berth__tab-selector__header">
          <Container>
            {headers.map((TabComponent, i) => (
              <Button
                role="tab"
                aria-selected={i === tab}
                className="vene-berth__tab-selector__tab-button"
                key={i}
                onClick={() => this.selectTab(i)}
                active={i === tab}
              >
                <TabComponent />
              </Button>
            ))}
          </Container>
        </div>
        <div className="vene-berth__tab-selector__tabs">
          <Container>{this.getActiveTab()}</Container>
        </div>
        <div className="vene-berth__tab-selector__application-promt">
          <Container>
            <div className="vene-berth__tab-selector__application-promt__wrapper">
              {tabMessage}
              {!validSelection && (
                <InvalidSelection
                  id="invalid-selection"
                  msg="error.message.invalid_berth_selection"
                />
              )}
              <IntlComponent
                id="site.buttons.next"
                Component={Button}
                className="vene-berth__tab-selector__progress-button"
                onClick={progress}
                disabled={selectedCount === 0}
              />
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default TabSelector;
