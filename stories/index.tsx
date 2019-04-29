/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import App from '../src/components/App';

storiesOf('an App', module)
    .add('that is the App itself', (): JSX.Element => (
        <App />
    ));
