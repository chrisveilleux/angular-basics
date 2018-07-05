/**
 * A collection of modules from the Material UI library that are used in this application.
 *
 * This abstraction layer exists to simplify the app.module.ts due to the plethora
 * of UI components that tend to exist in a GUI.
 */
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

/**
 * All Material UI modules used in this app are imported into this NgModule and exported
 * so that they can be imported in app.module.ts
 */
@NgModule(
    {
        imports: [
            MatButtonModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatIconModule,
            MatMenuModule
        ],
        exports: [
            MatButtonModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatIconModule,
            MatMenuModule
        ]
    }
)

export class MaterialModule { }
