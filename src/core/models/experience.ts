export class Experience {
    constructor(
      public id: number,
      public title: string,
      public dates: string,
      public location: string,
      public missionList: string[] = []
    ) {}
  }