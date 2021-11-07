/// <reference types="cypress" />

//const { first } = require("lodash")

describe('Code Challenge', () => {
  beforeEach(() => {
    cy.visit('https://www.alibaba.ir')
    cy.wait(500)
    
    //from
    cy.get('.a-input__input>[autocomplete=off]')
    .eq(0)
    .click()
    cy.get('[data-value=AWZ]')
    .should('have.text','اهواز')
    .click()

    //to
    cy.get('[data-value=BND]')
    .should('have.text','بندر عباس')
    .click()

    //date
    cy.get('.calendar-cell')
    .contains('26')
    .click()
    cy.get('span.datepicker-spacing')
    .should('have.text','رفت 26 آبان')
    
    //comfirm date
    cy.contains('تایید ')
    .click()

    //number
    cy.get('.a-counter>button')
    .eq(0)
    .click()
    cy.get('.a-counter__value')
    .eq(0)
    .should('have.text','2') 
    
  })
  
  it('search and find at least one flight', () => {
   //click search button
   cy.get('[name=search]')
   .click()

   //changing URL 
   cy.url()
   .should('contain', '/flights')
   cy.wait(2000)
   cy.waitUntil(() => 
        cy.get('.min-w-0',{timeout:10000})
        .should('be.visible')
        .and('not.have.class','.loading-banner-modal'));

   //check search resualt
   cy.get("body",).then($body => {
    if ($body.find(".available-card__details").length > 0) { 
         cy.log('there is at least one flight')
    }
    else {
      cy.get('.is-selected')
      .parent()
      .nextAll()
      .find('.a-p-calendar-cell__price')
      .eq(0)
      .click()
      cy.get('.available-card__details')
      .should('be.visible')
    }
   
   //scroll to contact us and click button
   cy.scrollTo('bottom')
   .contains('تماس با ما')
   .click()


   cy.wait(500)
   cy.waitUntil(() => 
        cy.get('.staticpage-header__segment h2',{timeout:10000})
        .should('have.text','تماس با ما'));

   });
  })
})
