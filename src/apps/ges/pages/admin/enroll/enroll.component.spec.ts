import { TestBed, inject } from '@angular/core/testing';

import { EnrollComponent } from './enroll.component';

describe('a enroll component', () => {
	let component: EnrollComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				EnrollComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([EnrollComponent], (EnrollComponent) => {
		component = EnrollComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});