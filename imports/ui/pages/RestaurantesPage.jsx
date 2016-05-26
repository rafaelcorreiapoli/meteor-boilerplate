import React from 'react';
import RestaurantesList from '/imports/ui/components/RestaurantesList';

export default class RestaurantesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<h1> Restaurantes </h1>
        <RestaurantesList restaurantes={this.props.restaurantes}/>
      </div>
    );
  }
}
