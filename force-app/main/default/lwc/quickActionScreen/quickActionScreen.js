import { LightningElement } from 'lwc';

export default class QuickActionScreen extends LightningElement {
    myvalue=false;
    handleClick(event) {
        if (event.target.label==="Get Record Infos") {
            this.myvalue=true;
        }
        if (event.target.label==="Close") {
            this.myvalue=false;
        }
        
        
    }
    
}