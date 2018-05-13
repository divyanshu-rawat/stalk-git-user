import React from 'react';
import ReactDOM from 'react-dom';
import Root from './index';
import {sum} from './Test-cases/sum';
import axios from 'axios';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root />, div);
  ReactDOM.unmountComponentAtNode(div);
});

jest.mock("react-dom", () => {
    return {
        render: () => null,
        unmountComponentAtNode: () => null,
        findDOMNode: () => { return {} },
    };
});



// Async test Method 1.
let url_ = "https://api.github.com/users/divyanshu-rawat"

function fetch_data(callback){
 axios.get(url_)
    .then(response => response.data)
    .then((response) => {
    callback(response);
     
   }).catch((err) => { console.log(err); });
}

test('the data from github api', done => {
  function callback(data) {
    expect(data.login).toBe('divyanshu-rawat');
    done();
  }

  fetch_data(callback);
});







