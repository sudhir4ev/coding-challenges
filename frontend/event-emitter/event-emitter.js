// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export has the same interface.

export default class EventEmitter {
  listeners = Object.create(null);

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  on(eventName, listener) {
    this.listeners[eventName] = this.listeners[eventName] || {
      handlers: [],
    };
    this.listeners[eventName].handlers.push(listener);
    return this;
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  off(eventName, listener) {
    const eventListeners = this.listeners[eventName];
    if (!eventListeners || eventListeners.handlers.length == 0) return this;

    let { handlers } = eventListeners;
    const index = handlers.indexOf(listener);

    if (index >= 0) {
      const newHandlers = [
        ...handlers.slice(0, index),
        ...handlers.slice(index + 1),
      ];
      eventListeners.handlers = newHandlers;
    }

    if (eventListeners.handlers.length == 0) {
      delete this.listeners[eventName];
    }

    return this;
  }

  /**
   * @param {string} eventName
   * @param  {...any} args
   * @returns {boolean}
   */
  emit(eventName, ...args) {
    const eventListeners = this.listeners[eventName];
    if (!eventListeners || eventListeners.handlers.length == 0) return false;

    const { handlers } = eventListeners;
    handlers.forEach((listener) => {
      listener.apply(this, args);
    });
    return true;
  }
}
