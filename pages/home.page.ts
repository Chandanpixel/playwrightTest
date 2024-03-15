import { Page,Locator } from "@playwright/test";
class Homepage {
    page: Page
    TestLoginlink: Locator;
    HeadingText: Locator;
    FooterLInk: Locator;

    constructor(page){
        this.page=page;
        this.TestLoginlink=page.locator('[href*="test-login/"]')
        this.HeadingText=page.locator('text=Test login')
        this.FooterLInk=page.locator('/html/body/div[4]/div[2]/div[1]/div[1]/ul')

    }
 async navigate(){
    await this.page.goto('https://practicetestautomation.com/')

}

async navigatePracticePage(){
    await this.page.goto('https://practicetestautomation.com/practice/')

}
}

export default Homepage
