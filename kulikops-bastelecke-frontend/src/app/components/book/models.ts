export interface IChapter {
  title: string;
  date: Date;
  paragraphs: IParagraph[];
};

export interface IParagraph {
  type: 'text' | 'thought' | 'private';
  content: string;
}