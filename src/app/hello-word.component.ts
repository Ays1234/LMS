import {Component } from '@angular/core'

@Component({
selector: 'hallo-wohrod',
// template: '<h2>Helloh Word</h2>',
templateUrl: './hello-tes.component.html',
styles: ['h2, p{font-family: sans-serif; margin:10%}']
})

export class HelloWorldComponent{
    judul = "Hello Angular. zz"
    gambar= "assets/YOGI.jpg"
    active = true
    // hello(){
    //     alert(this.judul)
    // }
    hello(name: string){
        alert('hallo ' + name)
    }
}