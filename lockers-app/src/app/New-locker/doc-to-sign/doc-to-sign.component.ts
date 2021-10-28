import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewUserInfoService } from '../../services/new-user/new-user-info.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-doc-to-sign',
  templateUrl: './doc-to-sign.component.html',
  styleUrls: ['./doc-to-sign.component.css'],
  providers: [DatePipe]
})
export class DocToSignComponent implements OnInit {

  @ViewChild('sigImage')
  sigImage!: ElementRef;

  today: number = Date.now();

  constructor(private newUserInfoService: NewUserInfoService,){ }

  public popModal: boolean = false;

  ngOnInit(): void {

    }

  lastName: string = this.newUserInfoService.getNewUserLastName();
  firstName: string = this.newUserInfoService.getNewUserFirstName();
  personalNumber: string = this.newUserInfoService.getNewUserPersonalNumber();
  company: string = this.newUserInfoService.getNewUserCompany();

  public isSigned = false;
  public sigButtonVisible = true;
  private img: any;

  showModal() {
    this.popModal = true;
  }

  closeModal(value: boolean) {
    this.popModal = value;
  }

  importSignature(value: any) {
    this.img = value;
    this.sigImage.nativeElement.src = this.img;
  }

  docIsSigned(value: any){
    this.isSigned = value;
  }

}
