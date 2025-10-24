package automation.steps.news;

import automation.pages.news.IndividualNewsPage;
import com.microsoft.playwright.Page;
import org.junit.jupiter.api.Assertions;

public class IndividualNewsSteps {
    private Page page;
    public IndividualNewsPage individualNewsPage;
    public IndividualNewsSteps(Page page){
        this.page = page;
        individualNewsPage = new IndividualNewsPage(page);
    }

    public IndividualNewsSteps goToLatestNews(){
        String oldUrl = page.url();
        individualNewsPage.latestNew.click();
        page.waitForURL(url -> !url.equals(oldUrl));
        return this;
    }

    public IndividualNewsSteps checkNewsProperties(String date, String tag, String title){
        Assertions.assertEquals(date,this.individualNewsPage.date.textContent());
        Assertions.assertEquals(tag,this.individualNewsPage.tag.textContent());
        Assertions.assertEquals(title,this.individualNewsPage.title.textContent());
        return this;
    }

    public IndividualNewsSteps checkNewsProperties(String date, String title){
        Assertions.assertEquals(date,this.individualNewsPage.date.textContent());
        Assertions.assertEquals(title,this.individualNewsPage.title.textContent());
        return this;
    }

    public String getLatestNewTitle(){
        return individualNewsPage.latestNewTitle.textContent();
    }

    public String getLatestNewDate(){
        return individualNewsPage.latestNewDate.textContent();
    }

}
