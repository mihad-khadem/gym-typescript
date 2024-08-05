// enum selected page
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourClasses",
  contactUs = "contactUs"
}
export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}