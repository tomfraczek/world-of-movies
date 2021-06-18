import React from 'react';

import {
    NotificationContainer
} from './notification.styles';

const Notification = ({content}) => (
    <NotificationContainer>
        <p>{content}</p>
    </NotificationContainer>
)

export default Notification;