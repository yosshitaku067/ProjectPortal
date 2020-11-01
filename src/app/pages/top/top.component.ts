import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

class SiteDatas {
  private _title = '';
  get title() {
    return this._title;
  }
  private _projectPurpose = '';
  get projectPurpose() {
    return this._projectPurpose;
  }
  private _notifyMessage = '';
  get notifyMessage() {
    return this._notifyMessage;
  }
  private _items: {
    name: string;
    children: {
      name: string;
      url: string;
    }[];
  }[] = [];
  get items() {
    return this._items;
  }
  private _images: {
    name: string;
    url: string;
  }[] = [];
  get images() {
    return this._images;
  }

  constructor() {}

  fromJson(props: {
    title: string;
    projectPurpose: string;
    notifyMessage: string;
    items: {
      name: string;
      children: {
        name: string;
        url: string;
      }[];
    }[];
    images: {
      name: string;
      url: string;
    }[];
  }) {
    this._title = props.title;
    this._projectPurpose = props.projectPurpose;
    this._notifyMessage = props.notifyMessage;
    this._images = props.images;
    this._items = props.items;
  }
}

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  siteData = new SiteDatas();
  selectedImageIndex = 0;
  showNotifyMessage = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('/assets/datas.json')
      .toPromise()
      .then((json: any) => {
        this.siteData.fromJson(json);

        if (this.siteData.notifyMessage.length > 0) {
          this.showNotifyMessage = true;
        }
      })
      .catch((err) => window.alert(err));
  }

  hideNotifyMessage() {
    this.showNotifyMessage = false;
  }
}
