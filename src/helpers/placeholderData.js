import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const generateProjectList = (numberOfProjects) => {
  const projects = [];
  for (let i = 0; i < numberOfProjects; i++) {
    projects.push({
      title: lorem.generateWords(Math.ceil(Math.random() * 3)),
      description: lorem.generateSentences(Math.ceil(Math.random() * 5)),
    });
  }
  return projects;
};
