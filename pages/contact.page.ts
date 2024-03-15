import { Page,Locator } from "@playwright/test";
class Contactpage {
    private page: Page
    nameInput: Locator;
    emailInput: Locator;
    phoneInput: Locator;
    messageInput: Locator;
    SubmitBtn: Locator;
    SuccessAlertTest: Locator;
    
    


    constructor(page : Page){
        this.page=page;
        this.nameInput=page.locator('.contact-name input')
        this.emailInput=page.locator('.contact-email input')
        this.phoneInput=page.locator('.contact-phone input')
        this.messageInput=page.locator('.contact-message textarea')
        this.SubmitBtn=page.locator('button[type=submit]')
        this.SuccessAlertTest=page.locator('div[role="alert"]')

   
}
async navigate(){
    await this.page.goto('https://practice.sdetunicorns.com/contact/')

}

async SubmitForm(name:String,email:String,phone:String,message:String){
        await this.nameInput.fill(name)
        await this.emailInput.fill(email)
        await this.phoneInput.fill(phone)
        await this.messageInput.fill(message)
        await this.SubmitBtn.click();
}

}

export default Contactpage