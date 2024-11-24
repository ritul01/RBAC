// src/mock/handlers.js
import { rest } from 'msw';

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', roles: ['Admin'], status: 'Active' },
  { id: 2, name: 'Bob', email: 'bob@example.com', roles: ['Editor'], status: 'Inactive' },
];

const roles = [
  { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
];

export const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
  rest.get('/api/roles', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(roles));
  }),
];