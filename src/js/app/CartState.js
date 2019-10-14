'use strict';

import State from "../lib/State";

export default class CartState extends State {
    /**
     *
     * @type {Array}
     */
    state = [];

    /**
     * @constructor
     * @param dataSaver {Object <DataSaver>}
     */
    constructor(dataSaver) {
        super();
        this.dataSaver = dataSaver;
    }


    /**
     *
     * @param data {Object}
     */
    add(data) {
        this.state.push(data);
        this.dataSaver.save('cart', this.state);
        this.events.notify('update', this.state);
    }

    /**
     * @param id {string}
     */
    remove(id) {
        this.state = this.state.filter((elem) => elem.id !== id);
        this.dataSaver.save('cart', this.state);
        this.events.notify('update', this.state);
    }

    /**
     *
     * @return {Array}
     */
    getAll() {
        return this.state;
    }

    /**
     * initial
     */
    init() {
        this.state = this.dataSaver.extract('cart') || [];
        this.events.notify('update', this.state);
    }
}