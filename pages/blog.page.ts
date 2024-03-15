import { Page,Locator } from "@playwright/test";

class Blogpage {
    private page: Page
    recentPostLink: Locator;
    


    constructor(page : Page){
        this.page=page;
        this.recentPostLink= page.locator('#recent-posts-3 ul li')

   
}
async navigate(){
    await this.page.goto('https://practice.sdetunicorns.com/blog/')

}

}

export default Blogpage