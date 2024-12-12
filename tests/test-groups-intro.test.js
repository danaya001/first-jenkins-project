import {test} from "@playwright/test"

test.describe("User Story01 @user01", async () => {

    test.beforeAll(async () => {
        console.log("BeforeAll function is executed.");
    });
    
    test.afterAll(async () => {
        console.log("AfterAll function is executed.");
    });
    
    test.beforeEach(async ({page}) => {
        console.log("BeforeEach function is executed.");
    });
    
    test.afterEach(async ({page}) => {
        console.log("AfterEach function is executed.");
    });

    test("Test case 01", async ({page}) => {
console.log("test case 01 is expected");
    });
    test("Test case 02", async ({page}) => {
        console.log("test case 02 is expected");
    });

    test("Test case 03", async ({page}) => {
        console.log("test case 03 is expected");
    })
});


