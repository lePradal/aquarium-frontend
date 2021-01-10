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

    // The storage path
    const path = `/aquarium/aquariums/${Date.now()}_${file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file);

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        console.log(this.downloadURL);
      }),
    );
  }

  isActive(snapshot: any) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
