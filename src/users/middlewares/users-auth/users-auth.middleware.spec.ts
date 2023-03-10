import { UsersAuthMiddleware } from './users-auth.middleware';

describe('UsersAuthMiddleware', () => {
  it('should be defined', () => {
    expect(new UsersAuthMiddleware()).toBeDefined();
  });
});
