import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react';

const MainHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName href="/" prefix="IBM">
      Carbon Tutorial
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar />
  </Header>
);

export default MainHeader;