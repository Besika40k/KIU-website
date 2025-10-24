package automation.steps;

import automation.pages.CommonPage;
import com.microsoft.playwright.Page;
import org.junit.jupiter.api.Assertions;

public class CommonSteps {
    private Page page;
    public CommonPage commonPage;

    public CommonSteps(Page page) {
        this.page = page;
        commonPage = new CommonPage(page);
    }

    public CommonSteps navigateToNewsPage() {
        commonPage.newsLink.click();
        page.waitForURL("**/news");
        Assertions.assertTrue(page.url().endsWith("/news"));
        return this;
    }

    public CommonSteps changeLanguageToGeorgian() {
        commonPage.georgianLanguageButton.click();
        return this;
    }

    public CommonSteps checkThatLanguageIsInGeorgian() {
        String visibleText = page.locator("body :is(p,h1,h2,h3,h4,h5,h6,span,a,li)").allTextContents()
                .stream().reduce("", (a,b) -> a + " " + b);

        long geoCount = visibleText.chars().filter(c -> c >= 0x10A0 && c <= 0x10FF).count();
        long total = visibleText.chars().filter(c -> !Character.isWhitespace(c)).count();
        if ((double) geoCount / total < 0.5) {
            throw new AssertionError("Page is not mostly in Georgian!");
        }
        return this;
    }
}
