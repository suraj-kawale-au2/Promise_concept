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



