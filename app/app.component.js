"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_texttospeech_1 = require("nativescript-texttospeech");
var AppComponent = (function () {
    function AppComponent(tts) {
        this.tts = tts;
        this.textToSay = "";
    }
    AppComponent.prototype.sayText = function () {
        if (!this.textToSay.trim())
            return false;
        this.ttsOptions = {
            text: this.textToSay,
            finishedCallback: function (data) {
                console.log(data);
                console.log("Speech finished");
            }
        };
        this.tts.speak(this.ttsOptions);
        this.tts.destroy();
    };
    AppComponent.prototype.clearText = function () {
        this.textToSay = "";
        return false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar class=\"action-bar\" title=\"Text-Reading App\"></ActionBar>\n    <!-- Your UI components go here -->\n    <DockLayout stretchLastChild=\"false\">\n    <StackLayout dock=\"top\" class=\"page\" marginRight=\"12\" marginLeft=\"12\">\n    <Label text=\"ENTER SOME TEXT:\" class=\"label\"></Label>\n      <TextView class=\"input input-border\" hint=\"Text\" [(ngModel)]=\"textToSay\"></TextView>\n      <Button class=\"btn btn-primary btn-rounded-sm\" (tap)=\"sayText()\" text=\"SPEAK!\"></Button>\n      <Button class=\"btn btn-clear btn-rounded-sm\" (tap)=\"clearText()\" text=\"Clear Text\"></Button>\n    </StackLayout>\n\n    <Label dock=\"bottom\" class=\"center\" marginTop=\"20\" text=\"This app was created by Brandon Williams\"></Label>\n    </DockLayout>\n  "
    }),
    __metadata("design:paramtypes", [nativescript_texttospeech_1.TNSTextToSpeech])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsdUVBQTBFO0FBbUIxRSxJQUFhLFlBQVk7SUFJdkIsc0JBQW9CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBSHhDLGNBQVMsR0FBVyxFQUFFLENBQUM7SUFLdkIsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDRSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRXhDLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3BCLGdCQUFnQixFQUFFLFVBQUMsSUFBSTtnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7U0FDRixDQUFBO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVILG1CQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSxZQUFZO0lBakJ4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGd4QkFhVDtLQUNGLENBQUM7cUNBS3lCLDJDQUFlO0dBSjdCLFlBQVksQ0E0QnhCO0FBNUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFROU1RleHRUb1NwZWVjaCwgU3BlYWtPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRleHR0b3NwZWVjaCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8QWN0aW9uQmFyIGNsYXNzPVwiYWN0aW9uLWJhclwiIHRpdGxlPVwiVGV4dC1SZWFkaW5nIEFwcFwiPjwvQWN0aW9uQmFyPlxuICAgIDwhLS0gWW91ciBVSSBjb21wb25lbnRzIGdvIGhlcmUgLS0+XG4gICAgPERvY2tMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cImZhbHNlXCI+XG4gICAgPFN0YWNrTGF5b3V0IGRvY2s9XCJ0b3BcIiBjbGFzcz1cInBhZ2VcIiBtYXJnaW5SaWdodD1cIjEyXCIgbWFyZ2luTGVmdD1cIjEyXCI+XG4gICAgPExhYmVsIHRleHQ9XCJFTlRFUiBTT01FIFRFWFQ6XCIgY2xhc3M9XCJsYWJlbFwiPjwvTGFiZWw+XG4gICAgICA8VGV4dFZpZXcgY2xhc3M9XCJpbnB1dCBpbnB1dC1ib3JkZXJcIiBoaW50PVwiVGV4dFwiIFsobmdNb2RlbCldPVwidGV4dFRvU2F5XCI+PC9UZXh0Vmlldz5cbiAgICAgIDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWQtc21cIiAodGFwKT1cInNheVRleHQoKVwiIHRleHQ9XCJTUEVBSyFcIj48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLWNsZWFyIGJ0bi1yb3VuZGVkLXNtXCIgKHRhcCk9XCJjbGVhclRleHQoKVwiIHRleHQ9XCJDbGVhciBUZXh0XCI+PC9CdXR0b24+XG4gICAgPC9TdGFja0xheW91dD5cblxuICAgIDxMYWJlbCBkb2NrPVwiYm90dG9tXCIgY2xhc3M9XCJjZW50ZXJcIiBtYXJnaW5Ub3A9XCIyMFwiIHRleHQ9XCJUaGlzIGFwcCB3YXMgY3JlYXRlZCBieSBCcmFuZG9uIFdpbGxpYW1zXCI+PC9MYWJlbD5cbiAgICA8L0RvY2tMYXlvdXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgdGV4dFRvU2F5OiBzdHJpbmcgPSBcIlwiO1xuICB0dHNPcHRpb25zOiBTcGVha09wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0dHM6IFROU1RleHRUb1NwZWVjaCl7XG5cbiAgfVxuXG4gIHNheVRleHQoKSB7XG4gICAgaWYoIXRoaXMudGV4dFRvU2F5LnRyaW0oKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy50dHNPcHRpb25zID0ge1xuICAgICAgdGV4dDogdGhpcy50ZXh0VG9TYXksXG4gICAgICBmaW5pc2hlZENhbGxiYWNrOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTcGVlY2ggZmluaXNoZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50dHMuc3BlYWsodGhpcy50dHNPcHRpb25zKTtcbiAgICB0aGlzLnR0cy5kZXN0cm95KCk7XG4gIH1cblxuICBjbGVhclRleHQoKXtcbiAgICB0aGlzLnRleHRUb1NheSA9IFwiXCI7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==