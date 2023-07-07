import { Component, OnInit } from "@angular/core";
import { FileUploadService } from "../../services/file-upload.service";

@Component({
  selector: "upload-employees",
  templateUrl: "./upload-employees.component.html",
  styleUrls: ["./upload-employees.component.css"],
})
export class UploadEmployeesComponent implements OnInit {
  loading: boolean = false;
  file: File = null;

  constructor(private fileUploadService: FileUploadService) {}

  ngOnInit(): void {}

  onChange(event) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe((event: any) => {
      if (typeof event === "object") {
        this.loading = false;
      }
    });
    //TODO error/success
  }
}
