'use strict';

import EventManager from "./EventManager";

export default class State {
    events = null;
    constructor() {
        if (this.constructor === State) {
            throw new Error("Can't instantiate abstract class!");
        }
        this.events = new EventManager();
    }

    /**
     * @abstract
     */

    add() {
        throw new Error("Abstract method!");
    }

    /**
     * @abstract
     */

    remove() {
        throw new Error("Abstract method!");
    }

    /**
     * @abstract
     */

    getAll() {
        throw new Error("Abstract method!");
    }
}