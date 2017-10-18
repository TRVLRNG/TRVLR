import React from 'react';

// Material UI
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerOpenRight extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }
  

  render() {
    let selection = [];
    for (let i = 0; i < this.props.selection.length; i++) {
      selection.push(<p className='midtext'>{this.props.selection[i]}</p>)
    }
    return (
      <div>
        <RaisedButton
          label="Your selections"
          onClick={this.handleToggle}
        />

        <Drawer width={200} openSecondary={true} open={this.state.open} >
        {selection}
        </Drawer>
      </div>
    );
  }
}