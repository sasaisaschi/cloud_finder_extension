// tests/popup.test.js
/**
 * @jest-environment jsdom
 */

const { renderCloudList, clouds } = require('../src/popup.js');

describe('Cloud Finder Extension', () => {
    beforeEach(() => {
        // Sauberes DOM für jeden Test
        document.body.innerHTML = `<div id="cloud-list"></div>`;
    });

    test('should create a list of 10 cloud providers', () => {
        renderCloudList();
        const cloudList = document.getElementById('cloud-list');
        expect(cloudList.children.length).toBe(10);
    });

    test('each cloud provider should have a link and an icon', () => {
        renderCloudList();
        const items = Array.from(document.querySelectorAll('.cloud-item'));
        expect(items.length).toBe(10);
        items.forEach((item, i) => {
            // Link-Element
            expect(item.tagName).toBe('A');
            expect(item.href).toContain(clouds[i].url);
            // Icon-Img
            const img = item.querySelector('img');
            expect(img).toBeTruthy();
            expect(img.src).toContain(clouds[i].icon);
        });
    });
});
