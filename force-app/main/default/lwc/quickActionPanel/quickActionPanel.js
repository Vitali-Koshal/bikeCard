import { LightningElement, api } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';
export default class QuickActionPanel extends LightningElement {
    @api recordId;
    @api objectApiName;
    getRecordButton = false;

    handleClose() {        
        this.dispatchEvent(new CloseActionScreenEvent());
    }
    handleGetRecordInfo() {
        this.getRecordButton = true;
    }
}