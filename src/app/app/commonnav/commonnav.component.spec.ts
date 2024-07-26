import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonnavComponent } from './commonnav.component';

describe('CommonnavComponent', () => {
  let component: CommonnavComponent;
  let fixture: ComponentFixture<CommonnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
