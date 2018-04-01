import Random from "../../src/help/random";

describe('The Home page', () => {

    it('should successfully load page', () => {
        cy.visit('/');
    });
    it('should click on name', () => {
        cy.get('button').click();
    });
    describe('List', () => {
        const dataList = {
            listName: Random.generateString(5),
            listDesc: Random.generateString(3),
            listNameEdit: Random.generateString(6),
            listDescEdit: Random.generateString(5)
        };
        describe('save new list', () => {
            it('should fill name', () => {
                cy.get('#name').type(dataList.listName);
            });
            it('should fill description', () => {
                cy.get('#description').type(dataList.listDesc);
            });
            it('should click on save btn', () => {
                cy.get('button').click();
            });
            it('should go to correct page after click btn', () => {
                cy.url().should('include', '/');
            });
            it('should display new list', () => {
                cy.get('.collection-item').last().contains(dataList.listName)
            });
        });
        describe('edit list', () => {
            it('should click on edit btn', () => {
                cy.get('#editBtn' + dataList.listName).click();
            });
            it('should check correctness of field values', () => {
                cy.get('input[id="name"]').should('have.value', dataList.listName);
                cy.get('input[id="description"]').should('have.value', dataList.listDesc);
            });
            it('should update values in fields', () => {
                cy.get('#name').clear().type(dataList.listNameEdit);
                cy.get('#description').clear().type(dataList.listDescEdit);
            });
            it('should click save btn', () => {
                cy.get('button').click();
            });
            it('should go to correct page after click save edit btn', () => {
                cy.url().should('include', '/');
            });
            it('should display update list name', () => {
                cy.get('.collection-item').last().contains(dataList.listNameEdit)
            });
        });
        describe('go to item', () => {
            it('should click on list', () => {
                cy.get('#listBtn' + dataList.listNameEdit).click();
            });
        })
    });
    describe('Item', () => {
        const dataItem = {
            itemProp1: Random.generateString(5),
            itemProp2: Random.generateString(3),
            itemNumber: Random.generateNumber(2),
            itemProp1Edit: Random.generateString(5),
            itemProp2Edit: Random.generateString(3),
            itemNumberEdit: Random.generateNumber(3)
        };
        const header = {all: 'All Items', add: 'Add item'};
        it('should go to item page', () => {
            cy.url().should('include', '/list/');
        });
        it('should display correct name', () => {
            cy.get('.header').within(_ => {
                cy.get('p').contains(header.all);
            });
        });
        it('should click add btn', () => {
            cy.get('button').click();
        });
        describe('save new item', () => {
            it('should go to correct add item page', () => {
                cy.url().should('include', '/item/');
                cy.get('.header').within(_ => {
                    cy.get('p').contains(header.add);
                });
            });
            it('should fill first property', () => {
                cy.get('input[name="propertyString"').type(dataItem.itemProp1)
            });
            it('should fill second property', () => {
                cy.get('input[name="propertyString2"').type(dataItem.itemProp2)
            });
            it('should fill third property', () => {
                cy.get('input[name="propertyNumber"').type(dataItem.itemNumber)
            });
            it('should click save btn', () => {
                cy.get('button').click();
            });
            it('should go to correct page after click btn', () => {
                cy.url().should('include', '/list/');
            });
            it('should display new item', () => {
                cy.get('.collection-item').last().contains(dataItem.itemProp1)
            });
        });
        describe("edit item", () => {
            it('should click on edit btn', () => {
                cy.get('#editBtn' + dataItem.itemProp1).click();
            });

        });
    });
});