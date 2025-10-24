package automation.pages.news;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;

public class NewsPage {
    public Locator pageInfo;
    public Locator nextButton;
    public Locator activePage;
    public Locator firstNews;
    public Locator firstNewsDate;
    public Locator firstNewsTitle;
    public Locator firstNewsTag;
    public Locator firstNewsDescription;
    public Locator firstNewsLink;
    public NewsPage(Page page){
        pageInfo = page.locator("div.text-sm.text-muted-foreground");
        nextButton = page.locator("a[aria-label='Go to next page']");
        activePage = page.locator("a[data-active='true']");
        firstNews = page.locator("div[data-slot='card'].rounded-xl").first();
        firstNewsDate = firstNews.locator("span.text-muted-foreground").first();
        firstNewsTitle = firstNews.locator("h3.text-lg").first();
        firstNewsDescription = firstNews.locator("p.text-sm").first();
        firstNewsTag = firstNews.locator("span[data-slot='badge']").first();
        firstNewsLink = firstNews.locator("a").first();
    }
}
