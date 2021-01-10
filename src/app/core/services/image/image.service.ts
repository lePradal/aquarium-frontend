import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { defaultSrc } from 'src/assets/imgs/aquarium/default';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  public getImageSrcFromBase64(base64: string) {
    const src = base64 || defaultSrc;
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpg;base64, ${src}`);
  }

  public getBase64Image() {

  }

  public handleFileSelect(event: any){
    let files = event.target.files;
    let file = files[0];

    if (files && file) {
        let reader = new FileReader();

        reader.onload = this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }

  public _handleReaderLoaded(readerEvt: any) {
    let binaryString = readerEvt.target.result;
    btoa(binaryString);
  }
}
