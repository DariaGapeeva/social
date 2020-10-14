import React from 'react';
import { create, act } from 'react-test-renderer';
import ProfileStatus, { deactivateEditMode } from './ProfileStatus';

describe("ProfileStatus component", () => {
	test("after creation component should be have span", () => {
		const component = create(<ProfileStatus status="My name is Test" />);
		const instance = component.root;
		const span = instance.findByType("span");
		expect(span).not.toBeNull();
	});
	test("after creation component should not be have input", () => {
		const component = create(<ProfileStatus status="My name is Test" />);
		const instance = component.root;

		expect(() => {
			let input = instance.findByType("input");
		}).toThrow();
	});
	test("text in span should be from props.status", () => {
		const component = create(<ProfileStatus status="My name is Test" />);
		const instance = component.root;
		const span = instance.findByType("span");
		expect(span.props.children).toBe("My name is Test");
	});
	test("input should be displayed in editmode instead span ", () => {
		const component = create(<ProfileStatus status="My name is Test" />);
		const instance = component.root;
		let span = instance.findByType("span");
		act(() => span.props.onDoubleClick());
		let input = instance.findByType("input");
		expect(input.props.value).toBe("My name is Test");
	});
	// test("callback shoukd be called ", () => {
	// 	const mockCallback = jest.fn();
	// 	const component = create(<ProfileStatus status="My name is Test" updateUserStatus={mockCallback} />);

	// 	// act(() => deactivateEditMode());
	// 	deactivateEditMode();
	// 	expect(mockCallback.mock.calls).toHaveBeenCalled(1);
	// });



	// test("status from props should be in the state", () => {
	// 	const component = create(<ProfileStatus status="My name is Test" />);
	// 	const instance = component.root;


	// 	expect(instance.status).toBe("My name is Test");
	// });






});
