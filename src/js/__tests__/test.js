import GameSavingLoader from '../gamesavingloader';
import GameSaving from '../gamesaving';

test('checking the method GameSavingLoader.load() to create an object', async () => {
  const sample = new GameSaving({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  const data = await GameSavingLoader.load();
  expect(data).toEqual(sample);
});
