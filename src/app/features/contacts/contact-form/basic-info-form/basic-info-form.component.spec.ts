import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BasicInfoFormComponent } from './basic-info-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('BasicInfoFormComponent', () => {
  let component: BasicInfoFormComponent;
  let fixture: ComponentFixture<BasicInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoFormComponent],
      imports: [
        HttpClientTestingModule,
        MatAutocompleteModule
      ],
      providers: [
        UntypedFormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
