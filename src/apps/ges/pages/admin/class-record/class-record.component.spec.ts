import { TestBed, inject } from '@angular/core/testing';

import { ClassRecordComponent } from './class-record.component';

describe('a class-record component', () => {
	let component: ClassRecordComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ClassRecordComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ClassRecordComponent], (ClassRecordComponent) => {
		component = ClassRecordComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});