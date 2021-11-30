import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-data',
  templateUrl: './add-edit-data.page.html',
  styleUrls: ['./add-edit-data.page.scss'],
})
export class AddEditDataPage implements OnInit {

  isEdit: boolean;
  type: string;
  title: string;
  subTitle: string;
  amount: string;
  id: any;
  loading: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe((data:any) => {
      console.log(data.type);
      if(data.type == 'add'){
        this.isEdit = false;
      }
      else{
        this.isEdit = true;
      }
    })
  }

  ngOnInit() {
  }

  addTransaction(){
    this.loading = true;
    let data = {
      type: this.type,
      title: this.title,
      subTitle: this.subTitle,
      amount: this.amount,
    }
    //

    this.router.navigateByUrl('/home');
  }

  updateTransaction(){
  
  }

}

