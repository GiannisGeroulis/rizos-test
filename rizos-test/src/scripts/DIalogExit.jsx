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
import { useNavigate } from "react-router-dom"
import supabase from "./Login";

export function DialogExit(user) {
  const navigate = useNavigate();
  async function handleNai () {
  
    const { error } = await supabase.auth.signOut()
    if(error) {return}
    navigate("/")
    console.log("bgikes file 7.60")
  
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-slate-200">Αποσύνδεση</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mx-auto">Αποσύνδεση</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <h1 className="mx-auto">Είστε σίγουρος/η οτι θέλτε να αποσυνδεθείτε;</h1>
        </div>
        <DialogFooter className="mx-auto">
          <Button type="submit" variant="outline" className="border-slate-400">ΟΧΙ</Button>
          <Button onClick={handleNai} type="submit" variant="outline" className="border-slate-400 bg-emerald-600 hover:bg-emerald-500">ΝΑΙ</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
