export type ReviewCreateApi = {
  name: string;
  description: string;
  rate: number;
  lib_id: number;
  image: FileList;
};
export type ReviewApi = {
  id: number;
  name: string;
  description: string;
  rate: number;
  image: string;
};
export type ReviewChangeApi = {
  id: number;
  name: string;
  description: string;
  rate: number;
  image: string;
  lib_id: number;
};
