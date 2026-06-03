/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @returns {Array<{user: number, duration: number, equipment: Array<string>}>}
 */
export default function mergeData(sessions) {
  const userSessionMap = sessions.reduce((userSessions, session, index) => {
    const { user, duration, equipment } = session;
    if (!userSessions[user]) {
      userSessions[user] = {
        user,
        duration: 0,
        equipmentSet: new Set(),
        index: index + 1,
      };
    }

    userSessions[user].duration += duration;
    equipment.forEach((eq) => userSessions[user].equipmentSet.add(eq));

    return userSessions;
  }, {});

  return Object.values(userSessionMap)
    .sort((a, b) => a.index - b.index)
    .map(({ user, duration, equipmentSet }) => ({
      user: Number(user),
      duration,
      equipment: [...equipmentSet].sort(),
    }));
}
