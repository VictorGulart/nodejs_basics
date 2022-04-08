const url = require("url");

const myUrl = new URL(
  "https://mywebsite.com:8000//hello.html?id=100&status=active"
);

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// HOST (root domain)
console.log(myUrl.host);

// Hostname (root domain) - does not get port
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params obj
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append("abc", "poison-arrow");
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, param) => {
  console.log(`${param} => ${value}`);
});
