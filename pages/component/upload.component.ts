import { Page,Locator } from "@playwright/test";

class Uploadcomponent {
    page: Page
    uploadInput: string;
    uploadButton: Locator;
    SuccessTxt: Locator;

    constructor(page){
        this.page=page;
        this.page=page;
        this.uploadInput='input#upfile_1'
        this.uploadButton=page.locator('#upload_1')
        this.SuccessTxt=page.locator('#wfu_messageblock_header_1_label_1')
    }

        
    }


export default Uploadcomponent