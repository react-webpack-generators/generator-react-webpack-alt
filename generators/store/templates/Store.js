import alt from 'components/Dispatcher';

export class <%= storeClass %> {

  constructor() {
    // this.bindListeners({});
  }
}

export default alt.createStore(<%= storeClass %>, '<%= storeClass %>');
