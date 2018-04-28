<p align="center">
  <h3 align="center">get-destructor</h3>
  <p align="center">Create a getter that supports destructuring.<p>
  <p align="center">
    <a href="https://www.npmjs.com/package/get-destructor">
      <img src="https://img.shields.io/npm/v/get-destructor.svg" alt="npm version">
    </a>
    <a href="https://travis-ci.org/Moeriki/get-destructor">
      <img src="https://travis-ci.org/Moeriki/get-destructor.svg?branch=master" alt="Build Status"></img>
    </a>
    <a href="https://coveralls.io/github/Moeriki/get-destructor?branch=master">
      <img src="https://coveralls.io/repos/github/Moeriki/get-destructor/badge.svg?branch=master" alt="Coverage Status"></img>
    </a>
    <a href="https://david-dm.org/moeriki/get-destructor">
      <img src="https://david-dm.org/moeriki/get-destructor/status.svg" alt="dependencies Status"></img>
    </a>
  </p>
</p>

---

## Quick start

```
npm install --save get-destructor
```

```js
const beatles = {
  john: { name: 'John', age: 40 },
  paul: { name: 'Paul', age: 75 },
};

const getter = getDestructor((key) => beatles[key]);

getter('john'); // = { name: 'John', age: 40 }

const { john, paul } = getter();

// john = { name: 'John', age: 40 }
// paul = { name: 'Paul', age: 75 }
```

## API

### `getDestructor(getter:function) :function`

`getter` is called with all arguments or just the key in case of destructuring.
