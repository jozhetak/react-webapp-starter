import { injectGlobal } from 'styled-components';
import 'antd/dist/antd.css';
import 'ionicons/css/ionicons.css';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  h1,
h2,
h3,
h4,
h5,
h6,
a,
p,
li,
input,
textarea,
span,
div,
html,
body,
html a {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}

.ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow:after,
.ant-popover-placement-bottomLeft
  > .ant-popover-content
  > .ant-popover-arrow:after,
.ant-popover-placement-bottomRight
  > .ant-popover-content
  > .ant-popover-arrow:after,
.ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow:after,
.ant-popover-placement-topLeft
  > .ant-popover-content
  > .ant-popover-arrow:after,
.ant-popover-placement-topRight
  > .ant-popover-content
  > .ant-popover-arrow:after {
  left: 0;
  margin-left: -4px;
}

.ant-popover-inner-content {
  padding: 8px 16px;
}

/********** Add Your Global RTL CSS Here **********/
/* Popover */
html[dir='rtl'] .ant-popover {
  text-align: right;
}

/* Ecommerce Card */
html[dir='rtl'] .isoCardInfoForm .ant-input {
  text-align: right;
}

/* Modal */
html[dir='rtl'] .has-success.has-feedback:after,
html[dir='rtl'] .has-warning.has-feedback:after,
html[dir='rtl'] .has-error.has-feedback:after,
html[dir='rtl'] .is-validating.has-feedback:after {
  left: 0;
  right: auto;
}

html[dir='rtl'] .ant-modal-close {
  right: inherit;
  left: 0;
}

html[dir='rtl'] .ant-modal-footer {
  text-align: left;
}

html[dir='rtl'] .ant-modal-footer button + button {
  margin-left: 0;
  margin-right: 8px;
}

html[dir='rtl'] .ant-confirm-body .ant-confirm-content {
  margin-right: 42px;
}

html[dir='rtl'] .ant-btn > .anticon + span,
html[dir='rtl'] .ant-btn > span + .anticon {
  margin-right: 0.5em;
}

html[dir='rtl'] .ant-btn-loading span {
  margin-left: 0;
  margin-right: 0.5em;
}

html[dir='rtl']
  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline) {
  padding-left: 25px;
  padding-right: 29px;
}

html[dir='rtl']
  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline)
  .anticon {
  margin-right: -14px;
  margin-left: 0;
}

/* Confirm */
html[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-body > .anticon {
  margin-left: 16px;
  margin-right: 0;
  float: right;
}

html[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-btns {
  float: left;
}

html[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-btns button + button {
  margin-right: 10px;
  margin-left: 0;
}

/* Message */
html[dir='rtl'] .ant-message .anticon {
  margin-left: 8px;
  margin-right: 0;
}

/* Pop Confirm */
html[dir='rtl'] .ant-popover-message-title {
  padding-right: 20px;
  padding-left: 0;
}

html[dir='rtl'] .ant-popover-buttons {
  text-align: left;
}

/* Notification */
html[dir='rtl']
  .ant-notification-notice-closable
  .ant-notification-notice-message {
  padding-left: 24px;
  padding-right: 0;
}

html[dir='rtl']
  .ant-notification-notice-with-icon
  .ant-notification-notice-message,
html[dir='rtl']
  .ant-notification-notice-with-icon
  .ant-notification-notice-description {
  margin-right: 48px;
}

html[dir='rtl'] .ant-notification-notice-close {
  right: auto;
  left: 16px;
}

html[dir='rtl'] .ant-notification-notice-with-icon {
  left: 0;
}

/* Dropzone */
html[dir='rtl'] .dz-hidden-input {
  display: none;
}
`;
