import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PhonesFormComponent } from './phones-form.component';

describe('PhonesFormComponent', () => {
  let component: PhonesFormComponent;
  let fixture: ComponentFixture<PhonesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonesFormComponent],
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
    fixture = TestBed.createComponent(PhonesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
