import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import { Component } from 'react';
import Main from './views/main';

class App extends Component{

  state = {
    inputValue: ''
  }
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render(){
    const {  clickButton,newValue } = this.props;
    const { inputValue } = this.state;
    return (
      <Main />
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
