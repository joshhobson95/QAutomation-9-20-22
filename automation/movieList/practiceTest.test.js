
const {Builder, Capabilities} = require('selenium-webdriver')

const { By } = require('selenium-webdriver')


require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


// First we're going to navigate to Google.com
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/automation/movieList/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})



test('I can search Google!!', async () => {

    const deletedMessage = await driver.findElement(By.id('message'))

    const displayed = deletedMessage.isDisplayed()


    await driver.findElement(By.xpath('//input')).sendKeys('El Camino')
    
    await driver.findElement(By.xpath('//Button')).click()
    
    await driver.findElement(By.xpath('//span')).click()

    await driver.sleep(5000)

    await driver.findElement(By.xpath('//li/button')).click()
     
    await driver.sleep(5000)

 
    expect(displayed).toBeTruthy()
    
  
})



