'use strict';
function Student (name, surname, bYear) {
    const normVisit = .9, normRaiting = 9;
    this.name = name;
    this.surname = surname;
    this.bYear = bYear;
    this.age = () => (new Date).getFullYear() - bYear;
    this.raiting = [];
    this.raiting.length = 30;
    const raitingIndex = () => this.raiting.findIndex(index => typeof index === 'undefined');
    this.visit = [];
    this.visit.length = 30;
    const visitIndex = () => this.visit.findIndex(index => typeof index === 'undefined');
    this.present = () => this.visit[visitIndex()] = true;
    this.absent = () => this.visit[visitIndex()] = false;
    this.mark = (rating) => this.raiting[raitingIndex()] = rating;
    this.raitingTotal = () => {
        let value = 0, index = 0;
        for (let i = 0; i < this.raiting.length; i++) {
            if (this.raiting[i]) {
                value += this.raiting[i];
                index++;
            }
        }
        return value / index;
    };
    this.visitTotal = () => {
        let value = 0, index = 0;
        for (let i = 0; i < this.visit.length; i++) {
            if (this.visit[i] === true) {
                value++;
                index++;
            }
            else if (this.visit[i] === false) {
                index++;
            }
        }
        return value / index;
    };
    this.summary = () => {
        if ((this.raitingTotal() > normRaiting) && (this.visitTotal() > normVisit)) {
            return 'Ути какой молодчинка!';
        }
        else if ((this.raitingTotal() > normRaiting) || (this.visitTotal() > normVisit)) {
            return 'Норм, но можно лучше.';
        }
        else {
            return 'Редиска!';
        }
    };
}
const Erik = new Student('Erik', 'Kherunts', 1996); // eslint-disable-line no-magic-numbers

Erik.present();
Erik.present();
Erik.present();
Erik.present();
Erik.present();
Erik.present();
Erik.present();
Erik.present();
Erik.present();
Erik.present();
Erik.absent();
Erik.mark(9); // eslint-disable-line no-magic-numbers
Erik.mark(8); // eslint-disable-line no-magic-numbers
Erik.mark(9); // eslint-disable-line no-magic-numbers
Erik.mark(9); // eslint-disable-line no-magic-numbers
Erik.mark(10); // eslint-disable-line no-magic-numbers

console.log(Erik.raitingTotal()); // eslint-disable-line no-console
console.log(Erik.visitTotal()); // eslint-disable-line no-console
console.log(Erik.summary()); // eslint-disable-line no-console
console.log(Erik); // eslint-disable-line no-console

// Узнать возраст студента \\
// console.log(Erik.age()); // eslint-disable-line no-console