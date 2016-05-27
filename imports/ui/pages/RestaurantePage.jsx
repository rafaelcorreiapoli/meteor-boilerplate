import React from 'react';
import RestauranteShow from '/imports/ui/components/RestauranteShow';

export default class RestaurantePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	let {restaurante, loading} = this.props;
  	console.log('loading ', loading);
    return (
      <div>
      	{loading ? 'Loading' : <RestauranteShow {...restaurante} />}
      </div>
    );
  }
}
