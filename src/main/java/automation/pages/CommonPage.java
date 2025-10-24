package automation.pages;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;

public class CommonPage {
    public Locator newsLink;
    public Locator georgianLanguageButton;
    public CommonPage(Page page) {
        this.newsLink = page.locator("a[href='/news']");
        this.georgianLanguageButton = page.locator("img[alt='Georgian']").first();
    }

}
