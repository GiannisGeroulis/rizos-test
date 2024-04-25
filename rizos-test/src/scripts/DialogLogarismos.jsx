import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import supabase from "./Login"
import { useEffect, useState } from "react"
import { AlertSave } from "./AlertSave"


export function DialogDemo(user) {
const [formData,setFormData]=useState({email:""})
function handleChange(event)
      {
        setFormData((prevFormData)=>{
          return{
            ...prevFormData,[event.target.name]:event.target.value
            
          }
         
        })
      }
async function handleSave()
{

const { data, error } = await supabase.auth.updateUser(
   {
  email: formData.email
}


)
if(data){
  console.log(error) 
  
}else{console.log(error)}

}




  return (
    <Dialog>
       
      <DialogTrigger  asChild>

        <Button variant="outline" className="bg-slate-200"  >Λογαρισμός</Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px]">
       
        <DialogHeader>
        
          <DialogTitle className="mx-auto">Λογαρισμός</DialogTitle>
          <DialogDescription>
            Κάντε αλλαγές στο λογαριασμό σας . Κάντε κλικ στην αποθήκευση όταν τελείωσετε.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
          
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              autocomplete="off"
              name="email"
              defaultValue={user.email.email}
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Κωδικός
            </Label>
            <Input
              id="username"
              type="password"
              autocomplete="off"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant="outline"className=" bg-emerald-600 hover:bg-emerald-500" onClick={handleSave}>Αποθήκευση αλλαγών</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
