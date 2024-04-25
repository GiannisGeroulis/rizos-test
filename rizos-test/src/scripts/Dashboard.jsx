import { NavBar } from "./NavBar"
import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Map } from '../scripts/Map';
import { DashboardMap } from "./DashboardMap"
import { useState } from "react"
import supabase from "./Login"
import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
  } from "react-geocode";
  setDefaults({
    key: "AIzaSyCc0hRFnqdTN3KNB6vwc9_qWttkhjsGAmE", // Your API key here.
    language: "en", // Default language for responses.
    region: "es", // Default region for responses.
  });  



export function Dashboard() {
    const testImage = require("../assets/google-png.png")
    const [tipos,setTipos]=useState("");
    const [lat,setLat]=useState("");
    const [lng,setLng]=useState("");
    const [xwros,setXwros]=useState("");
    const [eidos,setEidos]=useState("");
    const [orofos,setOrofos]=useState("");
    const [katastasi,setKatastasi]=useState("");  
    const [energiaki,setEnergiaki]=useState("");
    const [zoni,setZoni]=useState("");
    const [formError,setFormError]=useState(null);
    const [formData,setFormData] = React.useState({
        emvadon:0,timi:0,etosK:0,etosAn:0,ipnodomatia:0,mpania:0,diefthinsi:''
      })
      console.log(formData)
      function handleChange(event)
      {
        setFormData((prevFormData)=>{
          return{
            ...prevFormData,[event.target.name]:event.target.value
          }
          
        })
      }
      
      
      async function handleSubmit(e){
        e.preventDefault()
        if(!tipos || !xwros || !eidos || !orofos || !katastasi || !energiaki || !zoni || !formData.emvadon || !formData.timi || !formData.etosK || !formData.etosAn|| !formData.ipnodomatia|| !formData.mpania|| !formData.diefthinsi){
            setFormError("Παρακαλώ συμπλήρωσε όλες τις φόρμες")
            console.log("pipes")
            return
        }
        //console.log(tipos,xwros,eidos,orofos,katastasi,energiaki,zoni,formData.emvadon,formData.timi,formData.etosK,formData.etosAn,formData.ipnodomatia,formData.mpania,formData.diefthinsi)
        console.log("mpompa")
        fromAddress(formData.diefthinsi)
        .then(({ results }) => {
            const { lat, lng } = results[0].geometry.location;
            setLng(lng)
            setLat(lat)
            
        })
    
        .catch(console.error);
        if(!lat && !lng)
        {
            console.log("oxi fani oxi")
            return
        }
        
        console.log(testImage)
        console.log("nai")
        const { data, error } = await supabase
        .from('akinito')
        .insert([
        { tipos: tipos , xwros: xwros ,eidos: eidos,orofos: orofos,katastasi: katastasi,energiaki: energiaki,zoni: zoni,emvadon: formData.emvadon,timi: formData.timi,etosK: formData.etosK,etosAn: formData.etosAn,ipnodomatia: formData.ipnodomatia,mpania: formData.mpania,diefthinsi: formData.diefthinsi,lng:lng,lat:lat },
        ])
        if(error){
            console.log("pipes2")
        }
        if (data) {
            console.log("mpompa2    ")
        }
        console.log(lng,lat)
      }
    


   












    return (

        <>
        
        <div className="w-full h-full fixed top-0 left-0  bg-gradient-to-tr from-slate-800 to-emerald-800"> 
            <NavBar></NavBar>
            
            <div className=" left-0 fixed top-0 h-full w-full  bg-white/20 overflow-y-auto"> 
            
                <Card className=" mt-24 mx-auto  w-4/5 lg:w-2/3 rounded-2xl mb-4 ">
                <CardHeader>
                    <CardTitle>Δημιουργία αγγελίας</CardTitle>
                    <CardDescription>Ανέβασε την αγγελία σου γρήγορα και αποτελεσματικά.</CardDescription>
                </CardHeader>
                <CardContent className="grid ">
                    <form>
                    <div className="grid w-full items-center gap-4">
                        
                        <div className="lg:w-1/3 mx-auto flex flex-col gap-4 space-y-1.5">
                        <Label htmlFor="tipos">Τύπος αγγελίας</Label>
                        <Select onValueChange={setTipos}>
                            <SelectTrigger id="tipos">
                            <SelectValue  placeholder="Επιλογή" />
                            </SelectTrigger>
                            <SelectContent position="popper" >
                            <SelectItem value="Πώληση">Πώληση</SelectItem>
                            <SelectItem value="Ενοικίαση">Ενοικίαση</SelectItem>
                            <SelectItem value="Δημοπρασία">Δημοπρασία</SelectItem>
                            </SelectContent>
                        </Select>
                        <Label htmlFor="xoros">Χώρος</Label>
                        <Select onValueChange={setXwros}>
                            <SelectTrigger id="xoros">
                            <SelectValue placeholder="Επιλογή" />
                            </SelectTrigger>
                            <SelectContent position="popper" >
                            <SelectItem value="Κατοικία">Κατοικία</SelectItem>
                            <SelectItem value="Οικόπεδο">Οικόπεδο</SelectItem>
                            
                            </SelectContent>
                        </Select>
                        <Label htmlFor="eidos">Είδος</Label>
                        <Select  onValueChange={setEidos}>
                            <SelectTrigger id="eidos">
                            <SelectValue placeholder="Επιλογή" />
                            </SelectTrigger>
                            <SelectContent position="popper" >
                            <SelectItem value="Διαμέρισμα">Διαμέρισμα</SelectItem>
                            <SelectItem value="Κτήριο">Κτήριο</SelectItem>
                            <SelectItem value="Μεζονέτα">Μεζονέτα</SelectItem>
                            <SelectItem value="Μονοκατοικία">Μονοκατοικία</SelectItem>
                            </SelectContent>
                        </Select>
                        <Label htmlFor="orofos">Όροφος</Label>
                        <Select  onValueChange={setOrofos}>
                            <SelectTrigger id="orofos">
                            <SelectValue placeholder="Επιλογή" />
                            </SelectTrigger>
                            <SelectContent position="popper" >
                            <SelectItem value="Υπόγειο">Υπόγειο</SelectItem>
                            <SelectItem value="Ημιυπόγειο">Ημιυπόγειο</SelectItem>
                            <SelectItem value="Ισόγειο">Ισόγειο</SelectItem>
                            <SelectItem value="Υπερηψωμένο">Υπερηψωμένο</SelectItem>
                            <SelectItem value="Ημιόροφος">Ημιόροφος</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="6">6</SelectItem>
                            <SelectItem value="7">7</SelectItem>
                            <SelectItem value="8+">8+</SelectItem>

                            </SelectContent>
                        </Select>
                        <Label htmlFor="katastasi">Κατάσταση</Label>
                        <Select onValueChange={setKatastasi}>
                            <SelectTrigger id="katastasi">
                            <SelectValue placeholder="Επιλογή" />
                            </SelectTrigger>
                            <SelectContent position="popper" >
                            <SelectItem value="Ημιτελές">Ημιτελές</SelectItem>
                            <SelectItem value="Νεοδόμητο">Νεοδόμητο</SelectItem>
                            <SelectItem value="Υπο Κατασκευή">Υπο Κατασκευή</SelectItem>
                            <SelectItem value="Ανακαινισμένο">Ανακαινισμένο</SelectItem>
                            <SelectItem value="Καλή κατάσταση">Καλή κατάσταση</SelectItem>
                            <SelectItem value="Χρήζει Ανακαίνησης">Χρήζει Ανακαίνησης</SelectItem>
                            </SelectContent>
                        </Select>
                        <Label htmlFor="emvadon">Εμβαδόν</Label>
                        <Input name="emvadon" placeholder="π.χ. 80" type="number" onChange={handleChange}>
                        </Input>
                        <Label htmlFor="timi">Τιμή</Label>
                        <Input name="timi" placeholder="π.χ. 100.000"  type="number" onChange={handleChange}>
                        </Input>
                        <Label htmlFor="kataskevi">Έτος κατασκευής</Label>
                        <Input name="etosK" placeholder="π.χ. 1995" type="number" onChange={handleChange}>
                        </Input>
                        <Label htmlFor="anakainisi">Έτος ανακαίνησης</Label>
                        <Input name="etosAn" placeholder="π.χ. 2005" type="number" onChange={handleChange}>
                        </Input>
                        <Label htmlFor="ipnodomatia">Υπνοδωμάτια</Label>
                        <Input name="ipnodomatia" placeholder="π.χ. 3" type="number" onChange={handleChange}>
                        </Input>
                        <Label htmlFor="mpania">Μπάνια</Label>
                        <Input name="mpania" placeholder="π.χ. 2" type="number" onChange={handleChange}>
                        </Input>
                        <Label htmlFor="energiaki">Ενεργειακή Κλάση</Label>
                        <Select  onValueChange={setEnergiaki} >
                            <SelectTrigger id="energiaki">
                            <SelectValue placeholder="Επιλογή" />
                            </SelectTrigger>
                            <SelectContent position="popper" >
                            <SelectItem value="Α+">Α+</SelectItem>
                            <SelectItem value="Α">Α</SelectItem>
                            <SelectItem value="Β">Β</SelectItem>
                            <SelectItem value="Β+">Β+</SelectItem>
                            <SelectItem value="Γ">Γ</SelectItem>
                            <SelectItem value="Δ">Δ</SelectItem>
                            <SelectItem value="Ε">Ε</SelectItem>
                            <SelectItem value="Ζ">Ζ</SelectItem>
                            <SelectItem value="Η">Η</SelectItem>
                            <SelectItem value="Εξαιρείτε">Εξαιρείται</SelectItem>
                            <SelectItem value="Υπο έκδοση">Υπο έκδοση</SelectItem>
                            </SelectContent>
                        </Select>
                        <Label htmlFor="zoni">Ζώνη</Label>
                        <Select  onValueChange={setZoni} >
                            <SelectTrigger id="zoni">
                            <SelectValue placeholder="Επιλογή" />
                            </SelectTrigger>
                            <SelectContent position="popper" >
                            <SelectItem value="Οικιστική">Οικιστική</SelectItem>
                            <SelectItem value="Εμπορική">Εμπορική</SelectItem>
                            <SelectItem value="Βιομηχανική">Βιομηχανική</SelectItem>
                            </SelectContent>
                        </Select>
                        <Label htmlFor="diefthinsi">Διεύθυνση Ακινήτου</Label>
                        <Input name="diefthinsi" placeholder="π.χ. Κανάρη 8" onChange={handleChange}>
                        </Input>
                        <div>
                            <DashboardMap >
                                
                            </DashboardMap>
                        </div>
                        
                        
                        <Label htmlFor="fotografies">Φωτογραφίες</Label>
                        <Input type="file" multiple>
                        </Input>
                        

                        

                        </div>
                    </div>
                    </form>
                </CardContent>
                
                <CardFooter className="flex  justify-between">
                    <Button variant="outline" >Ακύρωση</Button>
                    <Button variant="link" className="bg-emerald-600 hover:font-semibold" onClick={handleSubmit}>Επόμενο</Button>
                </CardFooter>
                </Card>
                
            
            </div>
            
        </div>
        </>
    )
}

