// @flow
import React, { Component, type Node } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Button, Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import IntlComponent from '../common/IntlComponent';
import InvalidSelection from './InvalidSelection';
import './_tab-selector.scss';

type Props = {
  children: Array<Node>,
  progress: Function,
  selectedCount: number,
  validSelection: boolean
};

type State = {
  tab: number
};
const { REACT_APP_MAX_SELECTED_BERTHS = 0 } = process.env;

// $FlowFixMe
const maxSelected: number = Number.parseInt(REACT_APP_MAX_SELECTED_BERTHS, 10) || 0;

const getFormatedMessageId = (count, total) => {
  if (count) {
    if (count === total) {
      return 'tab_selector.progress.message.max';
    }
    return 'tab_selector.progress.message.other';
  }
  return 'tab_selector.progress.message.zero';
};

class TabSelector extends Component<Props, State> {
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
    return children[tab];
  };

  render() {
    const { tab } = this.state;
    const { children, progress, selectedCount, validSelection } = this.props;

    // $FlowFixMe
    const headers = children.map(c => c.props.TabHeader);
    return (
      <StickyContainer>
        <Sticky>
          {({ style, isSticky }) => (
            <div
              className={classNames('app-berth__tab-selector', { 'is-sticky': isSticky })}
              style={style}
            >
              <Container className="app-berth__tab-selector__wrapper">
                {headers.map((TabComponent, i) => (
                  <Button
                    className="app-berth__tab-selector__tab-button"
                    block
                    key={i}
                    onClick={() => this.selectTab(i)}
                    active={i === tab}
                  >
                    <TabComponent />
                  </Button>
                ))}
                <div className="app-berth__tab-selector__application-promt">
                  <FormattedMessage
                    id={getFormatedMessageId(selectedCount, maxSelected)}
                    values={{
                      total: REACT_APP_MAX_SELECTED_BERTHS,
                      count: maxSelected - selectedCount
                    }}
                  />
                  {!validSelection && <InvalidSelection />}
                  <IntlComponent
                    id="tab_selector.progress.button"
                    Component={Button}
                    className="app-berth__tab-selector__progress-button"
                    onClick={progress}
                    disabled={selectedCount === 0}
                  />
                </div>
              </Container>
            </div>
          )}
        </Sticky>
        <div className="app-berth__tab-selector__tabs">{this.getActiveTab()}</div>
      </StickyContainer>
    );
  }
}

export default TabSelector;
