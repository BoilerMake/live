import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnalyticsListener from './components/AnalyticsListener';
import Routes from './Routes';
import ReduxToastr from 'react-redux-toastr';
import ScrollToTop from './components/ScrollToTop.js';

const App = () => (
  <BrowserRouter>
    <div className="body">
      <div className="content">
        <ScrollToTop>
          <AnalyticsListener />
          <Routes />
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-center"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
          />
        </ScrollToTop>
      </div>
      {/* <Footer /> */}
    </div>
  </BrowserRouter>
);
export default App;
