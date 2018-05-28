import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DEBUG_INFO_ENABLED} from './app.constants';
import {LocalGroupsComponent} from './local-groups/local-groups.component';
import {MissionStatementComponent} from './mission-statement/mission-statement.component';
import {CurrentEverythingComponent} from './current-everything/current-everything.component';
import {JourFixesComponent} from './jour-fixes/jour-fixes.component';
import {UsageComponent} from './usage/usage.component';
import {ImprintComponent} from './imprint/imprint.component';

const LAYOUT_ROUTES = [
    { path: '', component: CurrentEverythingComponent},
    { path: 'current', component: CurrentEverythingComponent},
    { path: 'gruppen', component: LocalGroupsComponent},
    { path: 'orga', component: JourFixesComponent},
    { path: 'use', component: UsageComponent},
    { path: 'mission', component: MissionStatementComponent},
    { path: 'impressum', component: ImprintComponent}
    // navbarRoute,
    // ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true , enableTracing: DEBUG_INFO_ENABLED })
    ],
    exports: [
        RouterModule
    ]
})
export class IthubbsAppRoutingModule {}
