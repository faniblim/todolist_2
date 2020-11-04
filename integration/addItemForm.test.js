describe('AppWithRedux', () => {
    it('base example, visually looks correct', async () => {
        await page.goto('http://localhost:9009/iframe.html?id=appwithredux-component--base-example&viewMode=story');

        const image = await page.screenshot();

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
});







// describe('addItemForm', () => {
//     it('base example, visually looks correct', async () => {
//         // APIs from jest-puppeteer
//         // await page.goto('http://localhost:6006/iframe.html?id=additemform-component--add-item-form-base-example');
//         await page.goto('http://localhost:9009/iframe.html?id=additemform-component--add-item-form-base-example');
//         const image = await page.screenshot();
//
//         // API from jest-image-snapshot
//         expect(image).toMatchImageSnapshot();
//     });
// });



