import { Component } from "@angular/core";
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';

@Component({
  selector: "my-app",
  template: `
    <ActionBar class="action-bar" title="Text-Reading App"></ActionBar>
    <!-- Your UI components go here -->
    <DockLayout stretchLastChild="false">
    <StackLayout dock="top" class="page" marginRight="12" marginLeft="12">
    <Label text="ENTER SOME TEXT:" class="label"></Label>
      <TextView class="input input-border" hint="Text" [(ngModel)]="textToSay"></TextView>
      <Button class="btn btn-primary btn-rounded-sm" (tap)="sayText()" text="SPEAK!"></Button>
      <Button class="btn btn-clear btn-rounded-sm" (tap)="clearText()" text="Clear Text"></Button>
    </StackLayout>

    <Label dock="bottom" class="center" marginTop="20" text="This app was created by Brandon Williams"></Label>
    </DockLayout>
  `
})
export class AppComponent {
  textToSay: string = "";
  ttsOptions: SpeakOptions;

  constructor(private tts: TNSTextToSpeech){

  }

  sayText() {
    if(!this.textToSay.trim()) return false;

    this.ttsOptions = {
      text: this.textToSay,
      finishedCallback: (data) => {
        console.log(data);
        console.log("Speech finished");
      }
    }

    this.tts.speak(this.ttsOptions);
    this.tts.destroy();
  }

  clearText(){
    this.textToSay = "";
    return false;
  }

}
