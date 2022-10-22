import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBlogsComponent } from './tech-blogs.component';

describe('TechBlogsComponent', () => {
  let component: TechBlogsComponent;
  let fixture: ComponentFixture<TechBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
