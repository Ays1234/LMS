import {Component } from '@angular/core'

@Component({
selector: 'hallo-wohrod',
// template: '<h2>Helloh Word</h2>',
templateUrl: './hello-tes.component.html',
styles: ['h2, p{font-family: sans-serif;}']
})

export class HelloWorldComponent{
    judul = "Hello Angular. zz"
    gambar= "assets/YOGI.jpg"
    active = false
    // hello(){
    //     alert(this.judul)
    // }
    hello(name: string){
        alert('Hallo ' + name)
    }

    onEditClick(){
        this.active =!this.active
    }
}