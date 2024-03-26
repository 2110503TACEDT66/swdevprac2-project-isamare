import { UserUpdate } from "../../interface";

export default async function editUserProfile(token: string, userId: string, updatedFields: Partial<UserUpdate>) {
   const response = await fetch(`${process.env.BACKEND_URL}/api/project/auth/updateMe`, {
      method: "PUT",
      headers: {
         authorization: `Bearer ${token}`,
         "Content-type": "application/json"
      },
      body: JSON.stringify(updatedFields) 
   });

   if (!response.ok) {
      return await response.json();
   }
   return await response.json();
}