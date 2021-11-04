/// <reference types="cypress" />

describe('devFinance', () => {
    it('Adicionar uma nova transação de entrada', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')

        //get & contains
        //Incluindo a primeira entrada
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type('1500')
        cy.get('#date').type('2021-11-01')
        cy.contains('button', 'Salvar').click()
        
        //Verificação da primeira entrada
        cy.get('table tbody tr').should('have.length', 1)

        //Incluindo a segunda entrada
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela 2')
        cy.get('#amount').type('100')
        cy.get('#date').type('2021-11-02')
        cy.contains('button', 'Salvar').click()
        cy.get('table tbody tr').should('have.length', 2)

        //Retirando a segunda entrada
        cy.get('[data-index="1"] > :nth-child(4) > img').click()

        //Verificação da entrada restante
        cy.get('table tbody tr').should('have.length', 1)

     
    });
});    