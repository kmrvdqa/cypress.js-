describe('Автотесты на авторизацию', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетил сайт

        cy.get('#mail').type('german@dolnikov.ru'); // нешел инпут логин и написал в него верный логин
        cy.get('#pass').type('iLoveqastudio1'); // нешел инпут пароль и написал в него верный пароль

        cy.get('#loginButton').click(); // нашел кнопку войти и нажал на нее

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // нашел и проверил текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
         })
     

     it('Забыл пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетил сайт
        
        cy.get('#forgotEmailButton').click(); // нажал забыл пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел почту
        cy.get('#restoreEmailButton').click(); // клик кнопка
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // нашел и проверил текст
        cy.get('#exitMessageButton > .exitIcon')
         })
       
    
    
    it('Правильный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетил сайт

        cy.get('#mail').type('german@dolnikov.ru'); // нешел инпут логин и написал в него верный логин
        cy.get('#pass').type('iLoveqastudio'); // нешел инпут пароль и написал в него неверный пароль
        
        cy.get('#loginButton').click(); // нашел кнопку войти и нажал на нее

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // нашел и проверил текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
         })



    it('Не правильный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетил сайт

        cy.get('#mail').type('german@rolnikov.ru'); // нешел инпут логин и написал в него неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // нешел инпут пароль и написал в него верный пароль
        
        cy.get('#loginButton').click(); // нашел кнопку войти и нажал на нее

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // нашел и проверил текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
         })


     it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); // посетил сайт

        cy.get('#mail').type('germandolnikov.ru'); // нешел инпут логин и написал в него не валидный логин
        cy.get('#pass').type('iLoveqastudio1'); // нешел инпут пароль и написал в него  пароль
        
        cy.get('#loginButton').click(); // нашел кнопку войти и нажал на нее

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // нашел и проверил текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
         })


     it('Проверка строчных букв', function () {
        cy.visit('https://login.qa.studio/'); // посетил сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // нешел инпут логин и написал в него логин с большими буквами
        cy.get('#pass').type('iLoveqastudio1'); // нешел инпут пароль и написал в него  пароль
        
        cy.get('#loginButton').click(); // нашел кнопку войти и нажал на нее

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // нашел и проверил текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
         })
})
