# Logger
Module wrapper for console.log

log level, time, file and function source, message

```
//Primitives
const sample = () => logger.info('hello!');
sample();

result: {"level":"INFO","time":"2021-5-22 2:14:47 PM","file":"/src/controller/test.js -> sample()","message":"hello"}


const sample = () => logger.info(12345678);
sample();

result: {"level":"INFO","time":"2021-5-22 2:14:47 PM","file":"/src/controller/test.js -> sample()","message":"12345678"}


//Objects
const sample = () => logger.info({name:'John',surname:'Connor',id:123456});
sample();

result: {"level":"INFO","time":"2021-5-22 2:14:47 PM","file":"/src/controller/test.js -> sample()","message":{"name":"John","surname:"Connor","id":"123456"}}
```


