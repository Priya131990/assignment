var mock = require("../../mocks/TestData/locators")

describe("Automating Movado site", ()=>{
   
    after(()=>{
     console.log("after1");
         })
     
     it("Continue shopping", ()=>{
         browser.pause(5000);
        
       browser.click(mock.continuePopup);
        
    
         browser.pause(5000);
         console.log("ggfdfd")
         var searchIcon=$
    
        console.log("Test case1");
     });

     before(()=>{
        browser.url('https://storefront:movado123@dev13-na-movadogroup.demandware.net/s/MovadoUS/en_US/home');
browser.pause(3000);
console.log("before1");
     })
});