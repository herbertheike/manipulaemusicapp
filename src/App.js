import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import { bindActionCreators } from 'redux';
import { Component } from 'react';
import Main from './views/main';
import { Provider } from 'react-redux';
import store from './store';

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
    const {  clickButton, newValue } = this.props;
    const { inputValue } = this.state;
    return (
      <Provider store={store}>
        <Main />
      </Provider>
      
    )
  }
}

/*const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});*/
export default App;
