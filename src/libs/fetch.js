"use strict";
// window.fetch = fetch;

function Response(response) {
  this.response = response.response;
  this.ok = response.status >= 200 && response.status < 300;
  this.statusText = response.statusText;
}

Response.prototype.json = function() {
  return JSON.parse(this.response);
};

function Request(requestInit) {
  this.method = requestInit.method || "GET";
  this.body = requestInit.body;
  this.headers = requestInit.headers;
}


function fetch(url, requestInit) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    var requestConfiguration = new Request(requestInit || {});
    request.open(requestConfiguration.method, url);
    request.onload = function() {
      var response = new Response(this);
      resolve(response);
    };
    request.onerror = function() {
      reject("Network error!");
    };
    for (var header in requestConfiguration.headers) {
      request.setRequestHeader(header, requestConfiguration.headers[header]);
    }
    requestConfiguration.body && request.send(requestConfiguration.body);
    requestConfiguration.body || request.send();
  });
}

export { fetch }