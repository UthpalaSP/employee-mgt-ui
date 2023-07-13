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
  isError = false;
  error: string = "";
  isSuccess = false;

  constructor(private fileUploadService: FileUploadService) {}

  ngOnInit(): void {}

  onChange(event) {
    this.file = event.target.files[0];
  }

  onUpload() {
    console.log(this.file);
    if (this.file) {
      this.loading = true;
      this.fileUploadService.upload(this.file).subscribe((event: any) => {
        if (event.status === "error") {
          this.isError = true;
          this.error = event.message;
        } else {
          this.isSuccess = true;
        }
        this.loading = false;
      });
    }
  }
}
