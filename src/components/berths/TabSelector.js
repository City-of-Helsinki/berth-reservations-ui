import React, { Fragment, Component } from 'react';
import styled from 'styled-components';

const TabsWrapper = styled.div`
  background-color: ${props => props.theme.helFog};
  display: flex;
  justify-content: center;
`;
const TabButton = styled.button.attrs({
  type: 'button'
})`
  outline: none;
  border: none;
  color: black;
  padding: 1em 2em;
  background-color: ${props => (props.active ? 'white' : 'unset')};
  :active,
  :focus {
    outline: none;
  }
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

    const headers = children.map(c => c.props.tabHeader);
    return (
      <Fragment>
        <TabsWrapper>
          {headers.map((t, i) => (
            <TabButton key={i} onClick={() => this.selectTab(i)} active={i === tab}>
              {t}
            </TabButton>
          ))}
        </TabsWrapper>
        <Tabs>{this.getActiveTab()}</Tabs>
      </Fragment>
    );
  }
}

export default TabSelector;
