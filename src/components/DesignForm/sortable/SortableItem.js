/* eslint-disable react/destructuring-assignment */
import { sortable } from 'react-sortable';
import React from 'react';

class SortItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div 
    {...this.props}
    >{this.props.children}</div>;
  }
}

const SortableItem = sortable(SortItem);
export default SortableItem;
