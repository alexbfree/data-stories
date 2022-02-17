# CMS guidelines
## Creating a new story
- First go to [https://data-stories.netlify.app/admin](https://data-stories.netlify.app/admin) and connect with your netlify identity credentials.
- Next, make sure you are in the `Stories` collection (top left panel) and click on `New Stories`.
- Once in the create page you must start by defining an `ID` for the page, this `ID` represent the URL of the page, so choose carefully.
- A story is made of a list of `building blocks` that stack together one below the other, click on `Add building blocks` and select an appropriate block to start writing your story. You have the choice between: 
  - A Profile block: <img width="1192" alt="image" src="https://user-images.githubusercontent.com/17878016/154491870-520fc3a0-d38a-408e-afaf-7da40c129497.png">
  - A Paragraph block: <img width="1144" alt="image" src="https://user-images.githubusercontent.com/17878016/154492013-ba22cdb9-e119-4a87-aeaf-f084b354fbe5.png">
  - A Rail block: <img width="1327" alt="image" src="https://user-images.githubusercontent.com/17878016/154492328-69d65364-481b-47b5-8926-546668cc3a78.png">
  - A Read also block: <img width="1183" alt="image" src="https://user-images.githubusercontent.com/17878016/154492384-3b2dc94d-a680-4a79-865a-188d58549f21.png">
- Once you have added building blocks, you can save your work by clicking on the save button in the upper left corner. After a few seconds, your page will be saved and set to `Draft` status, there are 3 types of status, `Draft`, `In Review`, `Ready`. These statuses are only there to organize the team, we will use them as follows: 
  - **Draft:** This status is for when you write your story, you can save and come back to your page later.
  - **In Review:** Once you have a first draft of your story, you can change the status to "In Review" to allow other team members to review it. 
  - **Ready:** Once the team has agreed on the story, the status should be set to "Ready" for final review by the developers, and the page will then be deployed on the website.
- Once saved, you can generate a preview link for your page by clicking on `Check for Preview` in the upper right corner. This action can sometimes take up to 1 minute, so be patient :) Once the link is generated, the button will change to `V 
iew Preview`, you can then click on it and you will be redirected to a temporary link of the **main page** of the site, to see your page you must concatenate `/
ID_of_your_page` to the URL. 
- Now, every time you save the page back to the CMS, the preview page will also be updated within 30 seconds to 1 minute.

## The Widgets
Each text boxes in the buildings blocks and Rails support Markdown, it allows you to format the text the way you want, if you are not familiar with it you can follow [this tutorial](https://www.markdowntutorial.com/).
In addition to the standard markdown features we added some custom widgets to the text boxes, you can see a demonstration of all the features [here](https://data-stories.netlify.app/example). 
In order to access them you can click on the `+` button on the top of the text box: 
<img width="751" alt="Capture d’écran 2022-02-17 à 15 07 21" src="https://user-images.githubusercontent.com/17878016/154498546-02e3f04f-f827-4cd9-b61f-6ef0766cc7c7.png">

## The Rails
As with the whole story, a Rail is also made of "building blocks" called "FlowBlock". You can start with an empty Rail (building block: `Rail`) or with a pre-filled Rail (for example: `Rail Alex5`). In all cases, the texts are linked to their node(s) on the same vertical level. You can see below how the main options refer to the website:
<img width="1461" alt="Capture d’écran 2022-02-17 à 15 11 43" src="https://user-images.githubusercontent.com/17878016/154500634-a42f2387-f69e-4a97-b24b-842362af6246.png">
