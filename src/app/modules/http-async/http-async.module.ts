import { NgModule } from '@angular/core';
import { HttpAsyncService } from './service/http-async.service';

@NgModule({
  providers: [
    HttpAsyncService,
  ]
})
export class HttpAsyncModule {}
