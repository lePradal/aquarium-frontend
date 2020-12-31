import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { urlConfig } from 'src/app/config/url.config';
import { Aquarium } from '../models/aquarium';
import { SignService } from './sign.service';
import { defaultSrc } from '../../../assets/imgs/aquarium/default';

@Injectable({
  providedIn: 'root'
})
export class AquariumService {

  private path: string = 'src/assets/imgs/aquariums';

  constructor(private http: HttpClient, private signService: SignService , private sanitizer: DomSanitizer) { }

  public getAquariumDetailed(id: string): Observable<Aquarium> {

    const httpOptions = this.signService.getHttpOptions();

    return this.http.get<Aquarium>(`${urlConfig.get_aquarium}/${id}`, httpOptions);
  }

  public getAquariumList() {

    const httpOptions = this.signService.getHttpOptions();

    return this.http.get(`${urlConfig.get_aquarium}`, httpOptions);
  }

  public saveImages(aquariumList: Aquarium[]) {
    aquariumList.forEach((aquarium) => {

    });
  }

  private getBase64Image() {

  }

  public getImageSrcFromBase64(base64: string) {
    const src = base64 || defaultSrc;
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpg;base64, ${src}`);
  }
}
