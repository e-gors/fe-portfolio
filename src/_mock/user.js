import { sample } from "lodash";
import { faker } from "@faker-js/faker";

// ----------------------------------------------------------------------

const getUrl = (gender, index) => {
  let url;
  if (gender === "male") {
    url = `/assets/images/avatars/m_avatar_${index}.jpg`;
  } else {
    url = `/assets/images/avatars/f_avatar_${index}.jpg`;
  }
  return url;
};

export const users = [...Array(24)].map((_, index) => {
  const gender = sample(["female", "male"]);
  return {
    id: faker.string.uuid(),
    avatarUrl: getUrl(gender, index + 1),
    name: faker.person.fullName(),
    gender: gender,
    company: faker.company.name(),
    isVerified: faker.datatype.boolean(),
    status: sample(["active", "banned"]),
    role: sample([
      "Leader",
      "Hr Manager",
      "UI Designer",
      "UX Designer",
      "UI/UX Designer",
      "Project Manager",
      "Backend Developer",
      "Full Stack Designer",
      "Front End Developer",
      "Full Stack Developer",
    ]),
  };
});
