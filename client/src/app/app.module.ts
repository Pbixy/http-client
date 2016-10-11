import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import {CollapseModule, DropdownModule} from "ng2-bootstrap/ng2-bootstrap";
import {Title} from "@angular/platform-browser";
import {SeoService} from "./seo.service";
import {CookieService} from "angular2-cookie/core";
import {Session} from '../session/session';
import {RecentService} from '../recent/recent';
import {Angulartics2} from 'angulartics2/src/core/angulartics2';
import {Angulartics2GoogleAnalytics} from 'angulartics2/src/providers/angulartics2-google-analytics';
import {NotFoundComponent} from "../not-found/not-found.component";
import {HomeComponent} from "../home/home.component";
import {NiceDatePipe} from "../pipe/nice-date.pipe";
import {ChartDirective} from "../directive/chart.directive";
import {UriEncodePipe} from "../pipe/uri-encode.pipe";
import {Tooltip} from "../directive/tooltip.directive.ts";
import {ToFixedPipe} from "../pipe/to-fixed.pipe";
import {PossessivePipe} from "../pipe/possessive.pipe";
import {LimitPipe} from "../pipe/limit.pipe";
import {GameLengthPipe} from "../pipe/game-length.pipe";
import {EloLeaguePipe} from "../pipe/elo-league.pipe";
import {DecodeStringPipe} from "../pipe/decode-string.pipe";
import {AdUnitComponent} from "../ad-unit/ad-unit.component";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routes';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/cache';

@NgModule({
    declarations: [
        AdUnitComponent,
        AppComponent,
        ChartDirective,
        EloLeaguePipe,
        GameLengthPipe,
        HomeComponent,
        LimitPipe,
        NiceDatePipe,
        NotFoundComponent,
        PossessivePipe,
        ToFixedPipe,
        Tooltip,
        UriEncodePipe,
    ],
    imports: [
        BrowserModule,
        CollapseModule,
        DropdownModule,
        FormsModule,
        HttpModule,
        InfiniteScrollModule,
        ReactiveFormsModule,
        routing,
    ],
    providers: [
        Angulartics2,
        Angulartics2GoogleAnalytics,
        CookieService,
        RecentService,
        SeoService,
        Session,
        Title,
    ],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {}
