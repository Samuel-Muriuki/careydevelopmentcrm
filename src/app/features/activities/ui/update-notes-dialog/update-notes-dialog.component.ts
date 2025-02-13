import { Component, Inject, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'update-notes-dialog',
  templateUrl: 'update-notes-dialog.html',
})
export class UpdateNotesDialog implements OnInit {

  notesFormGroup: UntypedFormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateNotesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string, private fb: UntypedFormBuilder) { }

  ngOnInit() {
    this.notesFormGroup = this.fb.group({
      'notes': [this.data],
    });
  }

  cancel(): void {
    this.dialogRef.close(null);
  }

  save(): void {
    let notes: string = this.notesFormGroup.controls['notes'].value;
    this.dialogRef.close(notes);
  }

}
