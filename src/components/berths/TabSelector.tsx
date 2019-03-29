import React from 'react';
import styled, { css } from 'styled-components';
import { StickyContainer, Sticky } from 'react-sticky';
import { Button, Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import responsive from '../../utils/responsive';
import IntlComponent from '../common/IntlComponent';
import InvalidSelection from './InvalidSelection';

type TabsWrapperProps = {
  sticky: boolean;
};

const TabsWrapper = styled.div<TabsWrapperProps>`
  background-color: ${props => props.theme.helLight};
  border-bottom: 4px solid white;
  z-index: 1001;
  ${props =>
    props.sticky &&
    css`
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    `};
`;

const TabsInnerWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-direction: column-reverse;
  ${responsive.md`
    flex-direction: row;
  `}
`;

type TabButtonProps = {
  active: boolean;
};

const TabButton = styled.button.attrs({
  type: 'button'
})<TabButtonProps>`
  outline: none;
  border: none;
  color: black;
  padding: 0.5em 1em;
  background-color: ${props => (props.active ? 'white' : 'unset')};
  :active,
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
  ${responsive.sm`
    padding: 1em 2em;
  `}
`;

const Tabs = styled.div`
  margin-top: 0;
`;

const ApplicationPrompt = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  line-height: 1;
  text-align: right;
  margin: 0.5em 0;
  ${responsive.md`
    font-size: inherit;
  `}
`;

const ProgressButton = styled(Button)`
  float: right;
  margin-left: 1ch;
  font-size: 14px;
  ${responsive.md`
    font-size: inherit;
  `}
`;

interface Props {
  children: React.ReactNode;
  progress: Function;
  selectedCount: number;
  validSelection: boolean;
}

type State = {
  tab: number;
};
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
            <TabsWrapper style={style} sticky={isSticky}>
              <TabsInnerWrapper>
                <div>
                  {headers.map((TabComponent, i) => (
                    <TabButton key={i} onClick={() => this.selectTab(i)} active={i === tab}>
                      <TabComponent />
                    </TabButton>
                  ))}
                </div>
                <ApplicationPrompt>
                  <div>
                    <FormattedMessage
                      id={getFormatedMessageId(selectedCount, maxSelected)}
                      values={{
                        total: REACT_APP_MAX_SELECTED_BERTHS,
                        count: maxSelected - selectedCount
                      }}
                    />
                  </div>
                  {!validSelection && <InvalidSelection />}
                  <IntlComponent
                    id="tab_selector.progress.button"
                    Component={ProgressButton}
                    onClick={progress}
                    disabled={selectedCount === 0}
                  />
                </ApplicationPrompt>
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
