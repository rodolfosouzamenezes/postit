import { Injectable } from "@angular/core";
import { AlertController, ToastController } from "@ionic/angular";

@Injectable({
    providedIn: 'root',
})

export class HelperService {
    constructor (
        private readonly toastController: ToastController,
        private readonly alertControler: AlertController,
    ) { }

    public async showToast(message: string, duration: number = 2000): Promise<void> {
        const toast = await this.toastController.create({
        message: message,
        duration: duration
    })

    toast.present()
    }

    public async showAlert(header: string, text: string = 'OK'): Promise<void> {
        const alert = await this.alertControler.create({
            header: header,
            buttons: [
              {
                text: text,
                handler: () => { console.log('OK') ;
                }
              }
            ]
          })
      
          alert.present();
    }
}
