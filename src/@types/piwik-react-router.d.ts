declare module 'piwik-react-router' {
  export default function (options: {
    url?: string;
    siteId?: string;
    enableLinkTracking?: boolean;
    updateDocumentTitle?: boolean;
    ignoreInitialVisit?: boolean;
    // eslint-disable-next-line @typescript-eslint/ban-types
    trackErrorHandler?: Function;
    injectScript?: boolean;
    clientTrackerName?: string;
    serverTrackerName?: string;
  }): {
    connectToHistory<H>(history: H): H;
  };
}
