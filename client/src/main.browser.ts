import { bootstrap } from "@angular/platform-browser-dynamic";
import { Title } from "@angular/platform-browser";
import { HTTP_PROVIDERS } from "@angular/http";
import { AppComponent } from './app/app.component';
import { enableProdMode } from "@angular/core";
import { Session } from './session/session';
import { RecentService } from './recent/recent';
import { GuardianService } from './api/guardian.service';
import { BungieService } from "./api/bungie.service";
import { Angulartics2 } from 'angulartics2/index';
import { Angulartics2GoogleAnalytics } from 'angulartics2/src/providers/angulartics2-google-analytics';
import { SeoService } from "./app/seo.service";
import { appRouterProviders } from "./app/app.routes.ts";
import { Gettext } from "./gettext/gettext.service";
import { GettextStrings } from "./gettext/string.service";

// figure out switch to enable prod mode (ENV is provided via webpack.js)
if (ENV === 'prod') {
    enableProdMode();

    console.debug = () => {};
    console.log = () => {};
}

bootstrap(AppComponent, [
    ...HTTP_PROVIDERS,
    appRouterProviders,
    Angulartics2,
    Angulartics2GoogleAnalytics,
    GuardianService,
    BungieService,
    RecentService,
    SeoService,
    Session,
    Title,
    Gettext,
    GettextStrings
]).catch(err => console.error(err));