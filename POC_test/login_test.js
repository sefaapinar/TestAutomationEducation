Feature('login');

Scenario('Wrong User Authentication @testcase1', ({ I }) => {
    I.amOnPage('http://amazon.com');  //sayfayı açmamızı sağlar.
    I.waitForElement(('//div[@id="nav-signin-tooltip"]'))
    I.click('//div[@id="nav-signin-tooltip"]')
    I.waitForElement('//input[@id="ap_email"]')
    I.fillField('//input[@id= "a_email"]','xxxx')
    I.waitForElement('//input[@id="continue"]')
    I.click('//input[@id="continue"]')
    I.seeElement("//*[contains(text(),'cannot find')]")

});


Scenario('True UserName and Wrong Password @testcase2', ({ I }) => {
    I.amOnPage('http://amazon.com');  //sayfayı açmamızı sağlar.
    I.waitForElement(('//div[@id="nav-signin-tooltip"]'))
    I.click('//div[@id="nav-signin-tooltip"]')
    I.waitForElement('//input[@id="ap_email"]')
    I.fillField('//input[@id="ap_email"]','sefaapinar')
    I.waitForElement('//input[@id="continue"]')
    I.click('//input[@id="continue"]')
    I.waitForElement('//input[@id="ap_password"]')
    I.fillField('//İNPUT[@="ap_password"]','wqe')
    I.waitForElement('//input[@id="signInSubmit"],')
    I.click('//input[@id="signInSubmit"],')
    I.seeElement('//*[contains(text(),"Important Message")]')

});



Scenario('True UserName and True Password @testcase3', ({ I }) => {
    I.amOnPage('http://amazon.com');  //sayfayı açmamızı sağlar.
    I.waitForElement(('//div[@id="nav-signin-tooltip"]'))
    I.click('//div[@id="nav-signin-tooltip"]')
    I.waitForElement('//input[@id="ap_email"]')
    I.fillField('//input[@id="ap_email"]','sefaapinar')
    I.waitForElement('//input[@id="continue"]')
    I.click('//input[@id="continue"]')
    I.waitForElement('//input[@id="ap_password"]')
    I.fillField('//İNPUT[@="ap_password"]','213456')
    I.waitForElement('//input[@id="signInSubmit"],')
    I.click('//input[@id="signInSubmit"],')
   

});