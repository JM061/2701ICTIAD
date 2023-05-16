import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDestinationModalPage } from './edit-destination-modal.page';

describe('EditDestinationModalPage', () => {
  let component: EditDestinationModalPage;
  let fixture: ComponentFixture<EditDestinationModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditDestinationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
