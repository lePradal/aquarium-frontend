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
    private storage: AngularFireStorage,
  ) { }

  public startUpload(file: File) {    

    const path = `/aquarium/aquariums/${Date.now()}_${file.name}`;
    const ref = this.storage.ref(path);

    // The main task
    return this.storage.upload(path, file).snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe((url) => {
          console.log(url);
        })
      })
    ).subscribe((res) => {
      console.log(res);
    });
  }

  isActive(snapshot: any) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
