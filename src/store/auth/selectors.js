export const selectUser = (state) => state.auth?.user;
export const selectToken = (state) => state.auth?.token;

export const selectDailyWater = (state) => state.auth?.user?.dailyNorma;
