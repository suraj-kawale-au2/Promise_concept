# Javascript Promises.

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

## Problems while writing Async Javascript.

### "Callback Hell"

Asynchronous JavaScript, or JavaScript that uses callbacks, is hard to get right intuitively.It Looks like this.

```
getSomeData(function(x){
    getSomeMoreData(x, function(y){
        getSomeSomeMoreData(y, function(z){ 
            console.log(z);
        });
    });
});

```

### "What are callbacks?"

Callbacks are just the name of a convention for using JavaScript functions. There isn't a special thing called a 'callback' in the JavaScript language, it's just a convention. Instead of immediately returning some result like most functions, functions that use callbacks take some time to produce a result. The word 'asynchronous', aka 'async' just means 'takes some time' or 'happens in the future, not right now'. Usually callbacks are only used when doing I/O, e.g. downloading things, reading files, talking to databases, etc.

### "How Promises Rescues From CallBack Hell"

`Promise me it won’t ever happen again`

To Battle the problem of syntactical hell some wise men created the idea of Promise.
These are the Basic Principles Behind Promise.

`
* Promises provide control over result of a callback:to **resolve or to reject**.
* All Promises objects have **.then()** method attached to them.
`
### Lets Create Our First Promise.

`
//Promise Constructor.
var promise1 = new Promise(function(resolve,reject)){
     //Write your promise code here.
     //
     resolve(somevalue); //fulfilled
     //or
     reject("error");   //rejected
)};

promise1.then(function(value){
    console.log(value);
})

`
Promise has one of these states:

* **pending**: initial state,neither fulfilled nor rejected.
* **fulfilled**: meaning that the operation completed successfully.
* **rejected**: meaning that the operation failed.

![Explanation](https://mdn.mozillademos.org/files/15911/promises.png)
