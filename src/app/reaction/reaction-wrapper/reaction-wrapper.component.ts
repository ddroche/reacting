import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import ReactionApp from '../react-components/App/ReactionApp';

@Component({
  selector: 'app-reaction-wrapper',
  templateUrl: './reaction-wrapper.component.html',
  styleUrls: ['./reaction-wrapper.component.scss']
})
export class ReactionWrapperComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  // tslint:disable-next-line:max-line-length
  // CREATED USING FOLLOWING ARTICLE AS REFERENCE: https://sdk.gooddata.com/gooddata-ui/docs/4.1.1/ht_use_react_component_in_angular_2.x.html
  rootDomID: string;

  ngOnInit() {
    this.rootDomID = uuid.v1();
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }

  getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  isMounted(): boolean {
    return !!this.rootDomID;
  }

  render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(ReactionApp, {}), this.getRootDomNode());
    }
  }


}
