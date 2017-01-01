import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import Dispatcher from 'redux-devtools-dispatch';
import * as actionCreators from '../actions';

/**
 * Create the DevTools component and export it.
 */
export default createDevTools(
  <DockMonitor
    /**
     * Hide or show the dock with "ctrl-h".
     */
    toggleVisibilityKey='ctrl-h'
    /**
     * Change the position of the dock with "ctrl-q".
     */
    changePositionKey='ctrl-q'
    changeMonitorKey="ctrl-m"
    defaultIsVisible={true}
  >
    <LogMonitor theme='tomorrow' />
    <Dispatcher />
  </DockMonitor>
);
