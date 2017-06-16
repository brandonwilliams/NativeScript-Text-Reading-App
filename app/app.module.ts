import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";

// User-Added Modules
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// PLUGINS
import { TNSTextToSpeech } from 'nativescript-texttospeech';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [TNSTextToSpeech]
})
export class AppModule {}
