import { LightningElement } from 'lwc';

export default class QuickActionScreen extends LightningElement {
    clickedInfoButtonLabel;

    handleInfoButton(evt) {
        this.c-record-detail.clickedInfoButtonLabel=true;
    }
}