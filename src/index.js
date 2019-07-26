import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/styles/index.sass";
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

import ItemList from './components/ItemList';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import MainSlider from './components/MainSlider';
import InteractiveBlock from './components/InteractiveBlock';
import Footer from './components/Footer';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <MainMenu/>
      <MainSlider/>
      <InteractiveBlock/>
      <Footer/>
      {/* <ItemList/> */}
    </Provider>
  );
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
