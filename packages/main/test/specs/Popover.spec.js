const assert = require('assert');

describe("Popover general interaction", () => {
	browser.url("http://localhost:8080/test-resources/pages/Popover.html");

	it("tests popover toggling", () => {
		const btnOpenPopover = $("#btn");
		const field = $("#field");

		btnOpenPopover.click();

		const popover = browser.$("ui5-popover");
		assert.ok(popover.isDisplayedInViewport(), "Popover is opened.");

		field.click();
		assert.ok(!popover.isDisplayedInViewport(), "Popover is closed.");
	});

	it("tests clicking inside the popover does not close it", () => {
		const btnOpenPopover = $("#btn");
		const btnInPopover = $("#popbtn");

		btnOpenPopover.click();

		const popover = browser.$("ui5-popover");
		assert.ok(popover.isDisplayedInViewport(), "Popover is opened.");

		btnInPopover.click();
		assert.ok(popover.isDisplayedInViewport(), "Popover remains opened.");
	});
});
