import { Component, EventEmitter, Output } from '@angular/core';

import { SwitcheoService } from '../switcheo.service';

import { DeploymentType } from '../enum/DeploymentType';
import { ContractVersion } from '../enum/ContractVersion';

@Component({
    selector: 'sc-contract',
    templateUrl: 'sc-contract.component.html'
})

export class SCContractComponent {
    @Output() loadLogin = new EventEmitter();   
    private deploymentType: string = null;
    private contractVersion: string = null;

    constructor(
        private switcheoService: SwitcheoService
    ) { }

    public selectContract() {
        let deploymentType: DeploymentType = parseInt(this.deploymentType);
        let contractVersion: ContractVersion = parseInt(this.contractVersion);
        this.switcheoService.selectContract(deploymentType, contractVersion)
            .subscribe(_ => this.loadLogin.emit());
    }
}