const chai = require('chai');
const expect = chai.expect;
var chaiHttp = require('chai-http');
// var server = require('../tools/srcServerExpressTest');

import { hello, getNewUser } from "./functions";

chai.use(chaiHttp);

describe('Testing Check', function() {
  it('should say hello', function() {
      expect(hello()).to.equal('hello')
    })
  });

describe('Get New User Data', function() {
  it('should get new random user data as an object', function(done) {
  chai.request('localhost:8000')
    .get('/api/newuser')
    .end(function(err, res){
      // console.log('err: ', err)
      expect(res.body.results[0]).to.be.an('object')
      done();
    });
  });
});
describe('General Functions', function() {
});
describe('CRUD Operations', function() {
});
  // it('should list a SINGLE blob on /blob/<id> GET');
  // it('should add a SINGLE blob on /blobs POST');
  // it('should update a SINGLE blob on /blob/<id> PUT');
  // it('should delete a SINGLE blob on /blob/<id> DELETE');
