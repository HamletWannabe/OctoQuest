

//from SO. Testing for now
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

/*
jsdom.env({
    url : "http://localhost:8000/test.html",
    features : {
        FetchExternalResources : ['script'],
        ProcessExternalResources : ['script']
    },
    done : function (error, window) {
        window.test();
        console.log(window.document.innerHTML);
    }
});
*/

//other stuff
const octokit = require('@octokit/rest')({
  debug: true
})

// Compare: https://developer.github.com/v3/repos/#list-organization-repositories
/*octokit.repos.getForOrg({
  org: 'octokit',
  type: 'public'
}).then(({data, headers, status}) => {
  // handle data
})
*/

// oauth
octokit.authenticate({
  type: 'oauth',
  token: '91c3623d15d899a3c4a0211f9f07e67557338113'
});

octokit.repos.getContent({
  owner: 'elee5',
  repo: 'cip',
  path: ''
})
.then(result => {
  //console.log(result);
})
.catch(err => {
  console.log(err);
});

octokit.repos.getDownloads({
  owner: 'elee5',
  repo: 'cip',
}).then(result => {
  //console.log(result);
})
.catch(err => {
  //console.log(err);
});

/*
octokit.repos.getPaths({
  owner: 'wstansbury',
  repo: 'test'
}).then(result => {
  console.log("yay");
}).catch(err => {
  console.log(err);
});
*/

//const result = await octokit.users.getFollowers({per_page, page})

//.then(result => {})

//octokit.users.getFollowers({}).then(result => {console.log(result)})

//var myRepos;

octokit.repos.getAll({
  //'affiliation': 'owner,organization_member'
},(error, result) => {});

/*
octokit.pullRequests.getFiles({
  owner: 'wstansbury',
  repo: 'test',
  number: 1
}, (error, result) => {console.log(result)})
*/

/*
octokit.repos.getClones({
  owner: 'wstansbury',
  repo: 'test'
}).then(result => {console.log(result)})
*/

//console.log(myRepos);
