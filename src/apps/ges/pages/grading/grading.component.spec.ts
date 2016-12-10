import { TestBed, inject } from '@angular/core/testing';

import { GradingComponent } from './grading.component';

describe('a grading component', () => {
	let component: GradingComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				GradingComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([GradingComponent], (GradingComponent) => {
		component = GradingComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});