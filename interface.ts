interface CoworkingItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    telephone: string,
    region:string,
    opentime:string,
    closetime:string,
    picture: string,
    __v: number,
    id: string
  }
  
  interface CoworkingJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CoworkingItem[]
  }

  