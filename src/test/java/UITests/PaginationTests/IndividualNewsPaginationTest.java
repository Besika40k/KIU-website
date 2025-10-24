package UITests.PaginationTests;

import UITests.BaseTest.BaseTest;
import automation.steps.CommonSteps;
import automation.steps.news.IndividualNewsSteps;
import automation.steps.news.NewsSteps;
import org.testng.annotations.*;

public class IndividualNewsPaginationTest extends BaseTest {
    public CommonSteps commonSteps;
    public NewsSteps newsSteps;
    public IndividualNewsSteps individualNewsSteps;
    private String title;
    private String date;
    private String tag;

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
        title = newsSteps.getFirstNewsTitle();
        date = newsSteps.getFirstNewsDate();
        tag = newsSteps.getFirstNewsTag();
        newsSteps.checkFirstNews();
    }

    @Test(priority = 3)
    public void checkNewsProperties() {
        individualNewsSteps.checkNewsProperties(date,tag,title);
    }

    @Test(priority = 4)
    public void goToLatestNewsFromIndividualNewsPage() {
        date = individualNewsSteps.getLatestNewDate();
        title = individualNewsSteps.getLatestNewTitle();
        individualNewsSteps.goToLatestNews();
    }

    @Test(priority = 5)
    public void checkNewsPropertiesAgain() {
        individualNewsSteps.checkNewsProperties(date,title);
    }

}
