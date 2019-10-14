'use strict';
/**
 *
 *
 * @abstract
 */
export default class DataSaver {
    constructor() {
        if (this.constructor === DataSaver) {
            throw new Error("Can't instantiate abstract class!");
        }
    }

    /**
     * @abstract
     * @param key {string}
     * @param value {*}
     */

    save(key, value) {
        throw new Error("Abstract method!");
    }

    /**
     *
     * @param key {string}
     * @return {*}
     */
    extract(key) {
        throw new Error("Abstract method!");
    }
}