import { Component } from '@angular/core';
import { Router } from '@angular/router';
import SlangRetailAssistant from "@slanglabs/slang-retail-assistant";

@Component({
  selector: 'app-conva-search',
  templateUrl: './slang-conva-search.component.html',
  styleUrls: ['./slang-conva-search.component.scss']
})
export class ConvaSearchComponent {
  constructor(private route: Router) {
    SlangRetailAssistant.init({
      assistantID: "fa553e613db546ed8759e03ffa40de28",
      apiKey: "e10275f34d5848259f06a8bc89e78eff",
      requestedLocales: ["en-IN", "hi-IN"],
      environment: "prod"
    }).then(() => {
      SlangRetailAssistant.getUI().setBrandColor("#1F7BC0");
      SlangRetailAssistant.getUI().showTrigger();
      SlangRetailAssistant.setOnSearchListener({
        onSearch(searchInfo, searchUserJourney) {
            const searchString = searchInfo.item.description;
            route.navigate(['/search', searchString]);
        }
      })
    });
  }
}
