export const teachers: Teacher[] = [
  {
    id: 2,
    name: "Er. Dhirendra Singh",
    position: "Chemistry Expert",
    image: "/dheerendra.png",
    education: "B. Tech.",
    experience: "3+ Years",
    rating: 4.8,
    available: true,
  },
  {
    id: 3,
    name: "Dr. Shashikant Chaurasiya",
    position: "Mathematics Specialist",
    image: "/shashikant.png",
    education: "PHD Maths",
    experience: "4+ Years",
    rating: 4.9,
    available: true,
  },
  {
    id: 4,
    name: "Jai Prakash Maurya ",
    position: "Biology Expert",
    image: "./jai.png",
    education: "M. Science",
    experience: "4+ Years",
    rating: 5.0,
    available: true,
  },
  {
    id: 5,
    name: "Er. Indresh Maurya",
    position: "Physics Expert",
    image: "/indresh.png",
    education: "M. Tech.",
    experience: "9+ Years",
    rating: 4.7,
    available: true,
  },
  {
    id: 6,
    name: "Er. Animesh Singh",
    position: "Chemistry Expert",
    image: "/animesh.png",
    education: "B. Tech.",
    experience: "3+ Years",
    rating: 4.9,
    available: true,
  },
  {
    id: 7,
    name: "Er. Dhananjay Swarnkar",
    position: "Mathematics Expert",
    image: "./dhananjay.png",
    education: "B. Tech.",
    experience: "4+ Years",
    rating: 4.8,
    available: true,
  },

  {
    id: 9,
    name: "Manuj Dixit",
    position: "Coding Expert",
    image: "./manuj.png",
    education: "B. Tech.",
    experience: "2+ Years",
    rating: 4.5,
    available: true,
  },
];

export interface Teacher {
  id: number;
  name: string;
  position: string;
  image: string;
  education: string;
  experience: string;
  rating: number;
  available: boolean;
}
