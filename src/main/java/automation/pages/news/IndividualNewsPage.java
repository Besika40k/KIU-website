package automation.pages.news;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;

public class IndividualNewsPage {
    public Locator title;
    public Locator tag;
    public Locator date;
    public Locator description;
    public Locator latestNew;
    public Locator latestNewTitle;
    public Locator latestNewDate;


    public IndividualNewsPage(Page page){
        this.date = page.locator("div.text-gray-500");
        this.title = page.locator("h1.text-4xl");
        this.tag = page.locator("span.px-3");
        this.description = page.locator("div.text-lg p").first();
        this.latestNew = page.locator("a.gap-4").first();
        this.latestNewTitle = latestNew.locator("p.font-semibold").first();
        this.latestNewDate = latestNew.locator("p.text-sm").first();
    }
}
