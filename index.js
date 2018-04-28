module.exports = getter => (...args) =>
  (args[0] === undefined
    ? new Proxy(getter, { get: (target, property) => target(property) })
    : getter(...args));
