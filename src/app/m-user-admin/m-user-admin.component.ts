import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-m-user-admin',
  templateUrl: './m-user-admin.component.html',
  styleUrls: ['./m-user-admin.component.scss']
})
export class MUserAdminComponent implements OnInit {
  showparamcomptable:boolean =true
  selectedTabIndexsection: any;
  salaireform: any;
  selectedTabIndexsignaletique: any;
  uploadFiles: any;
  constructor(private router: Router,private formBuilder: FormBuilder,) {
    this.editionnoteform = this.formBuilder.group({
      journal:'',
      journalnon:'',
      cptedt:'',
      total:'',
      journalcop:'',
      ammounts: this.formBuilder.array([ this.createammount() ]),
      ammounts1: this.formBuilder.array([ this.createammount1() ]),
      ammounts7: this.formBuilder.array([ this.createammount7() ]),
      ammounts8: this.formBuilder.array([ this.createammount8() ]),
      ammounts0: this.formBuilder.array([ this.createammount0() ]),

      ammounts10: this.formBuilder.array([ this.createammount10() ])
   });
   this.recetteform = this.formBuilder.group({
    journal:'',
    cptedt:'',
    ammounts2: this.formBuilder.array([ this.createammount2() ])
 });
 this.achatform = this.formBuilder.group({
  journal:'',
  cptedt:'',
  cptetva:'',
  ammounts3: this.formBuilder.array([ this.createammount3() ]),
  ammounts4: this.formBuilder.array([ this.createammount4() ]),
  ammounts9: this.formBuilder.array([ this.createammount9() ]),
  ammounts11: this.formBuilder.array([ this.createammount11() ])


});
this.releveform = this.formBuilder.group({
ammounts5: this.formBuilder.array([ this.createammount5() ]),
ammounts6: this.formBuilder.array([ this.createammount6() ]),
});
this.salaireform = this.formBuilder.group({
  ammounts7: this.formBuilder.array([ this.createammount7() ])
  });
this.tvaafficheform = this.formBuilder.group({
ammounts12: this.formBuilder.array([ this.createammount12() ])
});
this.copform = this.formBuilder.group({
ammounts13: this.formBuilder.array([ this.createammount13() ])
});
  }

  get ammountControls() {
    return this.editionnoteform.get('ammounts')['controls'];
  }
  get ammountControls1() {
    return this.editionnoteform.get('ammounts1')['controls'];
  }
  get ammountControls10() {
    return this.editionnoteform.get('ammounts10')['controls'];
  }
  get ammountControls2() {
    return this.recetteform.get('ammounts2')['controls'];
  }
  get ammountControls3() {
    return this.achatform.get('ammounts3')['controls'];
  }
  get ammountControls11() {
    return this.achatform.get('ammounts11')['controls'];
  }
  get ammountControls4() {
    return this.achatform.get('ammounts4')['controls'];
  }
  get ammountControls5() {
    return this.releveform.get('ammounts5')['controls'];
  }
  get ammountControls6() {
    return this.releveform.get('ammounts6')['controls'];
  }
  get ammountControls7() {
    return this.salaireform.get('ammounts7')['controls'];
  }
  get ammountControls8() {
    return this.editionnoteform.get('ammounts8')['controls'];
  }
  get ammountControls0() {
    return this.editionnoteform.get('ammounts0')['controls'];
  }
  get ammountControls9() {
    return this.achatform.get('ammounts9')['controls'];
  }
  get ammountControls12() {
    return this.tvaafficheform.get('ammounts12')['controls'];
  }
  get ammountControls13() {
    return this.copform.get('ammounts13')['controls'];
  }
  createammount(): FormGroup {
    return this.formBuilder.group({
      taux: '', 
      cpteht: '',
      cptetva: '',
    });
  }
  createammount1(): FormGroup {
    return this.formBuilder.group({
      client:'',
      cptettc: '',
    });
  }
  createammount10(): FormGroup {
    return this.formBuilder.group({
      coproprietaire:'',
      cpte: '',
    });
  }
  createammount2(): FormGroup {
    return this.formBuilder.group({
      taux: '',
      cpteht: '',
      cptetva: '', 
      cptettc: '',     
    });
  }
  createammount3(): FormGroup {
    return this.formBuilder.group({ 
      fournisseur:'',
      cptettc: '',
    });
  }
  createammount11(): FormGroup {
    return this.formBuilder.group({ 
      beneficiaire:'',
      cpte: '',
    });
  }
  createammount4(): FormGroup {
    return this.formBuilder.group({ 
      natureachat:'',
      cpteht: '',
      cptehtdevise: '',
    });
  }
  createammount5(): FormGroup {
    return this.formBuilder.group({
      banque:'',
      numerocompte: '',
      cpte: '',
      journalmanuel: '',
    });
  }
  createammount6(): FormGroup {
    return this.formBuilder.group({
      objet:'',
      cpte: '',
    });
  }
  createammount7(): FormGroup {
    return this.formBuilder.group({
      employe:'',
      salairebrut: '',
      salaireNet: '',
      journal:''
    });
  }
  createammount8(): FormGroup {
    return this.formBuilder.group({
      nature:'',
      cpte: '',
    });
  }
  createammount0(): FormGroup {
    return this.formBuilder.group({
      nature:'',
      cpte: '',
    });
  }
  createammount9(): FormGroup {
    return this.formBuilder.group({
      reglement:'',
      cpte: '',
      journal: '',

    });
  }
  createammount12(): FormGroup {
    return this.formBuilder.group({
      tauxtva:'',
      affiche: '',
    });
  }
  createammount13() 
  : FormGroup {
    
    return  this.formBuilder.group({
      numero:'',
      coproprietaire: '',
      donneescomptable: [],
      
    });
  }
  selectedTabIndex = 0;
  displayedColumns: string[] = ['prenom', 'nom', 'mois', 'annee', 'type', 'origine', 'created', 'updated', 'confirmation'];
  user = {
    role: 'Admin',
    tarif: 50,
    droitcompta: true,
    droitsaisie: false,
    rolesuperviseur: 'Manager',
    firstname: 'John',
    lastname: 'Doe',
    confirmemail: null,
    mobile: '1234567890',
    confirmmobile: null,
    usertype: 'Client',
    nature: 'Individual',
    email: 'john.doe@example.com',
    fonction: 'Developer',
    password: 'password123',
    secteur: 'IT',
    civilite: 'Mr',
    raisonsociale: 'Example Company',
    nomsociete: 'Example Ltd',
    clientcode: '12345',
    export: true,
    salaire: 50000,
    matfiscale: '1234567 A/B/C/123',
    image: 'https://example.com/image1.jpg',
    image2: 'https://example.com/image2.jpg',
    activitynature: 'Service',
    selectactivitynature: null,
    activity: 'Programming',
    selectactivity: null,
    underactivity: 'Backend Development',
    selectunderactivity: null,
    specialite: 'Web Development',
    sousspecialite: 'Frontend Development',
    fiscalimpot: 'Regime Bénéfice Réel Normal',
    selectfiscalimpot: null,
    fiscaltvaassobli: 'Assujeti Obligatoire',
    fiscalmat: '1234567',
    fiscalmatletter: 'A',
    fiscalmatinchanged: 'B',
    fiscalmatinchanged2: 'C',
    fiscalmatnumbers: '123',
    adresseactivite: '123 Main St, Anytown',
    dateeffet: '2023-01-01',
    codepostal: '1234',
    regimehoraire: '40 hours/week',
    tauxaccidenttravail: 1.5,
    matriculecnss: '123456789',
    tauxchargepatronale: 20,
    countingdays: 22,
    matriculefiscale:'',
    prixspecialminute:'',
    exportateur:'',
    ficheUrl:'',
    ficheUrl2:'',
    natureactivite:'',
    activite:'',
    sousactivite:'',
    regimefiscalimpot:'',
  };
public userForm: FormGroup;
  public type: any[]=["recette journaliere","edition note honoraire","achat","releve manuel","releve attache","salaires"];
  public taux: any[]=["7","13","19","exonere","export","suspension"];
  public fournisseurs: any[]=[];
  public natures: any[]=[];
  public clients: any[]=[];
  public numeros: any[]=[];
  public banques: any[]=[];
  public naturemanuel: any[]=[];
  public codeValue: string;
  public secteurValue: string;
  public roleValue: string;
  public loading = false;
  private usersSub: Subscription;
  errormsg:string;
  editionnoteform: FormGroup;
  releveform: FormGroup;
  recetteform: FormGroup;
  achatform: FormGroup;
  ammounts:FormArray
  ammounts1:FormArray
  ammounts10:FormArray

  ammounts2:FormArray
  ammounts3:FormArray
  ammounts11:FormArray

  ammounts4:FormArray
  ammounts5:FormArray
  ammounts6:FormArray
  ammounts7:FormArray
  ammounts8:FormArray
  ammounts0:FormArray
  ammounts9:FormArray
  token: any;
  deccomptabilitesSub: Subscription;
  decfiscmensSub: Subscription;


  settedclients: any[]=[];
  settednatures: any[]=[];
  settedfournisseurs: any[]=[];
  settednumeros: any[]=[];
  settedbanques: any[]=[];
  settednaturereleve: any[]=[];
  objetsdebit: any[]=[];
  objetscredit: any[]=[];
  settedobjetsdebit: any[]=[];
  settedobjetscredit: any[]=[];
  settedobjets:any[]=[];
  copobjets:any[]=[];
  copnatures:any[]=[];
  copnaturesnon:any[]=[];

  reglements:any[]=[];

  settedcopobjets:any[]=[];
  settedcopnatures:any[]=[];
  settedcopnaturesnon:any[]=[];

  settedreglements:any[]=[];

  dosspasencorevalide: any[]=[];
  sorteddosspasencorevalide: any[]=[];
  filtredusers: any=[];
  prenom: any;
  nom: any;
  filtredusers2: any=[];
  prenomfisc: any;
  nomfisc: any;
  prenomaffecte: any;
  nomaffecte: any;
  private intervalSub: Subscription;
  countdown=0;
  option1Value: boolean;
  optionValue: boolean;
  beneficiaires: any[]=[];
  settedbeneficiaires:any[]=[];
  firsttimer: number;
  fiscalmatPattern = "^[0-9]{7}$";
  fiscalmatletterPattern="^[A-Z]{1}$";
  fiscalmatnumbersPattern="^[0-9]{3}$";
  fiscalmatinchangedletterPattern = "^[A-Z]{1}$";
  fiscalmatsecondinchangedletterPattern = "^[A-Z]{1}$";
  codepostalPattern: "^[a-zA-Z0-9]+{4}$"
  cifUploaded = false;
  diUploaded = false;
  natsociete=false;
  tot=false
  sal=false
  mat=false
  nontot=false
  tvaafficheform: FormGroup;
  ammounts12:FormArray
  emailverified=false
mobileverified=false
copform: FormGroup;
public ammounts13: FormArray;
submitted:any
emailconfirmwithotp()
{}
get f() { return this.userForm.controls; } 
onSubmit()
{}
saveparam($event)
{}
mobileconfirmwithotp()
{}
  onTabChange(event: any) {
    this.selectedTabIndex = event.index;
    this.selectedTabIndex==1?this.myFunction2():''
  }
  onTabChangesections(event: any) {
    this.selectedTabIndexsection = event.index;
  }
  onTabChangesdonnessignaletique(event: any) {
    this.selectedTabIndexsignaletique = event.index;
  }
  myFunction2(): number {
    throw new Error('Method not implemented.');
  }
  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadFiles=this.uploadFiles.filter(e=>e.name!='cif')
    if (file)
    {
      const myRenamedFile = new File([file],'cif', {
        type: "application/pdf",
      });
      this.userForm.patchValue({ image: myRenamedFile });  
      this.userForm.updateValueAndValidity();         
  this.uploadFiles.push(this.userForm.get('image').value);
    } 
    const reader = new FileReader();
    reader.onload = () => {
      if (this.userForm.valid) {
        this.cifUploaded = true;
      } else {
      }
    };
  }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({  
    
      role: [this.user.role],
                tarif: [this.user.prixspecialminute],
                droitcompta: [this.user.droitcompta],
                droitsaisie: [this.user.droitsaisie],
                rolesuperviseur: [this.user.rolesuperviseur],
                firstname: [this.user.firstname],
                lastname: [this.user.lastname],
                confirmemail: [null,],
                mobile: [this.user.mobile,],
                confirmmobile: [null,],
                usertype: [this.user.usertype,],
                nature: [this.user.nature,],
                email: [this.user.email, Validators.email],
                fonction: [this.user.fonction],
                password: [this.user.password],
                secteur: [this.user.secteur],
                civilite: [this.user.civilite],
                raisonsociale: [this.user.raisonsociale],
                nomsociete: [this.user.nomsociete],
                clientcode: [{value:this.user.clientcode,disabled:true}],
      export: [this.user.exportateur,],
      salaire: [this.user.salaire,],
      matfiscale: [this.user.matfiscale,],
      image: [this.user.ficheUrl||'',],
      image2: [this.user.ficheUrl2||'',],
      activitynature: [this.user.natureactivite],
      selectactivitynature: [null,],
      activity: [this.user.activite,],
      selectactivity:[null,],
      underactivity: [this.user.sousactivite,],
      selectunderactivity:[null,],
      specialite: [this.user.specialite,],
      sousspecialite: [this.user.sousspecialite,],
      fiscalimpot: [this.user.regimefiscalimpot,],
      selectfiscalimpot:[null,],
      fiscaltvaassobli: ["Assujeti Obligatoire"],
      fiscalmat:this.user.matriculefiscale?[this.user.matriculefiscale.split(' ')[0],[Validators.pattern(this.fiscalmatPattern),Validators.maxLength(7),Validators.required]]
      :['',[Validators.pattern(this.fiscalmatPattern),Validators.maxLength(7)]],
      fiscalmatletter:this.user.matriculefiscale? [this.user.matriculefiscale.split(' ')[1].split('/')[0],[Validators.pattern(this.fiscalmatletterPattern),Validators.maxLength(1),Validators.required]]
      :['',[Validators.pattern(this.fiscalmatletterPattern),Validators.maxLength(1)]],
      fiscalmatinchanged:this.user.matriculefiscale?[this.user.matriculefiscale.split(' ')[1].split('/')[1],[Validators.pattern(this.fiscalmatinchangedletterPattern),Validators.maxLength(1),Validators.required]]:['',[Validators.pattern(this.fiscalmatinchangedletterPattern),Validators.maxLength(1)]],
      fiscalmatinchanged2:this.user.matriculefiscale?[this.user.matriculefiscale.split(' ')[1].split('/')[2],[Validators.pattern(this.fiscalmatsecondinchangedletterPattern),Validators.maxLength(1),Validators.required]]:['',[Validators.pattern(this.fiscalmatsecondinchangedletterPattern),Validators.maxLength(1)]],
      fiscalmatnumbers:this.user.matriculefiscale? [this.user.matriculefiscale.split('/')[3],[Validators.pattern(this.fiscalmatnumbersPattern),Validators.maxLength(3),Validators.required]]
      :['',[Validators.pattern(this.fiscalmatnumbersPattern),Validators.maxLength(3)]],
      adresseactivite: [this.user.adresseactivite,],
      dateeffet: [this.user.dateeffet],
      codepostal:[this.user.codepostal,[Validators.maxLength(4)]],
      regimehoraire: [this.user.regimehoraire,],
      tauxaccidenttravail: [this.user.tauxaccidenttravail,],
      matriculecnss: [this.user.matriculecnss,],
      tauxchargepatronale: [this.user.tauxchargepatronale,],
      countingdays: [this.user.countingdays,],
    },
    )   }

}




