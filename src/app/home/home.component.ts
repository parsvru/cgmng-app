import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './../form-modal/form-modal.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    records: any = [];
    recordsf: any = [];
    searchText: '';
    itemdataIndex: any = [];
    itemAddYN: boolean;
    itemRemovedYN: boolean;
    checkboxI: boolean;
    checkboxO: boolean;

    @ViewChildren("checkboxesI") checkboxesI: QueryList<ElementRef>;
    @ViewChildren("checkboxesO") checkboxesO: QueryList<ElementRef>;

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
      this.itemAddYN = true;
      this.itemRemovedYN = true;
    }

  addRecords() {
    const modalRef = this.modalService.open(FormModalComponent);
    modalRef.result.then((result) => {
        this.records.push(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  checkbox(i, e, indicator) {
    let status = e.target.checked;
    if(status == true) {
           if (indicator === 'add') {
             this.records[i].selected = true;
              this.itemAddYN = false;
              this.itemRemovedYN = true;
            } else {
              this.recordsf[i].selected = true;
              this.itemAddYN = true;
              this.itemRemovedYN = false;
            }
        this.itemdataIndex.push(i);
  } else {
    if (indicator === 'add') {
      this.records[i].selected = false;
      
     } else {
       this.recordsf[i].selected = false;
      
     }
      this.itemdataIndex.splice(this.itemdataIndex.indexOf(i), 1);
        if(this.itemdataIndex.length === 0) 
        {
          this.itemAddYN = true;
          this.itemRemovedYN = true;
        }
    }
  }

  add() {
    let newdataselectdf = [];

    this.records.forEach((ele) => {
      if(!ele.selected || ele.selected == false) {
        newdataselectdf.push(ele);
      } else  {
        this.recordsf.push(ele);
      }
   });                             
    
   this.records = newdataselectdf;
    this.checkboxesI.forEach((element) => {
      element.nativeElement.checked = false;
    });
    this.itemdataIndex = [];
    this.itemAddYN = true;
  }

  remove() {
    let newdataselectd = [];

    this.recordsf.forEach((ele) => {
      if(!ele.selected || ele.selected == false) {
        newdataselectd.push(ele);
      } else  {
        this.records.push(ele);
      }
   });                             
    
   this.recordsf = newdataselectd;
    this.checkboxesO.forEach((element) => {
      element.nativeElement.checked = false;
    });
    this.itemdataIndex = [];
    this.itemRemovedYN = true;
  }

}
