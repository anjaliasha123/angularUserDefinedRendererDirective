import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HighlighterDirective } from "./highlighter.directive";
import { BetterHighlightDirective } from "./better-highlight.directive";

@NgModule({
  declarations: [AppComponent, HighlighterDirective, BetterHighlightDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
