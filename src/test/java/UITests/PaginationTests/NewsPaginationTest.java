package UITests.PaginationTests;

import UITests.BaseTest.BaseTest;
import automation.steps.CommonSteps;
import automation.steps.news.NewsSteps;
import org.testng.annotations.*;

public class NewsPaginationTest extends BaseTest {
    public CommonSteps commonSteps;
    public NewsSteps newsSteps;

    @BeforeClass(alwaysRun = true)
    public void beforeClass() {
        this.commonSteps = new CommonSteps(page);
        this.newsSteps = new NewsSteps(page);
    }

    @Test(priority = 1)
    public void goToNewsPage() {
        commonSteps.navigateToNewsPage();
    }

    @Test(priority = 2)
    public void checkPageNumberIsCorrect() {
        newsSteps.checkPage();
    }

    @Test(priority = 3)
    public void goToNextPage() {
        newsSteps.goToNextPage();
    }

    @Test(priority = 4)
    public void checkPageNumberIsCorrectAgain() {
        newsSteps.checkPage();
    }

}
