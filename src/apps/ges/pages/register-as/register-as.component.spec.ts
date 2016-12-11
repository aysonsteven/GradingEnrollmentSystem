import { TestBed, inject } from '@angular/core/testing';

import { RegisterAsComponent } from './register-as.component';

describe('a register-as component', () => {
	let component: RegisterAsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RegisterAsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RegisterAsComponent], (RegisterAsComponent) => {
		component = RegisterAsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});