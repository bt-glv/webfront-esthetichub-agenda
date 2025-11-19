import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLanding } from './landing';

describe('Landing', () => {
  let component: PageLanding;
  let fixture: ComponentFixture<PageLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
