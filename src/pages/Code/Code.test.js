import React from 'react';
import ReactDOM from 'react-dom';
import Code from './index';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter>
            <Code />
        </MemoryRouter>
        , div);
});
