import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvaSearchComponent } from './slang-conva-search.component';

describe('ConvaSearchComponent', () => {
  let component: ConvaSearchComponent;
  let fixture: ComponentFixture<ConvaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvaSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
