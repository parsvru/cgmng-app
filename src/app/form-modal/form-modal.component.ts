import { Component, OnInit, EventEmitter, Input  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {

  myForm: FormGroup;

  constructor( 
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) {
      this.createForm();
     }

  ngOnInit() {
  }

   private createForm() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ''
    });
  }
  private submitForm() {
     this.activeModal.close(this.myForm.value);
  }
}
