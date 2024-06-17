declare type RootLayoutProps = {
  children: React.ReactNode;
};

type options = {
  id: string;
  name: string;
  value: string;
};

declare type ProductType = {
  compare_at_price: string;
  id: number;
  image_src: string[];
  name: string[];
  options: options[];
  price: string;
  tag: string;
  vendor: string;
};

declare type Employee = {
  name: FormDataEntryValue | null,
  salary: FormDataEntryValue | null,
  age: FormDataEntryValue | null
}