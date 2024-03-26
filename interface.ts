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
              }|null
  start: string
  end: string
  createAt: string
  __v: string
}

export interface BookingItemEdit{
  apptDate: string
  start: string
  end: string
}

export interface BookingJson {
  success: boolean,
  count: number,
  data: BookingItem2[]
}

export interface User{
  name:string,
  email:string,
  telephone: string,
  password:string,
}
export interface UserUpdate{
  name:string,
  email:string,
  telephone: string,
  
}

export interface CoworkingItemCreate{
  name:string,
  address:string,
  district:string,
  province:string,
  postalcode:string,
  telephone:string,
  region:string,
  opentime:string,
  closetime:string,
  picture:string
}

export interface UserItem {
  _id: string
  name: string
  telephone: string
  email: string
  role: string
  createdAt: string
  __v: 0,
  reservations: UserBookingItem[]
  id: string
}

export interface UserBookingItem {
  _id: string
  apptDate: string
  user: string
  coworking: string
  start: string
  end: string
  createAt: string
  __v: string
}

export interface UserJson {
  success: boolean,
  count: number,
  pagination: {}
  data: UserItem[]
}