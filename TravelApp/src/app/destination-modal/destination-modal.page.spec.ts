import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinationModalPage } from './destination-modal.page';

describe('DestinationModalPage', () => {
  let component: DestinationModalPage;
  let fixture: ComponentFixture<DestinationModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DestinationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
