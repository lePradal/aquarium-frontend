import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { imgPlaceholder } from 'src/app/config/const';
import { AquariumCreateRequest } from 'src/app/features/aquarium/model/request/aquarium-create-request';
import { AquariumService } from 'src/app/features/aquarium/service/aquarium.service';

@Component({
  selector: 'app-aquarium-create',
  templateUrl: './aquarium-create.component.html',
  styleUrls: ['./aquarium-create.component.css']
})
export class AquariumCreateComponent implements OnInit {

  public aquariumForm: any;
  public imgSrc: any = imgPlaceholder;
  public imgUrl: string = imgPlaceholder;
  public returnMsg: string | undefined;
  public error: boolean = false;
  @ViewChild('aquariumNameInput') public nameInput: ElementRef<HTMLInputElement> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private aquariumService: AquariumService,
    private router: Router,
    private loaderService: NgxSpinnerService,
    private storage: AngularFireStorage,
  ) {
      this.aquariumForm = this.formBuilder.group({
        name: ['', Validators.required],
        volume: ['', Validators.required],
        description: [''],
        imageUrl: [''],
      });
    }

  ngOnInit(): void {
    this.nameInput?.nativeElement.focus();
  }


  public onSubmit(aquarium: AquariumCreateRequest) {
    this.loaderService.show();
    this.error = false;
    aquarium.imageUrl = this.imgUrl;

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

  public fileChange(event: any){
    const files = event.target.files;
    const file = files[0];
    
    if (files && file) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(file);
      
      this.startUpload(file);
    } else {
      this.imgSrc = imgPlaceholder;
    }
  }

  public startUpload(file: File) {
    this.loaderService.show();

    const path = `/aquarium/aquariums/${Date.now()}_${file.name}`;
    const ref = this.storage.ref(path);

    return this.storage.upload(path, file).snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe({
          error: (error) => {
            this.loaderService.hide();
          },
          next: (url) => {
            this.imgUrl = url;
          }
        })
      })
    ).subscribe({
      error: (error) => {
        this.loaderService.hide();
      },
      next: (url) => {
        this.loaderService.hide();
      }
    });
  }
}
