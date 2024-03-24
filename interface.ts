export interface BookingItem {
  coworkingId: string
  coworkingName: string
  bookDate: string
  start: string
  end: string
  userId: string
}


export interface CoworkingItem {
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

export interface CoworkingJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: CoworkingItem[]
}

export interface BookingItem2 {
  _id: string
  apptDate: string
  user: string
  coworking: {
                _id: string
                name: string
                province: string
                id: string
              }
  start: string
  end: string
  createAt: string
  __v: string
}

export interface BookingJson {
  success: boolean,
  count: number,
  data: BookingItem2[]
}

export interface User{
  _id:string,
  name:string,
  email:string,
  telephone: string,
  role: string,
  password:string,
  token: string
}