import * as React from 'react';

export type TabModule = {
  id: string;
  title: string;
  showBadge?: boolean;
  component: React.ReactNode;
};
