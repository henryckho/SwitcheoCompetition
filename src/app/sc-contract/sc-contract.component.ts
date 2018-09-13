import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { SwitcheoService } from '../switcheo.service';

import { DeploymentType } from '../enum/DeploymentType';
import { ContractVersion } from '../enum/ContractVersion';

@Component({
    selector: 'sc-contract',
    templateUrl: 'sc-contract.component.html'
})

export class SCContractComponent implements OnInit {
    @Output() loadLogin = new EventEmitter();   
    private deploymentType: string = "0";
    private contractVersion: string = "2";

    constructor(
        private switcheoService: SwitcheoService
    ) { }

    ngOnInit() {
        this.selectContract();
    }

    public selectContract() {
        let deploymentType: DeploymentType = parseInt(this.deploymentType);
        let contractVersion: ContractVersion = parseInt(this.contractVersion);
        this.switcheoService.selectContract(deploymentType, contractVersion)
            .subscribe(_ => this.loadLogin.emit());
    }
}