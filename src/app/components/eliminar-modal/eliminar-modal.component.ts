import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeeService, EmployeeInformacion } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-eliminar-modal',
  templateUrl: './eliminar-modal.component.html',
  styleUrls: ['./eliminar-modal.component.scss']
})
export class EliminarModalComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<EliminarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
     private employee: EmployeeService) {}

     empleados: EmployeeInformacion[] = [];

  ngOnInit(){
    this.empleados = this.data.arg3
    console.log(this.data)
  }

  noCLick(): void {
    this.dialogRef.close();
  }

  confirmar(){
    const id = this.data.arg1;
    const i = this.data.arg2;

    this.empleados.splice(i, 1);    /* con este metodo eliminamos un registro del arreglo 
    y Angular lo renderizara nuevamente */

    this.employee.borrarEmpleado(id).subscribe();
    this.dialogRef.close();
    this.employee.openSnackBar('Empleado eliminado', 'Aceptar');
  }
}
