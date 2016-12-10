import { TestBed, inject } from '@angular/core/testing';

import { GradeViewComponent } from './grade-view.component';

describe('a grade-view component', () => {
	let component: GradeViewComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				GradeViewComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([GradeViewComponent], (GradeViewComponent) => {
		component = GradeViewComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});