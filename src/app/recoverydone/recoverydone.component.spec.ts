import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverydoneComponent } from './recoverydone.component';

describe('RecoverydoneComponent', () => {
  let component: RecoverydoneComponent;
  let fixture: ComponentFixture<RecoverydoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverydoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverydoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
