import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { HomeComponent } from './home/home.component';

import { RestApiService } from './rest-api.service';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
