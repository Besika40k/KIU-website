package UITests.LanguageTest;

import UITests.BaseTest.BaseTest;
import automation.steps.CommonSteps;
import automation.steps.news.IndividualNewsSteps;
import automation.steps.news.NewsSteps;
import org.testng.annotations.*;

public class IndividualNewsLanguageTest extends BaseTest {
    public CommonSteps commonSteps;
    public NewsSteps newsSteps;
    public IndividualNewsSteps individualNewsSteps;

    @BeforeClass(alwaysRun = true)
    public void beforeClass() {
        this.commonSteps = new CommonSteps(page);
        this.newsSteps = new NewsSteps(page);
        this.individualNewsSteps = new IndividualNewsSteps(page);
    }

    @Test(priority = 1)
    public void goToNewsPage() {
        commonSteps.navigateToNewsPage();
    }

    @Test(priority = 2)
    public void checkFirstNews() {
        newsSteps.checkFirstNews();
    }

    @Test(priority = 3)
    public void changeLanguage() {
        commonSteps.changeLanguageToGeorgian();
    }

    @Test(priority = 4)
    public void checkThatLanguageChanged() {
        commonSteps.checkThatLanguageIsInGeorgian();
    }

}
