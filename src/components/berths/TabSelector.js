// @flow
import React, { Component, type Node } from 'react';
import styled from 'styled-components';
import { StickyContainer, Sticky } from 'react-sticky';
import { FormattedMessage } from 'react-intl';
import responsive from '../../utils/responsive';
import IntlComponent from '../common/IntlComponent';

const TabsWrapper = styled.div`
  background-color: ${props => props.theme.helLight};
  border-bottom: 4px solid white;
  z-index: 1001;
`;
const TabsInnerWrapper = styled.div`
  max-width: ${props => props.theme.maxWidth.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 15px;
  margin-right: 15px;
  margin: auto;
  flex-direction: column-reverse;
  ${responsive.sm`
    flex-direction: row;
  `}
`;

const TabButton = styled.button.attrs({
  type: 'button'
})`
  outline: none;
  border: none;
  color: black;
  padding: 0.5em 1em;
  background-color: ${props => (props.active ? 'white' : 'unset')};
  :active,
  :focus {
    outline: none;
  }
  ${responsive.sm`
    padding: 1em 2em;
  `}
`;

const Tabs = styled.div`
  margin-top: 3em;
`;

const ProgressButton = styled.button`
  margin-left: 1ch;
`;

type Props = {
  children: Array<Node>,
  progress: Function,
  selectedCount: number
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
    const { children, progress, selectedCount } = this.props;

    // $FlowFixMe
    const headers = children.map(c => c.props.TabHeader);
    return (
      <StickyContainer>
        <Sticky>
          {({ style }) => (
            <TabsWrapper style={style}>
              <TabsInnerWrapper>
                <div>
                  {headers.map((TabComponent, i) => (
                    <TabButton block key={i} onClick={() => this.selectTab(i)} active={i === tab}>
                      <TabComponent />
                    </TabButton>
                  ))}
                </div>
                <div>
                  <FormattedMessage
                    id={getFormatedMessageId(selectedCount, maxSelected)}
                    values={{
                      total: REACT_APP_MAX_SELECTED_BERTHS,
                      count: maxSelected - selectedCount
                    }}
                  />
                  <IntlComponent
                    id="tab_selector.progress.button"
                    Component={ProgressButton}
                    onClick={progress}
                    disabled={selectedCount === 0}
                  />
                </div>
              </TabsInnerWrapper>
            </TabsWrapper>
          )}
        </Sticky>
        <Tabs>{this.getActiveTab()}</Tabs>
      </StickyContainer>
    );
  }
}

export default TabSelector;
