import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})

export class DocumentsComponent implements OnInit {
  
  documents: Document[] = [

    { 
    	title: "First Doc",
    	description: "stuff stuff stuff first doc",
    	file_url: "http://google.com",
    	updated_at: 'date-holder',
    	image_url: 'http://google.com/images'
    },
    { 
    	title: "Second Doc",
    	description: "stuff stuff stuff second doc",
    	file_url: "http://google.com",
    	updated_at: 'date-holder',
    	image_url: 'http://google.com/images'
    },
    { 
    	title: "Third Doc",
    	description: "stuff stuff stuff third doc",
    	file_url: "http://google.com",
    	updated_at: 'date-holder',
    	image_url: 'http://google.com/images'
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}


