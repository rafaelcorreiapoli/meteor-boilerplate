import { AccountsTemplates } from 'meteor/useraccounts:core';
import { FlowRouter } from 'meteor/kadira:flow-router';

AccountsTemplates.configure({
  onLogoutHook() {
    FlowRouter.go('signIn');
  }
});