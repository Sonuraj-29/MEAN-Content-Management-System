import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionBlogsComponent } from './fashion-blogs.component';

describe('FashionBlogsComponent', () => {
  let component: FashionBlogsComponent;
  let fixture: ComponentFixture<FashionBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
