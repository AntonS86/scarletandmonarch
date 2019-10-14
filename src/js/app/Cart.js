'use strict';

import EventListener from "../lib/EventListener";

export default class Cart extends EventListener {
    nodeCart = null;

    /**
     *
     * @param nodeSelector {string}
     */
    constructor(nodeSelector) {
        super();
        this.nodeCart = this._findNode(nodeSelector);
    }

    /**
     *
     * @param data {Array}
     */
    update(data) {
        this.nodeCart.innerHTML = data.length;
    }

    /**
     *
     * @param selector {string}
     * @return {Object <Document.ELEMENT_NODE>}
     * @private
     */
    _findNode(selector) {
        const nodeCart = document.querySelector(selector);
        if (!nodeCart) {
            throw new Error('CartNode not find');
        }
        return nodeCart;
    }
}