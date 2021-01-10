import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AquariumCreateRequest } from 'src/app/features/aquarium/model/request/aquarium-create-request';
import { AquariumService } from 'src/app/features/aquarium/service/aquarium.service';
import { ImageService } from 'src/app/core/services/image/image.service';
import { UploadService } from 'src/app/core/services/upload/upload.service';

@Component({
  selector: 'app-aquarium-create',
  templateUrl: './aquarium-create.component.html',
  styleUrls: ['./aquarium-create.component.css']
})
export class AquariumCreateComponent implements OnInit {

  public aquariumForm: any;
  public imgSrc: SafeResourceUrl = '';
  public returnMsg: string | undefined;
  public error: boolean = false;
  public base64: string = '';
  @ViewChild('aquariumNameInput') public nameInput: ElementRef<HTMLInputElement> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private aquariumService: AquariumService,
    private imageService: ImageService,
    private router: Router,
    private loaderService: NgxSpinnerService,
    private uploadService: UploadService,
  ) {
      this.aquariumForm = this.formBuilder.group({
        name: ['', Validators.required],
        volume: ['', Validators.required],
        description: [''],
        imageUrl: [''],
      });
    }

  ngOnInit(): void {
    this.getImageSrc();
    this.nameInput?.nativeElement.focus();
  }

  public getImageSrc() {
    const src = this.base64;
    this.imgSrc = this.imageService.getImageSrcFromBase64(src);
  }

  public onSubmit(aquarium: AquariumCreateRequest) {
    this.loaderService.show();
    this.error = false;

    this.aquariumService.createAquarium(aquarium).subscribe({
      error: (error: HttpErrorResponse) => {
        this.error = true;
        console.error(error);
        this.aquariumForm.reset();
        this.returnMsg = 'Could not save aquarium. Please try again later.';
        this.loaderService.hide();
        this.nameInput?.nativeElement.focus();
      },
      next: () => {
        this.loaderService.hide();
        this.router.navigate(['aquarium']);
      },
    });
  }

  public fileChange(event: any) {
    this.uploadService.startUpload(event.target.files[0]);
    // this.handleFileSelect(event);

    // let fileList: FileList = event.target.files;
    // if(fileList.length > 0) {
    //   this.imageChanged = true;
    //   let file: File = fileList[0];
    //   this.formData.append('uploadFile', file, file.name);
    // }
  }

  // public handleFileSelect(event: any){
  //   let files = event.target.files;
  //   let file = files[0];

  //   if (files && file) {
  //       let reader = new FileReader();

  //       reader.onload = this._handleReaderLoaded.bind(this);

  //       reader.readAsBinaryString(file);
  //   }
  // }

  // public _handleReaderLoaded(readerEvt: any) {
  //   let binaryString = readerEvt.target.result;
  //   this.base64 = btoa(binaryString);
  //   this.getImageSrc();
  // }

}
