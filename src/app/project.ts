/**
 * Created by Jan on 03.03.2017.
 */

export class Project {
  id: string;
  main: {
    title: string,
    description: string,
    image: string,
  };
  intro: {
    title: string,
    description: string,
    client: string,
    role: string,
    year: string
  }
}
