package automation.steps.news;

import automation.pages.news.NewsPage;
import com.microsoft.playwright.Page;
import org.testng.Assert;

public class NewsSteps {
    private Page page;
    public NewsPage newsPage;

    public NewsSteps(Page page) {
        this.page = page;
        newsPage = new NewsPage(page);
    }

    public NewsSteps checkPage() {
        String currentPage = newsPage.pageInfo.textContent().trim().split(" ")[1];
        String currentPage2 = newsPage.activePage.textContent();
        Assert.assertEquals(currentPage, currentPage2);
        return this;
    }

    public NewsSteps checkFirstNews() {
        newsPage.firstNewsLink.click();
        return this;
    }

    public NewsSteps goToNextPage() {
        newsPage.nextButton.scrollIntoViewIfNeeded();
        newsPage.nextButton.click();
        return this;
    }

    public String getFirstNewsTag() {
        return newsPage.firstNewsTag.textContent();
    }

    public String getFirstNewsDate() {
        return newsPage.firstNewsDate.textContent();
    }

    public String getFirstNewsTitle() {
        return newsPage.firstNewsTitle.textContent();
    }

    public String getFirstNewsDescription() {
        return newsPage.firstNewsDescription.textContent();
    }

}
