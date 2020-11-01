import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  title = 'Project Portals';
  projectPurpose =
    '来年度の売上30%向上目標を達成するための営業支援システムの刷新。\n2020年度上期中に要件定義・基本設計を実施。\n2020年度下期でシステム構築及びテストを実施し、2021年4月にサービスイン。';
  notifyMessage = '各機能担当は週末16:30までに進捗情報の更新をお願いいたします。';

  items = [
    {
      name: 'Repositories',
      children: [
        {
          name: 'Web Frontend',
          url: '',
        },
        {
          name: 'Web Backend',
          url: '',
        },
        {
          name: 'Mobile iOS',
          url: '',
        },
        {
          name: 'Mobile Android',
          url: '',
        },
      ],
    },
    {
      name: 'Document',
      children: [
        {
          name: 'Requirement',
          url: '',
        },
        {
          name: 'System Configuration Diaram',
          url: '',
        },
        {
          name: 'Site Designs',
          url: '',
        },
      ],
    },
    {
      name: 'Tools',
      children: [
        {
          name: 'Jira',
          url: '',
        },
        {
          name: 'Confluence',
          url: '',
        },
        {
          name: 'GitLab',
          url: '',
        },
        {
          name: 'RocketChat',
          url: '',
        },
      ],
    },
    {
      name: 'Datas',
      children: [
        {
          name: 'Daily Progress Report',
          url: '',
        },
        {
          name: 'Testing Report',
          url: '',
        },
        {
          name: 'Project Datas',
          url: '',
        },
      ],
    },
  ];

  images: { name: string; url: string }[] = [
    {
      name: 'sample image 01',
      url: 'assets/img/image-01.jpg',
    },
    {
      name: 'sample image 02',
      url: 'assets/img/image-02.jpg',
    },
    {
      name: 'sample image 03',
      url: 'assets/img/image-03.jpg',
    },
  ];
  selectedImageIndex = 0;

  constructor() {}

  ngOnInit(): void {}
}
