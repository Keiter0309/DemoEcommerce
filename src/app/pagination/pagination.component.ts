// import { Component, Input, Output, EventEmitter } from '@angular/core';
//
// @Component({
//   selector: 'app-pagination',
//   templateUrl: './pagination.component.html',
//   styleUrls: ['./pagination.component.css']
// })
// export class PaginationComponent {
//   @Input() totalItems: number; // Total number of items
//   @Input() itemsPerPage: number; // Number of items per page
//   @Input() currentPage: number; // Current page number
//
//   @Output() pageChange = new EventEmitter<number>();
//
//   get totalPages(): number {
//     return Math.ceil(this.totalItems / this.itemsPerPage);
//   }
//
//   onPageChange(pageNumber: number): void {
//     if (pageNumber >= 1 && pageNumber <= this.totalPages) {
//       this.pageChange.emit(pageNumber);
//     }
//   }
// }

