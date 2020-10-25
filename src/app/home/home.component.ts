import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  file: any;

  constructor() { }

  ngOnInit(): void {
  }

  handleXmlFile(_uploadXml) {
    this.file = _uploadXml.files[0];
    let contentXml;

    this.lerArquivo(this.file, (resposta) => {
      contentXml = String(resposta);
    })
  }

  lerArquivo(file, done) {
    var reader = new FileReader;

    reader.onload = function (evt) {
      done(evt.target.result)
    };
    reader.onerror = function (evt) {
      console.warn(evt)
    };
    
    reader.readAsText(file);
  }
}
