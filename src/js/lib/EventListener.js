'use strict';

/**
 * @abstract
 */
export default class EventListener {
    constructor() {
        if (this.constructor === EventListener) {
            throw new Error("Can't instantiate abstract class!");
        }
    }

    /**
     * @param {*}
     * @param data
     */
    update(data) {
        throw new Error("Abstract method!");
    }
}