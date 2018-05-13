import React from 'react';
import ReactDOM from 'react-dom';
import Root from './index';
import {sum} from './Test-cases/sum';
import axios from 'axios';

import {GithubReducer} from './Reducers/reducers';


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
     
   }).catch((err) => { });
}

test('the login data from github api', done => {
  function callback(data) {
    expect(data.login).toBe('divyanshu-rawat');
    done();
  }

  fetch_data(callback);
});


// Async test Method 2 by using promises.
function fetchData(){

 return axios.get(url_)
    .then(response => response.data)
    .then((response) => {
       return response;
   }).catch((err) => {  });

}

test('the name data from github api', () => {
  expect.assertions(1);
  return fetchData().then(data => {
    expect(data.name).toBe('Divyanshu Rawat');
  });
});



// Async test Method by using Async/Await

test('the organization URL data for github api', async () => {
  expect.assertions(1);
  const data = await fetchData();
  expect(data.organizations_url).toBe('https://api.github.com/users/divyanshu-rawat/orgs');
});


// testing reducers

describe('all reducer', () => {
  it('should return the initial state');
  it('should handle GET_API_DATA');
});


describe('GithubReducer', () => {
  it('should return the initial state', () => {
    expect(GithubReducer(undefined, {})).toEqual({ data: {} });
  });


  it('should handle GET_API_DATA', () => {
    
  	let data = fetchData().then((response) => {
  		return response;
  	});

    const successAction = {
      type: 'GET_GITHUB_API_DATA',
      data: data,
    };


    expect(GithubReducer({}, successAction)).toEqual({ data: successAction.data });
  });

});




