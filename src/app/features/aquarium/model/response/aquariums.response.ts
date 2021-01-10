import { IAquarium } from "../aquarium";

export interface IAquariumResponse {
    content: IAquarium[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: Pageable;
    size: number;
    sort: Sort;
    totalElements: number;
    totalPages: number;
}

export interface Pageable {
    pageNumber: number;
    pageSize: number;
    paged: boolean;
}

export interface Sort {
    sorted: boolean;
    empty: boolean;
}
