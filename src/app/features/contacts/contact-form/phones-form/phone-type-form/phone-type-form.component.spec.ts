import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PhoneTypeFormComponent } from './phone-type-form.component';

describe('PhoneTypeFormComponent', () => {
  let component: PhoneTypeFormComponent;
  let fixture: ComponentFixture<PhoneTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneTypeFormComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UntypedFormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
