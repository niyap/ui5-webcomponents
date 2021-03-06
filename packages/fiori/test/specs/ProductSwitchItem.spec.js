const assert = require("chai").assert;
const PORT = require("./_port.js");

describe("ProductSwitchItem general interaction", () => {
	before(() => {
		browser.url(`http://localhost:${PORT}/test-resources/pages/ProductSwitchItem.html`);
	});

	it("tests rendering", () => {
		const productSwitchItem = browser.$("#productSwitchItem");

		assert.ok(productSwitchItem.shadow$(".ui5-product-switch-item-icon"), "Icon is rendered.");
		assert.ok(productSwitchItem.shadow$(".ui5-product-switch-item-title"), "Title is rendered.");
		assert.ok(productSwitchItem.shadow$(".ui5-product-switch-item-subtitle"), "SubTitle is rendered.");
	});
});