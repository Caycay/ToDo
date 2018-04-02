var todoHomePage = require('./helper.po');

describe('Todo list page', function () {
    const EC = protractor.ExpectedConditions;
    const list = {
        name: generateString(4),
        description: generateString(4),
        editName: generateString(3),
        editDescription: generateString(3)
    };
    const item = {
        prop1: generateString(4),
        prop2: generateString(4),
        prop3: generateNumber(3),
        prop1edit: generateString(4),
        prop2edit: generateString(4),
        prop3edit: generateNumber(3),
    };

    beforeAll(function () {
        browser.ignoreSynchronization = true;
        todoHomePage.go();
    });
    it('should get base browser url', function () {
        browser.waitForAngularEnabled(false);
        browser.get(browser.baseUrl);
        expect(EC.urlContains(browser.baseUrl));
    });
    it('should have proper title', function () {
        let pageTitle = todoHomePage.getPageTitle;
        expect(pageTitle).toBe('All List');
    });
    describe('List', function () {
        it('should click new list', function () {
            todoHomePage.getButton('addListBtn').click();
            expect(EC.urlContains('add'));
        });
        it('should have correct label', function () {
            let labelName = todoHomePage.getLabel('name');
            let labelDescription = todoHomePage.getLabel('description');
            expect(labelName.getText()).toBe('New name');
            expect(labelDescription.getText()).toBe('New description');

        });
        it('should fill fields', function () {
            todoHomePage.fillFormForList(list.name, list.description);
            todoHomePage.getButton('addListBtn').click();
            let pageTitle = todoHomePage.getPageTitle;
            expect(pageTitle).toBe('All List');
        });
        it('should find new add list in list', function () {
            expect(todoHomePage.getButton('listBtn' + list.name)).true;
        });
        it('should click edit list', function () {
            todoHomePage.getButton('editBtn' + list.name).click();
            expect(EC.urlContains('edit'));
        });
        it('should fill fields', function () {
            todoHomePage.fillFormForList(list.editName, list.editDescription);
            todoHomePage.getButton('addListBtn').click();
            let pageTitle = todoHomePage.getPageTitle;
            expect(pageTitle).toBe('All List');
        });
    });
    describe('Item', function () {
        it('should go to item list', function () {
            todoHomePage.getButton('listBtn' + list.editName).click();
            expect(EC.urlContains('list'));
        });
        it('should display correct header', function () {
            let pageTitle = todoHomePage.getPageTitle;
            expect(pageTitle).toBe('All Items');
        });
        it('should click add item button', function () {
            todoHomePage.getButton('addListBtn').click();
            expect(EC.urlContains('add/item'));
        });
        it('should fill form for new item ', function () {
            todoHomePage.fillFormForItem(item.prop1, item.prop2, item.prop3);
            todoHomePage.getButton('addListBtn').click();
            let pageTitle = todoHomePage.getPageTitle;
            expect(pageTitle).toBe('All Items');
        });
        it('should go to edit item', function () {
            todoHomePage.getButton('editBtn' + item.prop1).click();
            expect(EC.urlContains('edit/item'));
        });
        it('should fill form for edit item ', function () {
            todoHomePage.fillFormForItem(item.prop1edit, item.prop2edit, item.prop3edit);
            todoHomePage.getButton('addListBtn').click();
            let pageTitle = todoHomePage.getPageTitle;
            expect(pageTitle).toBe('All Items');
        });
        it('should delete item', function () {
            let button = todoHomePage.getButton('deleteBtn' + item.prop1);
            button.click();
            expect(button).false;
        });
    })

});
function generateString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
function generateNumber(length) {
    let text = '';
    let possible = '1234567890';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}