// app.component.ts

import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
export interface Option {
    label: string;
    selected: boolean;
    value: string;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private http: HttpClient) {
    }
    selectedOption = '';
    imagePath = '' ;
    options: Option[] = [
        {
            label: 'Insertion professionnelle en France 2010-2014',
            selected: false,
            value: 'insertionPro'
        },
        {
            label: 'Salaire en France 2013-2015',
            selected: false,
            value: 'salaireParis'
        },
        {
            label: 'Promotion à Paris 2013-2015',
            selected: false,
            value: 'promotionParis'
        },
    ];

    displayChoice(index) {
        this.selectedOption = this.options[index].value;
        this.imagePath = '';
    }

    displayGraphic(name) {
        this.imagePath = 'assets/img/national/' + name + '.PNG';
    }

    ngOnInit() {
    }
}
