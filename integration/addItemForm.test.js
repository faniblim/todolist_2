describe('AppWithRedux', () => {
    it('base example, visually looks correct', async () => {
        await page.goto('http://localhost:9009/iframe.html?id=appwithredux-component--base-example&viewMode=story');

        const image = await page.screenshot();

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
});











