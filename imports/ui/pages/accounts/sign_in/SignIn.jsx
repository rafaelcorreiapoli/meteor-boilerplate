import React from 'react';
import AccountsUIWrapper from '/imports/ui/components/accounts_ui_wrapper/AccountsUIWrapper';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	 <AccountsUIWrapper />
      </div>
    );
  }
}
