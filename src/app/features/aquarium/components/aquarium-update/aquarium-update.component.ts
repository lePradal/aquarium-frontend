import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { imgPlaceholder } from 'src/app/config/const';
import { AquariumService } from 'src/app/features/aquarium/service/aquarium.service';
import { IAquarium } from '../../model/aquarium';
import { AquariumUpdateRequest } from '../../model/request/aquarium-update-request';

@Component({
  selector: 'app-aquarium-update',
  templateUrl: './aquarium-update.component.html',
  styleUrls: ['./aquarium-update.component.css']
})
export class AquariumUpdateComponent implements OnInit {

  public aquariumForm: any;
  public aquarium: IAquarium;
  public imgSrc: any = imgPlaceholder;
  public imgUrl: any = imgPlaceholder;
  public returnMsg: string | undefined;
  public error: boolean = false;
  public id: string;
  @ViewChild('aquariumNameInput') public nameInput: ElementRef<HTMLInputElement> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private aquariumService: AquariumService,
    private router: Router,
    private loaderService: NgxSpinnerService,
    private storage: AngularFireStorage,
  ) {
      this.aquarium = {
        imageUrl: imgPlaceholder,
      };

      this.aquariumForm = this.formBuilder.group({
        name: ['', Validators.required],
        volume: ['', Validators.required],
        description: [''],
        imageUrl: [''],
        controlActive: [false],
        tempControlActive: [false],
        setPointTemp: ['', Validators.required],
        phMonitActive: [false],
        pH: ['', Validators.required],
      });

      this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    }

  ngOnInit(): void {
    this.nameInput?.nativeElement.focus();

    this.loaderService.show();

    this.aquariumService.getAquariumDetailed(this.id).subscribe({
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.loaderService.hide();
        this.router.navigate(['aquarium']);
      },
      next: (response) => {
        this.aquarium = response;

        this.imgSrc = this.aquarium.imageUrl;    
        this.imgUrl = this.aquarium.imageUrl;    
        
        this.aquariumForm = this.formBuilder.group({
          name: [this.aquarium.name, Validators.required],
          volume: [this.aquarium.volume, Validators.required],
          description: [this.aquarium.description],
          imageUrl: [this.aquarium.imageUrl],
          controlActive: [this.aquarium.controlActive],
          tempControlActive: [this.aquarium.tempControlActive],
          setPointTemp: [this.aquarium.setPointTemp, Validators.required],
          phMonitActive: [this.aquarium.phMonitActive],
          pH: [this.aquarium.pH, Validators.required],
        });

        console.log(this.aquariumForm.get('imageUrl').value);

        this.loaderService.hide();
      }
    });

    console.log(this.aquariumForm.get('imageUrl').value);

  }

  public onSubmit(aquarium: AquariumUpdateRequest) {
    this.loaderService.show();
    this.error = false;
    aquarium.imageUrl = this.imgUrl;

    this.aquariumService.updateAquarium(this.id, aquarium).subscribe({
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
