import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { defaultSrc } from 'src/assets/imgs/aquarium/default';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public task?: AngularFireUploadTask;
  public snapshot?: Observable<any>;
  public downloadURL?: string;

  constructor(
    
  ) { }

  
}
