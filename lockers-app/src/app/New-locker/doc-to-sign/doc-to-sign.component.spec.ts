import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocToSignComponent } from './doc-to-sign.component';

describe('DocToSignComponent', () => {
  let component: DocToSignComponent;
  let fixture: ComponentFixture<DocToSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocToSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocToSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
