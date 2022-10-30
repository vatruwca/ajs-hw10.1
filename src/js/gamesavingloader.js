import read from './reader';
import json from './parser';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((result) => JSON.parse(result))
      .then((result) => new GameSaving(result));
  }
}
