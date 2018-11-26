import React, { Component } from 'react';
import styled from 'styled-components';
import { StickyContainer, Sticky } from 'react-sticky';
import responsive from '../../utils/responsive';

const TabsWrapper = styled.div`
  background-color: ${props => props.theme.helFog};
  display: flex;
  z-index: 1001;
  justify-content: center;
  border-bottom: 4px solid white;
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

class TabSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 0
    };
  }

  selectTab = tab => {
    this.setState(() => ({ tab }));
  };

  getActiveTab = () => {
    const { children } = this.props;
    const { tab } = this.state;
    return children[tab];
  };

  render() {
    const { tab } = this.state;
    const { children } = this.props;

    const headers = children.map(c => c.props.TabHeader);
    return (
      <StickyContainer>
        <Sticky>
          {({ style }) => (
            <TabsWrapper style={style}>
              {headers.map((T, i) => (
                <TabButton key={i} onClick={() => this.selectTab(i)} active={i === tab}>
                  <T />
                </TabButton>
              ))}
            </TabsWrapper>
          )}
        </Sticky>
        <Tabs>{this.getActiveTab()}</Tabs>
      </StickyContainer>
    );
  }
}

export default TabSelector;
