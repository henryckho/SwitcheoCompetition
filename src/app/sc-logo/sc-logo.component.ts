import { Component, Input } from '@angular/core';

import { config } from '../app.config';

@Component({
    selector: 'sc-logo',
    templateUrl: 'sc-logo.component.html'
})

export class SCLogoComponent {
    @Input() tokenName: string;
    private imgDir: string = config.IMG_DIR;
    
    public handleImgError(element) {
        element.target.src = config.EMPTY_IMG;
    }
}