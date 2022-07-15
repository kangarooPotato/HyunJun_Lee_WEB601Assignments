import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedContentComponent } from './detailed-content.component';

describe('DetailedContentComponent', () => {
  let component: DetailedContentComponent;
  let fixture: ComponentFixture<DetailedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
