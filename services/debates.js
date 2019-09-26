const { debatesMock } = require('../utils/mocks/debates');

class DebatesService {
  async getDebates() {
    const debates = await Promise.resolve(debatesMock);
    return debates || [];
  }

  async getDebate(id) {
    id-=1
    const debate = await Promise.resolve(debatesMock[id]);
    return debate || [];
  }
  async createDebate() {
    const createDebateId = await Promise.resolve(debatesMock[0].id);
    return createDebateId;
  }
  async updateDebate() {
    const updateDebateId = await Promise.resolve(debatesMock[0].id);
    return updateDebateId;
  }
  async deleteDebate() {
    const deleteDebateId = await Promise.resolve(debatesMock[0].id);
    return deleteDebateId;
  }
}

module.exports = DebatesService