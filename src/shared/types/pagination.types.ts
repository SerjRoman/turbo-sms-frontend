export interface PaginationData {
	totalPages: number;
	page: number;
	take: number;
}

export interface PaginatedResponse<T> {
	data: T[];
	meta: PaginationData;
}
export type PaginationParams = {
	page: number | null;
	take: number | null;
};
