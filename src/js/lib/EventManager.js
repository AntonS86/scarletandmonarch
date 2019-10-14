'use strict';

export default class EventManager {
    /**
     *
     * @type {{Object}}
     */
    listeners = {};

    /**
     *
     * @param eventType {string}
     * @param listener {Object <EventManager>}
     */
    subscribe(eventType, listener) {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(listener);
        return;
    }

    /**
     *
     * @param eventType {string}
     * @param listener {Object <EventManager>}
     */
    unsubscribe(eventType, listener) {
        if (!this.listeners[eventType]) {
            throw new Error('No event with this name: ' + eventType);
        }
        this.listeners[eventType] = this.listeners[eventType].filter((elem) => elem !== listener);
    }

    /**
     *
     * @param eventType {string}
     * @param data {*}
     */
    notify(eventType, data) {
        if (!this.listeners[eventType]) {
            return;
        }
        this.listeners[eventType].forEach((listener) => listener.update(data));
    }
}