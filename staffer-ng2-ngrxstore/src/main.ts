import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { StafferNg2AppComponent, environment } from './app/';
import { provideStore } from '@ngrx/store';
import {
    reducer, initialState, ActionCreator,
    NeedsService,
    PeopleService,
    ProjectsService,
    SkillsService
} from './app/shared'
import { HTTP_PROVIDERS } from "@angular/http";

if (environment.production) {
    enableProdMode();
}

bootstrap(StafferNg2AppComponent, [
    provideStore(reducer, initialState),
    HTTP_PROVIDERS,
    ActionCreator, NeedsService, PeopleService, ProjectsService, SkillsService
]);
