const {getUsers} = require("../users");

describe('users', () => {
  describe('getUsers', () => {
    it('should returns two users', () => {
      expect(getUsers()).toHaveLength(2);
    });
  });
});
