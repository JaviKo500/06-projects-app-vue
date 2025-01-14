import type { Project } from "@/modules/projects/interfaces";

export const fakeProjects: Project [] = [
  {
    id: '1',
    name: 'project 1',
    tasks: [
      {
        id: '1',
        name: 'task 1',
        completedAt: new Date()
      },
      {
        id: '2',
        name: 'task 2',
      },
      {
        id: '3',
        name: 'task 3',
      },
      {
        id: '4',
        name: 'task 4',
      },
    ]
  },
  {
    id: '2',
    name: 'project 2',
    tasks: [
      {
        id: '1',
        name: 'task 1',
      },
      {
        id: '2',
        name: 'task 2',
        completedAt: new Date()
      }
    ]
  },
  {
    id: '3',
    name: 'project 3',
    tasks: [
      {
        id: '1',
        name: 'task 1',
      },
      {
        id: '2',
        name: 'task 2',
        completedAt: new Date()
      },
    ],
  }
];