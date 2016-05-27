import { insert } from '/imports/api/restaurantes/methods';

import React from 'react';
import Formsy from 'formsy-react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';

const RestaurantesAdd = React.createClass({
  getInitialState() {
    return {
      canSubmit: false,
      snackOpen: false,
      snackMessage: ''
    };
  },
	errorMessages: {
    numericError: 'Por favor coloque um número válido',
    urlError: 'Por favor coloque uma URL válida'
  },

  styles: {
    paperStyle: {
      width: 400,
      margin: 'auto',
      padding: 20,
    },
    inputStyle: {
    	width: '100%'
    },
    submitStyle: {
      marginTop: 32,
    },
  },

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  },

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  },

  submitForm(data) {
  	data.lat = Number(data.lat);
  	data.lng = Number(data.lng);
    insert.call(data, (err, res) => {
      let message;
      if (err) {
        message = `Algo errado aconteceu: ${err.toString()}`;
      } else {
        message = 'Restaurante criado';
      }

      this.setState({
        snackOpen: true,
        snackMessage: message
      });
    });
  },

  notifyFormError(data) {
    console.error('Form error:', data);
  },

  handleRequestClose() {
    this.setState({
      snackOpen: false,
    });
  },

  render() {
    let {paperStyle, switchStyle, submitStyle, inputStyle } = this.styles;
    let { wordsError, numericError, urlError } = this.errorMessages;
    return (
      <div>
  	    <Paper style={paperStyle}>
  	    	<h3>Novo Restaurante</h3>
  	      <Formsy.Form
  	        onValid={this.enableButton}
  	        onInvalid={this.disableButton}
  	        onValidSubmit={this.submitForm}
  	        onInvalidSubmit={this.notifyFormError}
  	      >
  	        <FormsyText
  	        	style={inputStyle}
  	          name="nome"
  	          required
  	          hintText="MC Donalds"
  	          floatingLabelText="Name"
  	        />
  	        <FormsyText
  	        	style={inputStyle}
  	          name="cnpj"
  	          required
  	          hintText="66.802.357/0001-00"
  	          floatingLabelText="CNPJ"
  	        />
  	        <FormsyText
  	        	style={inputStyle}
  	          name="lat"
  	          validations="isNumeric"
  	          validationError={numericError}
  	          hintText="-23.628482"
  	          floatingLabelText="Latitude"
  	        />
  	        <FormsyText
  	        	style={inputStyle}
  	          name="lng"
  	          validations="isNumeric"
  	          validationError={numericError}
  	          hintText="-46.616636"
  	          floatingLabelText="Longitude"
  	        />
            <FormsyText
              style={inputStyle}
              name="logoUrl"
              validations="isUrl"
              validationError={urlError}
              hintText="http://..."
              floatingLabelText="Logotipo"
            />
  	        <RaisedButton
  	          style={submitStyle}
  	          type="submit"
  	          label="Submit"
  	          disabled={!this.state.canSubmit}
  	        />
  	      </Formsy.Form>
  	    </Paper>
        <Snackbar
          open={this.state.snackOpen}
          message={this.state.snackMessage}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
});

export default RestaurantesAdd;
