import updateUniqueItems from '../10-update_uniq_items.js';
import groceriesList from '../9-groceries_list.js';

describe('updateUniqueItems', () => {
    test('updates the quantity to 100 for items with initial quantity of 1', () => {
        const map = groceriesList();
        updateUniqueItems(map);
        expect(map.get('Pasta')).toBe(100);
        expect(map.get('Rice')).toBe(100);
    });

    test('throws an error if the argument is not a map', () => {
        expect(() => updateUniqueItems({})).toThrow('Cannot process');
    });
});
