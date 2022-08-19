import { Component, OnInit } from '@angular/core';
import { RequestServicesService } from '../services/request-services.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private _reqService:RequestServicesService) { }

  ngOnInit(): void {
  }

  title = 'task';
  fileContent: any = '';
  public static data:any;

   onChange(event:any ): void {
    if (event.target.files.length !== 1) {
      console.error('No file selected');
    } else {
      const reader = new FileReader();

      reader.onloadend = (e) => {
        UploadComponent.data = reader?.result.toString();
        // console.log(UploadComponent.data);

      };


      reader.readAsText(event.target.files[0]);
      this._reqService.sendingDataToNode(UploadComponent.data).subscribe(
        (res) =>{
          console.log(res);
          
        },
        (error) =>{
          console.warn(error);
          
        }
      )
    }
  }
}
