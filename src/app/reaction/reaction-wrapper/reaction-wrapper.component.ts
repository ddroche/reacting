import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import React from 'react';
import ReactDOM from 'react-dom';
import rApp from '../react-components/App/rApp';

@Component({
  selector: 'app-reaction-wrapper',
  templateUrl: './reaction-wrapper.component.html',
  styleUrls: ['./reaction-wrapper.component.scss']
})
export class ReactionWrapperComponent implements OnInit {
  reactionWrapper: HTMLElement;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.reactionWrapper = this.document.getElementById('reaction-app');
    React.render(
      React.createElement(rApp, {}),
      this.reactionWrapper);
  }

}
