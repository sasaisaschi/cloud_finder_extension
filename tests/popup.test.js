/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Load the HTML file into the JSDOM environment
const html = fs.readFileSync(path.resolve(__dirname, '../popup.html'), 'utf8');
document.body.innerHTML = html;

// Now, require the script to execute it in the JSDOM context
require('../popup.js');

describe('Cloud Finder Extension', () => {
    test('should create a list of 10 cloud providers', () => {
        const cloudList = document.getElementById('cloud-list');
        expect(cloudList.children.length).toBe(10);
    });

    test('each cloud provider should have a link and an icon', () => {
        const cloudItems = document.querySelectorAll('.cloud-item');
        cloudItems.forEach(item => {
            const link = item.href;
            const icon = item.querySelector('img');
            expect(link).not.toBe('');
            expect(icon).not.toBeNull();
        });
    });
});
