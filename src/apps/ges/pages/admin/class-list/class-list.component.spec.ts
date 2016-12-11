import { TestBed, inject } from '@angular/core/testing';

import { ClassListComponent } from './class-list.component';

describe('a class-list component', () => {
	let component: ClassListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ClassListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ClassListComponent], (ClassListComponent) => {
		component = ClassListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});