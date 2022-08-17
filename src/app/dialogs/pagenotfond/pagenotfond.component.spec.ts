import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfondComponent } from './pagenotfond.component';

describe('PagenotfondComponent', () => {
  let component: PagenotfondComponent;
  let fixture: ComponentFixture<PagenotfondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotfondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenotfondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
