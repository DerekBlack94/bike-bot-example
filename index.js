const Vonage = require('@vonage/server-sdk')
const puppeteer = require('puppeteer');
process.setMaxListeners(Infinity); // <== number of listeners 

const vonage = new Vonage({
    apiKey: 'c44df8fa',
    apiSecret: 'Vi5JghE1F6FPCfta'   //Vontage API KEYS Please use your own
    },{debug: true});


//?----------------------------------- bike one -------------------------------

 let comfortThree =  (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0);       //use for slower connection or very large files
        await page.goto('https://www.giant-bicycles.com/us/escape-3-comfort-2021'); // Page URL to Query
    
        const result = await page.evaluate(() => {
                let posBike = document.querySelector(".stock.stock-ok");  //Checking for an instock Button
                if (posBike){
                      return   "true"
                    } else if (posBike == null || undefined){
                            return "false"
                        }
                    })
                    console.log("Comfort 3",result)    // Name of product with true/false of product instock result printed to console
                
                    await browser.close();
                    if (result == "true"){        //checks if results are true and sends a text message to the whitelisted phone number that can be set up
                        vonage.message.sendSms("18664600995", "13174603306", "there are more comfort 3 in stock  ", (err, responseData) => {
                        if (err) {
                         console.log(err);
                        } else {
                         if(responseData.messages[0]['status'] === "0") {
                            console.log("Message sent successfully.");
                        } else {
                        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                     }
                 }
             })                    
            };
         });

                comfortThree();

//?--------------------------- bike two --------------------------------

                contenderARone = (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setDefaultNavigationTimeout(0);
         await page.goto('https://www.giant-bicycles.com/us/contend-ar-1-2021');
                    
            const result = await page.evaluate(() => {
             let posBike = document.querySelector(".stock.stock-ok");
                 if (posBike){
                    return  "true"
                } else if (posBike == null || undefined){
                    return "false"
                }
                }) 
                    await browser.close();
                console.log("contender One",result)

                    if (result == "true"){
                    vonage.message.sendSms("18664600995", "13174603306", "there are more contender-ar-1 in stock  ", (err, responseData) => {
                    if (err) {
                     console.log(err);
                    } else {
                     if(responseData.messages[0]['status'] === "0") {
                        console.log("Message sent successfully.");
                    } else {
                    console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                 }
             }
         })                             
        };
     });
                                
                                contenderARone();

                                //? bike Three----------------------

         let cypress =  (async () => {
                  const browser = await puppeteer.launch();
                 const page = await browser.newPage();
                 await page.setDefaultNavigationTimeout(0);
                 await page.goto('https://www.giant-bicycles.com/us/cypress-2021');
                                    
                 const result = await page.evaluate(() => {
                       let posBike = document.querySelector(".stock.stock-ok");
                      if (posBike){
                        return   "true"
                      } else if (posBike == null || undefined){
                       return "false"
                   }
                 })
                 console.log("cypress",result)                         
                    await browser.close();
                    if (result == "true"){
                        vonage.message.sendSms("18664600995", "13174603306", "there are more cypress in stock  ", (err, responseData) => {
                        if (err) {
                         console.log(err);
                        } else {
                         if(responseData.messages[0]['status'] === "0") {
                            console.log("Message sent successfully.");
                        } else {
                        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                     }
                 }
             })                             
            };
            });
                cypress();