import classNames from 'classnames';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Sticky, StickyContainer } from 'react-sticky';
import { Button, Container } from 'reactstrap';
import IntlComponent from '../../common/IntlComponent';
import InvalidSelection from '../InvalidSelection';
import './TabSelector.scss';

interface Props {
  children: React.ReactNode;
  progress: Function;
  selectedCount: number;
  validSelection: boolean;
}

interface State {
  tab: number;
}
const { REACT_APP_MAX_SELECTED_BERTHS = '0' } = process.env;

const maxSelected: number = Number.parseInt(REACT_APP_MAX_SELECTED_BERTHS, 10) || 0;

const getFormatedMessageId = (count: number, total: number): string => {
  if (count) {
    if (count === total) {
      return 'tab_selector.progress.message.max';
    }
    return 'tab_selector.progress.message.other';
  }
  return 'tab_selector.progress.message.zero';
};

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
    const { children, progress, selectedCount, validSelection } = this.props;

    const headers = React.Children.map(children, c => {
      if (c && typeof c === 'object' && 'props' in c) {
        return c.props.TabHeader;
      }
      return '';
    });
    return (
      <StickyContainer>
        <Sticky>
          {({ style, isSticky }) => (
            <div
              className={classNames('vene-berth__tab-selector', { 'is-sticky': isSticky })}
              style={style}
            >
              <Container className="vene-berth__tab-selector__wrapper">
                {headers.map((TabComponent, i) => (
                  <Button
                    className="vene-berth__tab-selector__tab-button"
                    key={i}
                    onClick={() => this.selectTab(i)}
                    active={i === tab}
                  >
                    <TabComponent />
                  </Button>
                ))}
                <div className="vene-berth__tab-selector__application-promt">
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
                    className="vene-berth__tab-selector__progress-button"
                    onClick={progress}
                    disabled={selectedCount === 0}
                  />
                </div>
              </Container>
            </div>
          )}
        </Sticky>
        <div className="vene-berth__tab-selector__tabs">{this.getActiveTab()}</div>
      </StickyContainer>
    );
  }
}

export default TabSelector;
