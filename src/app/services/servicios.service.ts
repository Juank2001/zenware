import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private url = "https://dummy.restapiexample.com/api/v1/"
  constructor(
    private http: HttpClient,
    private toastController: ToastController,) { }

  httpPost(path, data): Observable<any>{
    let datos = JSON.stringify(data)
    return this.http.post(this.url+path, datos)
  }

  httpGet(path): Observable<any>{
    return this.http.get(this.url+path)
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
