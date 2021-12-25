import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewUserInfoService } from '../../services/new-user/new-user-info.service';
import { DatePipe } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-doc-to-sign',
  templateUrl: './doc-to-sign.component.html',
  styleUrls: ['./doc-to-sign.component.css'],
  providers: [DatePipe]
})
export class DocToSignComponent implements OnInit {

  @ViewChild('sigImage')
  sigImage!: ElementRef;

  // @ViewChild('toPrint') toPrint: any;
  today: number = Date.now();

  constructor(private newUserInfoService: NewUserInfoService) { }

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

  docIsSigned(value: any) {
    this.isSigned = value;
  }

  public openPDF(): void {
    let data = document.getElementById('toPrint');
    this.generatePDF(data);
  }

  generatePDF(htmlContent: any) {
    html2canvas(htmlContent).then(canvas => {
      let fileName = this.lastName.concat(' ', this.firstName.concat(' ', this.personalNumber));
      let imgWidth = 210;
      let imgHeight = (canvas.height * imgWidth / canvas.width);
      const contentDataURL = canvas.toDataURL('image/png');
      let docToPrint = new jsPDF('p', 'mm', 'a4');
      var position = 10;
      docToPrint.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      docToPrint.save(fileName + '.pdf');
    });
  }

}
