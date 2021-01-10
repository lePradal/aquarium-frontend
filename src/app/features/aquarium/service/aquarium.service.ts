import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlConfig } from 'src/app/config/url.config';
import { IAquarium } from '../model/aquarium';
import { AquariumCreateRequest } from '../model/request/aquarium-create-request';
import { AquariumUpdateRequest } from '../model/request/aquarium-update-request';
import { IAquariumResponse } from '../model/response/aquariums.response';
import { AuthService } from '../../../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AquariumService {

  private path: string = 'src/assets/imgs/aquariums';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    ) { }

  public getAquariumDetailed(id: string): Observable<IAquarium> {
    const httpOptions = this.authService.getHttpOptions();

    return this.http.get<IAquarium>(`${urlConfig.aquarium}/${id}`, httpOptions);
  }

  public getAquariumList(): Observable<IAquariumResponse>{
    const httpOptions = this.authService.getHttpOptions();

    return this.http.get<IAquariumResponse>(`${urlConfig.aquarium}`, httpOptions);
  }

  public createAquarium(aquarium: AquariumCreateRequest) {
    const httpOptions = this.authService.getHttpOptions();

    return this.http.post(`${urlConfig.aquarium}`, aquarium, httpOptions);
  }

  public updateAquarium(id: string, aquarium: AquariumUpdateRequest) {
    const httpOptions = this.authService.getHttpOptions();

    return this.http.put(`${urlConfig.aquarium}/${id}`, aquarium, httpOptions);
  }

  public deleteAquarium(id: string) {
    const httpOptions = this.authService.getHttpOptions();

    return this.http.delete(`${urlConfig.aquarium}/${id}`, httpOptions);
  }
}