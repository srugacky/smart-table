import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор

    const baseRules = ['skipEmptyTargetValues'];

    const searchRules = [
        rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)
    ];

    const compare = createComparison(baseRules, searchRules);

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data.filter(row => compare(row, state));
    };
}