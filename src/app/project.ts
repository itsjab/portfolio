/**
 * Created by Jan on 03.03.2017.
 */

export interface Project {
  id: string;
  main: {
    title: string,
    description: string,
    image: string,
  },
  intro: {
    title: string,
    description: string,
    client: string,
    role: string,
    year: string
  },
  stats: {
    stat1: {
      image: string,
      title: string,
      description: string
    },
    stat2: {
      image: string,
      title: string,
      description: string
    },
    stat3: {
      image: string,
      title: string,
      description: string
    }
  }
}
