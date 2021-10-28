import {
  Component,
  AfterViewInit,
  ViewChild,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
  ElementRef
 } from '@angular/core';

@Component({
  selector: 'app-signature-modal',
  templateUrl: './signature-modal.component.html',
  styleUrls: ['./signature-modal.component.css']
})
export class SignatureModalComponent implements OnInit, AfterViewInit {

  @Output() close = new EventEmitter<any>()
  @Output() saveImage = new EventEmitter<any>()
  @Output() isSigned = new EventEmitter<any>()

  @ViewChild('signaturePad')
  canvas!: ElementRef;

  private context!: CanvasRenderingContext2D;
  isSigning = false;
  img: any;
  prevX: number = 0;
  prevY: number = 0;
  currX: number = 0;
  currY: number = 0;

  color = '#041E42';
  lineWidth = 1;



  ngOnInit(): void {

   }

  ngAfterViewInit(): void {

    this.context = this.canvas.nativeElement.getContext('2d');
    this.context.strokeStyle = this.color;
    this.context.lineWidth = this.lineWidth;

    // To avoid any scale issue while drawing
    this.canvas.nativeElement.height = this.canvas.nativeElement.clientHeight;
    this.canvas.nativeElement.width = this.canvas.nativeElement.clientWidth;


    const rect = this.canvas.nativeElement.getBoundingClientRect();

    this.canvas.nativeElement.addEventListener(
      'mousedown',
      (e: any) => {
        // I'm signing
        this.isSigning = true;

        // I store the coordinates of the first click on my canvas
        this.prevX = e.clientX - rect.left;
        this.prevY = e.clientY - rect.top;
        console.log(this.prevX, this.prevY, this.isSigning);
      }
    )

    this.canvas.nativeElement.addEventListener(
      'touchstart',
      (e: any) => {
        // I'm signing
        this.isSigning = true;

        // I store the coordinates of the first click on my canvas
        this.prevX = e.clientX - rect.left;
        this.prevY = e.clientY - rect.top;
        console.log(this.prevX, this.prevY, this.isSigning);
      }
    )

    this.canvas.nativeElement.addEventListener(
      'mousemove',
      (e: any) => {
        // If I'm signing
        console.log(this.isSigning);
        if (this.isSigning) {
          this.currX = e.clientX - rect.left;
          this.currY = e.clientY - rect.top;
          console.log(this.currX, this.currY);
          this.draw(this.prevX, this.prevY, this.currX, this.currY);
          this.prevX = this.currX;
          this.prevY = this.currY;
        }
      }
    )

    this.canvas.nativeElement.addEventListener(
      'touchmove',
      (e: any) => {
        // If I'm signing
        console.log(this.isSigning);
        if (this.isSigning) {
          this.currX = e.clientX - rect.left;
          this.currY = e.clientY - rect.top;
          console.log(this.currX, this.currY);
          this.draw(this.prevX, this.prevY, this.currX, this.currY);
          this.prevX = this.currX;
          this.prevY = this.currY;
        }
      }
    )

    this.canvas.nativeElement.addEventListener(
      'mouseup',
      () => {
        this.isSigning = false;
      }
    )

    this.canvas.nativeElement.addEventListener(
      'touchend',
      () => {
        this.isSigning = false;
      }
    )

    this.canvas.nativeElement.addEventListener(
      'mouseout',
      () => {
        this.isSigning = false;
      }
    )

    this.canvas.nativeElement.addEventListener(
      'touchleave',
      () => {
        this.isSigning = false;
      }
    )
  }



  draw(startX: number, startY: number, toX: number, toY: number) {
    this.context.beginPath();
    this.context.moveTo(startX, startY);
    this.context.lineTo(toX, toY);
    this.context.closePath();
    this.context.stroke();
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.context.beginPath();
  }

  save() {
    this.img = this.canvas.nativeElement.toDataURL("image/png");
    this.saveImage.emit(this.img);
    this.isSigned.emit(true);
    this.closeModal();
  }

  closeModal(): void {
    this.close.emit(false);
  }
}
