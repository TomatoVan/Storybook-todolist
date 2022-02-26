
describe('addItemForm', () => {
	it('base example, visually looks correct', async () => {
		// APIs from jest-puppeteer
		await page.goto('http://localhost:9009/iframe.html?id=todolist-additemform--add-item-form-story&args=&viewMode=story');
		const image = await page.screenshot();

		// API from jest-image-snapshot
		expect(image).toMatchImageSnapshot();
	});
});

describe('EditableSpan', () => {
	it('base example, visually looks correct', async () => {
		// APIs from jest-puppeteer
		await page.goto('http://localhost:9009/iframe.html?id=todolist-editablespan--editable-span-with-start-value-story&args=&viewMode=story');
		const image = await page.screenshot();

		// API from jest-image-snapshot
		expect(image).toMatchImageSnapshot();
	});
});

describe('App', () => {
	it('base example, visually looks correct', async () => {
		// APIs from jest-puppeteer
		await page.goto('http://localhost:9009/iframe.html?id=todolist-app--app-story&args=&viewMode=story');
		const image = await page.screenshot();

		// API from jest-image-snapshot
		expect(image).toMatchImageSnapshot();
	});
});

describe('Task', () => {
	it('base example, visually looks correct', async () => {
		// APIs from jest-puppeteer
		await page.goto('http://localhost:9009/iframe.html?id=todolist-task--task-story&args=&viewMode=story');
		const image = await page.screenshot();

		// API from jest-image-snapshot
		expect(image).toMatchImageSnapshot();
	});
});





