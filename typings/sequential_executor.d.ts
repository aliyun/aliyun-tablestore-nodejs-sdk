import { Domain } from 'domain';

/**
 * @!method on(eventName, callback)
 *   Registers an event listener callback for the event given by `eventName`.
 *   Parameters passed to the callback function depend on the individual event
 *   being triggered. See the event documentation for those parameters.
 *
 *   @param eventName [String] the event name to register the listener for
 *   @param callback [Function] the listener callback function
 *   @return [TableStore.SequentialExecutor] the same object for chaining
 */
declare class SequentialExecutor {
  domain: Domain;
  constructor();
  on(eventName: string, listener: () => void): this;
  onAsync(eventName: string, listener: () => void): this;
  removeListener(eventName: string, listener: () => void): this;
  removeAllListeners(eventName: string): this;
  /**
   * Adds or copies a set of listeners from another list of
   * listeners or SequentialExecutor object.
   * @param listeners
   *   a list of events and callbacks, or an event emitter object
   *   containing listeners to add to this emitter object.
   */
  addListeners(listeners: SequentialExecutor | { [key: string]: (() => void)[] }): this;
  /**
   * Registers an event with {on} and saves the callback handle function
   * as a property on the emitter object using a given `name`.
   *
   * @param name the property name to set on this object containing
   *   the callback function handle so that the listener can be removed in
   *   the future.
   */
  addNamedListener(name: string, eventName: string, callback: () => void): this;
  /**
   * Helper method to add a set of named listeners using
   * {addNamedListener}. The callback contains a parameter
   * with a handle to the `addNamedListener` method.
   *
   * @callback callback function(add)
   *   The callback function is called immediately in order to provide
   *   the `add` function to the block. This simplifies the addition of
   *   a large group of named listeners.
   *   @param add [Function] the {addNamedListener} function to call
   *     when registering listeners.
   * @example Adding a set of named listeners
   *   emitter.addNamedListeners(function(add) {
   *     add('DATA_CALLBACK', 'data', function() { ... });
   *     add('OTHER', 'otherEvent', function() { ... });
   *     add('LAST', 'lastEvent', function() { ... });
   *   });
   *
   *   // these properties are now set:
   *   emitter.DATA_CALLBACK;
   *   emitter.OTHER;
   *   emitter.LAST;
   */
  addNamedListeners(callback: (add: typeof this.addNamedListener) => void): void;
}

export default SequentialExecutor;
