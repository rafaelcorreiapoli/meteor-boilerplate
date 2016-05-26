import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

export default class RestaurantesListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { data, ...other } = this.props;
    return (
      <TableRow {...other}>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>{data.nome}</TableRowColumn>
        <TableRowColumn>{data.cnpj}</TableRowColumn>
      </TableRow>
    );
  }
}
