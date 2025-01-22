export interface AccordionDataType {
  id: number;
  question: string;
  answer: string;
  isSelect: boolean;
  onClick: (currentId: number) => void;
}
