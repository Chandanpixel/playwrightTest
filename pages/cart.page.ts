import { Page,Locator } from "@playwright/test";
import UploadComponent from './component/upload.component'

class Cartpage {
    page: Page
    


    constructor(page){
        this.page=page;
   
}

uploadComponent(){
    return new UploadComponent(this.page)
}

}

export default Cartpage
