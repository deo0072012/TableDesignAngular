import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  vitamin: string;
  symbol: string;
  salt: string;
  vitamin1: string;
  vitamin2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',vitamin:'calcium',salt:'calcium',vitamin1:'10%',vitamin2:'20%'},
  {position: 2, name: 'Hydrogen', weight: 1.0079, symbol: 'X',vitamin:'calcium',salt:'calcium',vitamin1:'10%',vitamin2:'20%'},
  {position: 3, name: 'sodium', weight: 1.0079, symbol: 'Y',vitamin:'retenol',salt:'calcium',vitamin1:'10%',vitamin2:'20%'},
  {position: 4, name: 'calcium', weight: 1.0079, symbol: 'Z',vitamin:'calcium',salt:'calcium',vitamin1:'10%',vitamin2:'20%'},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'I',vitamin:'fenezol',salt:'calcium',vitamin1:'10%',vitamin2:'20%'},
  {position: 6, name: 'Hydrogen', weight: 1.0079, symbol: 'J',vitamin:'calcium',salt:'calcium',vitamin1:'10%',vitamin2:'20%'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
 ];

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class  DisplayComponent{
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
