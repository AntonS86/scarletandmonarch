'use strict';

import DataSaver from "../lib/DataSaver";


export default class LocalStorageDataSaver extends DataSaver{

    /**
     *
     * @param name {string}
     * @param data {Array}
     */
    save(name, data) {
        const jsonData = JSON.stringify(data);
        localStorage.setItem(name, jsonData);
    }

    /**
     *
     * @param name {string}
     * @return {null|Array}
     */
    extract(name) {
        const jsonData = localStorage.getItem(name);
        if (!jsonData) return null;
        return JSON.parse(jsonData);
    }
}